/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Quiz page logic: tabs, reading check, who's speaking, close-reading drills, progress.
*/

function load(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
}
function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
}
function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
}
function title(id) { return BREAKDOWNS[id] ? BREAKDOWNS[id].title.replace(/"/g, "") : id; }
function reviewLink(id) { return '<a href="breakdown.html?id=' + id + '">Review: ' + esc(title(id)) + " &rarr;</a>"; }

const QUIZ_KEY = "dalloway-quiz";
const READING_KEY = "dalloway-close-readings";   // shared with the breakdown pages
let progress = load(QUIZ_KEY, { rc: {}, ws: {}, dr: {} });
["rc", "ws", "dr"].forEach(function (k) { if (!progress[k]) progress[k] = {}; });
function saveProgress() { save(QUIZ_KEY, progress); }

// ======================================================================
//  TABS
// ======================================================================
const tabs = document.querySelectorAll(".quiz-tabs a");
function showTab(name) {
    document.querySelectorAll(".quiz-panel").forEach(function (p) { p.hidden = p.id !== name; });
    tabs.forEach(function (t) { t.classList.toggle("on", t.dataset.tab === name); });
    if (name === "progress") renderProgress();
}
tabs.forEach(function (t) {
    t.addEventListener("click", function (e) { e.preventDefault(); showTab(t.dataset.tab); history.replaceState(null, "", "#" + t.dataset.tab); });
});

// ======================================================================
//  MULTIPLE CHOICE (reading check + who's speaking)
// ======================================================================
function mcCard(item, options, correctIndex, store, promptHtml) {
    const div = document.createElement("div");
    div.className = "card quiz-card";
    div.innerHTML = promptHtml +
        '<div class="options">' + options.map(function (o, i) {
            return '<button type="button" class="option" data-i="' + i + '">' + esc(o) + "</button>";
        }).join("") + "</div>" +
        '<p class="quiz-feedback"></p>';
    const fb = div.querySelector(".quiz-feedback");
    const btns = div.querySelectorAll(".option");

    function reveal(chosen) {
        btns.forEach(function (b, i) {
            b.disabled = true;
            if (i === correctIndex) b.classList.add("right");
            else if (i === chosen) b.classList.add("wrong");
        });
        fb.innerHTML = chosen === correctIndex ? "&#10003; Correct. " + reviewLink(item.review).replace("Review:", "Read more:")
                                               : "Not quite. " + reviewLink(item.review);
    }
    btns.forEach(function (b, i) {
        b.addEventListener("click", function () {
            progress[store][item.id] = { ok: i === correctIndex, chosen: options[i] };
            saveProgress();
            reveal(i);
            updateScores();
        });
    });
    const prev = progress[store][item.id];
    if (prev) reveal(options.indexOf(prev.chosen) === -1 ? -1 : options.indexOf(prev.chosen));
    return div;
}

function renderReadingCheck() {
    const list = document.getElementById("rc-list");
    list.innerHTML = "";
    READING_CHECK.forEach(function (q, n) {
        list.appendChild(mcCard(q, q.options, q.answer, "rc",
            '<div class="role">Question ' + (n + 1) + "</div><h3>" + esc(q.q) + "</h3>"));
    });
}

// Options for "who's speaking": the right speaker plus three others, in a stable order.
function speakerOptions(item) {
    const others = SPEAKERS.filter(function (s) { return s !== item.speaker; });
    let seed = 0;
    for (const ch of item.id) seed = (seed * 31 + ch.charCodeAt(0)) % 9973;
    const picked = [];
    while (picked.length < 3) {
        seed = (seed * 7919 + 13) % 9973;
        const s = others[seed % others.length];
        if (picked.indexOf(s) === -1) picked.push(s);
    }
    const opts = picked.concat([item.speaker]);
    // rotate so the answer isn't always last
    const r = seed % 4;
    return opts.slice(r).concat(opts.slice(0, r));
}

function renderWhoSpeaks() {
    const list = document.getElementById("ws-list");
    list.innerHTML = "";
    WHO_SPEAKS.forEach(function (q, n) {
        const opts = speakerOptions(q);
        list.appendChild(mcCard(q, opts, opts.indexOf(q.speaker), "ws",
            '<div class="role">Line ' + (n + 1) + "</div><blockquote>" + esc(q.quote) + "</blockquote>"));
    });
}

function tally(store, items) {
    const done = items.filter(function (q) { return progress[store][q.id]; });
    const right = done.filter(function (q) { return progress[store][q.id].ok; });
    return { done: done.length, right: right.length, total: items.length };
}
function updateScores() {
    const a = tally("rc", READING_CHECK), b = tally("ws", WHO_SPEAKS);
    document.getElementById("rc-score").textContent = a.right + " correct out of " + a.done + " answered (" + a.total + " questions)";
    document.getElementById("ws-score").textContent = b.right + " correct out of " + b.done + " answered (" + b.total + " lines)";
}

document.getElementById("rc-reset").addEventListener("click", function () { progress.rc = {}; saveProgress(); renderReadingCheck(); updateScores(); });
document.getElementById("ws-reset").addEventListener("click", function () { progress.ws = {}; saveProgress(); renderWhoSpeaks(); updateScores(); });

// ======================================================================
//  CLOSE-READING DRILLS + CHECKLIST
//  FEEDBACK.mode is "checklist" for now. The checklist only looks at whether an
//  answer engages with features of the passage; it never judges the idea.
//  A future "ai" mode (e.g. through a Cloudflare Worker) could plug in at assess().
// ======================================================================
const FEEDBACK = { mode: "checklist" };

const READINGS_WORDS = ["however", "alternatively", "another reading", "another way", "on the other hand", "could also",
    "might also", "or it could", "or perhaps", "at the same time", "both", "either", "unless", "though", "although",
    "one reading", "some readers", "but it"];
const THEME_WORDS = ["medic", "doctor", "treatment", "cure", "illness", "ill", "health", "patient", "norm", "normal",
    "proportion", "control", "society", "social", "expectation", "conform", "power", "authority", "convert", "conversion"];
const STOP = ["the", "a", "an", "and", "of", "to", "in", "is", "it", "was", "he", "she", "that", "his", "her", "on",
    "for", "with", "as", "be", "this", "i", "you", "we", "they", "or", "but", "at", "by", "not", "had", "have"];

function words(s) { return s.toLowerCase().replace(/[‘’]/g, "'").replace(/[^a-z0-9' ]+/g, " ").split(/\s+/).filter(Boolean); }
function has(text, key) {
    const t = text.toLowerCase().replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
    if (/^[a-z]/.test(key)) return new RegExp("\\b" + key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(t);
    return t.indexOf(key) !== -1;
}

// Did the answer quote the passage? Three words in a row from it, or a quoted word from it.
function quotesPassage(answer, quote) {
    const a = words(answer).join(" ");
    const q = words(quote);
    for (let i = 0; i + 2 < q.length; i++) {
        if ((" " + a + " ").indexOf(" " + q.slice(i, i + 3).join(" ") + " ") !== -1) return true;
    }
    const quoted = answer.match(/["“']([^"”']{2,60})["”']/g) || [];
    return quoted.some(function (m) {
        return words(m).some(function (w) { return STOP.indexOf(w) === -1 && q.indexOf(w) !== -1; });
    });
}

function checklist(drill, answer) {
    const wordCount = words(answer).length;
    const qWords = words(drill.quote);
    const content = words(answer).filter(function (w) { return STOP.indexOf(w) === -1; });
    const overlap = content.length ? content.filter(function (w) { return qWords.indexOf(w) !== -1; }).length / content.length : 1;

    const results = drill.checks.map(function (c) {
        let ok;
        if (c.anyOf2) ok = c.anyOf2.filter(function (k) { return has(answer, k); }).length >= 2;
        else ok = c.any.some(function (k) { return has(answer, k); });
        return { label: c.label, ok: ok, hint: c.hint, specific: true };
    });
    results.push(
        { label: "You quote the passage directly.", ok: quotesPassage(answer, drill.quote),
          hint: "Put the exact words you're discussing in quotation marks." },
        { label: "You go beyond restating the quote.", ok: wordCount >= 25 && overlap < 0.5,
          hint: "Most of your answer repeats the passage. Add what you notice about it." },
        { label: "You consider more than one possible reading.", ok: READINGS_WORDS.some(function (k) { return has(answer, k); }),
          hint: "Try \"One reading is... another is...\" or \"However...\"" },
        { label: "You connect it to medicine and social norms.", ok: THEME_WORDS.some(function (k) { return has(answer, k); }),
          hint: "How does this passage relate to your topic?" },
        { label: "You develop the point (60+ words).", ok: wordCount >= 60,
          hint: "You're at " + wordCount + " words. Keep going." }
    );
    return results;
}

function assess(drill, answer) {
    // Future: if (FEEDBACK.mode === "ai") return fetch(FEEDBACK.endpoint, {...}) ...
    return Promise.resolve(checklist(drill, answer));
}

let currentDrill = null;
function renderDrillPicker() {
    document.getElementById("drill-picker").innerHTML = DRILLS.map(function (d) {
        const p = progress.dr[d.id];
        const badge = p ? '<small>' + p.met + "/" + p.total + " checks</small>" : "<small>Not started</small>";
        return '<button type="button" class="episode-btn drill-btn' + (currentDrill && currentDrill.id === d.id ? " active" : "") +
               '" data-id="' + d.id + '">' + esc(d.title) + badge + "</button>";
    }).join("");
    document.querySelectorAll(".drill-btn").forEach(function (b) {
        b.addEventListener("click", function () { openDrill(DRILLS.find(function (d) { return d.id === b.dataset.id; })); });
    });
}

function openDrill(d) {
    currentDrill = d;
    renderDrillPicker();
    const readings = load(READING_KEY, {});
    const area = document.getElementById("drill-area");
    area.innerHTML =
        '<div class="card drill-card">' +
            "<h3>" + esc(d.title) + "</h3>" +
            "<blockquote>" + esc(d.quote) + "</blockquote>" +
            '<p class="note-tip">' + reviewLink(d.review).replace("Review:", "Context:") + "</p>" +
            '<p class="plain"><strong>Prompt:</strong> ' + esc(d.prompt) + "</p>" +
            '<textarea id="drill-text" rows="9" placeholder="Write your close reading here..."></textarea>' +
            '<div class="row" style="margin-top:10px"><button type="button" id="drill-check">Check my answer</button>' +
            '<span class="note-tip" id="drill-count"></span></div>' +
            '<div id="drill-results"></div>' +
        "</div>";
    const ta = document.getElementById("drill-text");
    ta.value = readings[d.quote] || "";
    function count() { document.getElementById("drill-count").textContent = words(ta.value).length + " words"; }
    count();
    ta.addEventListener("input", function () {
        count();
        const r = load(READING_KEY, {});
        if (ta.value.trim()) r[d.quote] = ta.value; else delete r[d.quote];
        save(READING_KEY, r);
    });
    document.getElementById("drill-check").addEventListener("click", function () {
        if (!ta.value.trim()) { document.getElementById("drill-results").innerHTML = '<p class="note-tip">Write something first.</p>'; return; }
        assess(d, ta.value).then(function (res) {
            const met = res.filter(function (r) { return r.ok; }).length;
            progress.dr[d.id] = { met: met, total: res.length, ts: Date.now() };
            saveProgress();
            renderDrillPicker();
            const specific = res.filter(function (r) { return r.specific; });
            const general = res.filter(function (r) { return !r.specific; });
            function rows(list) {
                return list.map(function (r) {
                    return '<li class="' + (r.ok ? "met" : "unmet") + '"><span class="tick">' + (r.ok ? "&#10003;" : "&#9675;") + "</span>" +
                           esc(r.label) + (r.ok ? "" : '<span class="hint">' + esc(r.hint) + "</span>") + "</li>";
                }).join("");
            }
            document.getElementById("drill-results").innerHTML =
                '<div class="checklist">' +
                    '<p class="score-line">' + met + " of " + res.length + " checks met</p>" +
                    "<h4>This passage</h4><ul>" + rows(specific) + "</ul>" +
                    "<h4>Close-reading habits</h4><ul>" + rows(general) + "</ul>" +
                    '<p class="note-tip">The checklist looks for engagement with the passage, not for a right answer. ' +
                    "A strong reading can miss a check, and meeting them all doesn't make an argument correct.</p>" +
                "</div>";
        });
    });
}

// ======================================================================
//  PROGRESS
// ======================================================================
function renderProgress() {
    const a = tally("rc", READING_CHECK), b = tally("ws", WHO_SPEAKS);
    const drillsDone = DRILLS.filter(function (d) { return progress.dr[d.id]; });
    const avg = drillsDone.length ? Math.round(drillsDone.reduce(function (t, d) { return t + progress.dr[d.id].met / progress.dr[d.id].total; }, 0) / drillsDone.length * 100) : 0;
    document.getElementById("progress-summary").innerHTML =
        '<div class="card"><div class="role">Reading check</div><h3>' + a.right + " / " + a.total + "</h3><p>" + a.done + " answered</p></div>" +
        '<div class="card"><div class="role">Who\'s speaking?</div><h3>' + b.right + " / " + b.total + "</h3><p>" + b.done + " answered</p></div>" +
        '<div class="card"><div class="role">Close-reading drills</div><h3>' + drillsDone.length + " / " + DRILLS.length + "</h3><p>" +
            (drillsDone.length ? "Average " + avg + "% of checks met" : "None checked yet") + "</p></div>";

    // By topic, using each item's breakdown themes.
    const topics = {};
    function add(items, store) {
        items.forEach(function (q) {
            const r = progress[store][q.id];
            if (!r || !BREAKDOWNS[q.review]) return;
            BREAKDOWNS[q.review].themes.forEach(function (t) {
                topics[t] = topics[t] || { right: 0, done: 0 };
                topics[t].done++;
                if (r.ok) topics[t].right++;
            });
        });
    }
    add(READING_CHECK, "rc");
    add(WHO_SPEAKS, "ws");
    const names = Object.keys(topics).sort(function (x, y) { return topics[x].right / topics[x].done - topics[y].right / topics[y].done; });
    document.getElementById("progress-topics").innerHTML = names.length ? names.map(function (t) {
        const pct = Math.round(topics[t].right / topics[t].done * 100);
        return '<div class="bar"><span>' + esc(t) + '</span><span class="fill" style="width:' + (pct * 2) + 'px"></span><span>' +
               topics[t].right + "/" + topics[t].done + "</span></div>";
    }).join("") : '<p class="note-tip">Answer some questions to see your topics.</p>';

    // Breakdowns to review: missed questions and drills under 60%.
    const review = [];
    READING_CHECK.concat(WHO_SPEAKS).forEach(function (q) {
        const r = progress.rc[q.id] || progress.ws[q.id];
        if (r && !r.ok && review.indexOf(q.review) === -1) review.push(q.review);
    });
    DRILLS.forEach(function (d) {
        const r = progress.dr[d.id];
        if (r && r.met / r.total < 0.6 && review.indexOf(d.review) === -1) review.push(d.review);
    });
    document.getElementById("progress-review").innerHTML = review.length
        ? review.map(function (id) { return '<a class="chip" href="breakdown.html?id=' + id + '">' + esc(title(id)) + "</a>"; }).join("")
        : '<p class="note-tip">Nothing flagged yet.</p>';
}

document.getElementById("reset-all").addEventListener("click", function () {
    if (!window.confirm("Reset all quiz progress? Your written close readings are kept.")) return;
    progress = { rc: {}, ws: {}, dr: {} };
    saveProgress();
    renderReadingCheck(); renderWhoSpeaks(); renderDrillPicker(); updateScores(); renderProgress();
});

// ---- start ----
renderReadingCheck();
renderWhoSpeaks();
renderDrillPicker();
updateScores();
const startTab = (location.hash || "").slice(1);
showTab(["reading", "who", "drills", "progress"].indexOf(startTab) !== -1 ? startTab : "reading");
