/*
  Author: Marcus Heppner
  Course: BMIS 235 - Final
  Quiz page: tabs, two multiple-choice quizzes, and progress (quizzes + scenarios).
*/

function load(k, f) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : f; } catch (e) { return f; } }
function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
}

const PROGRESS_KEY = "embed-progress";   // shared with the scenarios page
let progress = load(PROGRESS_KEY, {});
["sy", "sp", "sc"].forEach(function (k) { progress[k] = progress[k] || {}; });
function saveProgress() { save(PROGRESS_KEY, progress); }

function guideLink(topic, label) {
    const t = TOPICS[topic];
    const href = t.guide ? "index.html#" + t.guide : "index.html#four-ways";
    return '<a href="' + href + '">' + label + ": " + esc(t.name) + " &rarr;</a>";
}

// ---- tabs ----
const TABS = ["syntax", "spot", "progress"];
const tabs = document.querySelectorAll(".quiz-tabs a");
function showTab(name) {
    document.querySelectorAll(".quiz-panel").forEach(function (p) { p.hidden = p.id !== name; });
    tabs.forEach(function (t) { t.classList.toggle("on", t.dataset.tab === name); });
    if (name === "progress") renderProgress();
}
tabs.forEach(function (t) {
    t.addEventListener("click", function (e) { e.preventDefault(); showTab(t.dataset.tab); history.replaceState(null, "", "#" + t.dataset.tab); });
});

// ---- one multiple-choice card ----
function card(item, store, n) {
    const div = document.createElement("div");
    div.className = "card quiz-card";
    const looksLikeCode = item.options.some(function (o) { return /[<>="]/.test(o); });
    div.innerHTML = '<div class="role">Question ' + n + " &middot; " + esc(TOPICS[item.topic].name) + "</div><h3>" + esc(item.q) + "</h3>" +
        (item.code ? '<pre class="code"><code>' + esc(item.code) + "</code></pre>" : "") +
        '<div class="options' + (looksLikeCode ? " code-options" : "") + '">' + item.options.map(function (o, i) {
            return '<button type="button" class="option" data-i="' + i + '">' + esc(o) + "</button>";
        }).join("") + '</div><p class="quiz-feedback"></p>';
    const btns = div.querySelectorAll(".option"), fb = div.querySelector(".quiz-feedback");
    function reveal(chosen) {
        btns.forEach(function (b, i) {
            b.disabled = true;
            if (i === item.answer) b.classList.add("right"); else if (i === chosen) b.classList.add("wrong");
        });
        fb.innerHTML = chosen === item.answer ? "&#10003; Correct. " + guideLink(item.topic, "More")
                                              : "Not quite. " + guideLink(item.topic, "Review");
    }
    btns.forEach(function (b, i) {
        b.addEventListener("click", function () {
            progress[store][item.id] = { ok: i === item.answer, chosen: i };
            saveProgress(); reveal(i); updateScores();
        });
    });
    if (progress[store][item.id]) reveal(progress[store][item.id].chosen);
    return div;
}
function renderList(listId, items, store) {
    const list = document.getElementById(listId);
    list.innerHTML = "";
    items.forEach(function (q, i) { list.appendChild(card(q, store, i + 1)); });
}

function tally(store, items) {
    const done = items.filter(function (q) { return progress[store][q.id]; });
    return { done: done.length, right: done.filter(function (q) { return progress[store][q.id].ok; }).length, total: items.length };
}
function updateScores() {
    const a = tally("sy", SYNTAX), b = tally("sp", SPOT);
    document.getElementById("sy-score").textContent = a.right + " correct out of " + a.done + " answered (" + a.total + " questions)";
    document.getElementById("sp-score").textContent = b.right + " correct out of " + b.done + " answered (" + b.total + " questions)";
}
document.getElementById("sy-reset").addEventListener("click", function () { progress.sy = {}; saveProgress(); renderList("sy-list", SYNTAX, "sy"); updateScores(); });
document.getElementById("sp-reset").addEventListener("click", function () { progress.sp = {}; saveProgress(); renderList("sp-list", SPOT, "sp"); updateScores(); });

// ---- progress ----
function renderProgress() {
    const a = tally("sy", SYNTAX), b = tally("sp", SPOT);
    const fixed = SCENARIOS.filter(function (s) { return progress.sc[s.id]; }).length;
    document.getElementById("progress-summary").innerHTML =
        '<div class="card"><div class="role">Correct syntax</div><h3>' + a.right + " / " + a.total + "</h3></div>" +
        '<div class="card"><div class="role">Spot the error</div><h3>' + b.right + " / " + b.total + "</h3></div>" +
        '<div class="card"><div class="role">Scenarios fixed</div><h3>' + fixed + " / " + SCENARIOS.length + "</h3></div>";

    const by = {};
    function add(items, store) {
        items.forEach(function (q) {
            const r = progress[store][q.id];
            if (!r) return;
            by[q.topic] = by[q.topic] || { right: 0, done: 0 };
            by[q.topic].done++; if (r.ok) by[q.topic].right++;
        });
    }
    add(SYNTAX, "sy"); add(SPOT, "sp");
    const names = Object.keys(by).sort(function (x, y) { return by[x].right / by[x].done - by[y].right / by[y].done; });
    document.getElementById("progress-topics").innerHTML = names.length ? names.map(function (t) {
        const pct = Math.round(by[t].right / by[t].done * 100);
        return '<div class="bar"><span>' + esc(TOPICS[t].name) + '</span><span class="fill" style="width:' + (pct * 2) + 'px"></span><span>' +
               by[t].right + "/" + by[t].done + "</span></div>";
    }).join("") : '<p class="note-tip">Answer some questions to see your topics.</p>';

    const review = names.filter(function (t) { return by[t].right / by[t].done < 0.75; });
    SCENARIOS.forEach(function (s) { if (!progress.sc[s.id] && review.indexOf("sc:" + s.id) === -1) review.push("sc:" + s.id); });
    document.getElementById("progress-review").innerHTML = review.length ? review.map(function (r) {
        if (r.indexOf("sc:") === 0) {
            const s = SCENARIOS.find(function (x) { return x.id === r.slice(3); });
            return '<a class="chip" href="scenarios.html">Scenario: ' + esc(s.title) + "</a>";
        }
        const t = TOPICS[r];
        return '<a class="chip" href="' + (t.guide ? "index.html#" + t.guide : "index.html#four-ways") + '">Guide: ' + esc(t.name) + "</a>";
    }).join("") : '<p class="note-tip">Nothing flagged. Nice work.</p>';
}
document.getElementById("reset-all").addEventListener("click", function () {
    if (!window.confirm("Reset all quiz and scenario progress?")) return;
    progress = { sy: {}, sp: {}, sc: {} }; saveProgress();
    renderList("sy-list", SYNTAX, "sy"); renderList("sp-list", SPOT, "sp"); updateScores(); renderProgress();
});

// ---- start ----
renderList("sy-list", SYNTAX, "sy");
renderList("sp-list", SPOT, "sp");
updateScores();
const start = (location.hash || "").slice(1);
showTab(TABS.indexOf(start) !== -1 ? start : "syntax");
