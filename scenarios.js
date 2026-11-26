/*
  Author: Marcus Heppner
  Course: BMIS 235 - Final
  Scenario page: picker, live editor + preview, checks, hints, and a fix to compare against.
*/

function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
}
function load(k, f) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : f; } catch (e) { return f; } }
function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

const PROGRESS_KEY = "embed-progress";            // shared with the quiz page
let progress = load(PROGRESS_KEY, {});
progress.sc = progress.sc || {};

let current = null, hintIndex = 0;
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function renderPicker() {
    document.getElementById("picker").innerHTML = SCENARIOS.map(function (s) {
        const done = progress.sc[s.id];
        return '<button type="button" class="episode-btn sc-btn' + (current && current.id === s.id ? " active" : "") + '" data-id="' + s.id + '">' +
            esc(s.title) + "<small>" + esc(s.type) + (done ? " &middot; &#10003; fixed" : "") + "</small></button>";
    }).join("");
    document.querySelectorAll(".sc-btn").forEach(function (b) {
        b.addEventListener("click", function () { open(SCENARIOS.find(function (s) { return s.id === b.dataset.id; })); });
    });
}

// The preview shows your code as a tiny page. Relative image paths like images/sunset.svg still work.
function runPreview() {
    const base = location.href.replace(/[^/]*$/, "");
    preview.srcdoc = '<!DOCTYPE html><html><head><base href="' + base + '"><style>body{font-family:Georgia,serif;margin:12px;}iframe{max-width:100%;}</style></head><body>' +
        editor.value + "</body></html>";
}

function open(s) {
    current = s; hintIndex = 0;
    renderPicker();
    document.getElementById("workspace").hidden = false;
    document.getElementById("sc-title").textContent = s.title;
    document.getElementById("sc-type").textContent = s.type;
    document.getElementById("sc-story").textContent = s.story;
    document.getElementById("sc-goal").textContent = s.goal;
    document.getElementById("sc-guide").href = "index.html#" + s.guide;
    editor.value = load("embed-code-" + s.id, s.broken);
    document.getElementById("hints").innerHTML = "";
    document.getElementById("results").innerHTML = "";
    document.getElementById("solution").innerHTML = "";
    runPreview();
    document.getElementById("workspace").scrollIntoView({ behavior: "smooth" });
}

editor.addEventListener("input", function () { if (current) save("embed-code-" + current.id, editor.value); });
editor.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {           // let Tab indent instead of leaving the box
        e.preventDefault();
        const st = editor.selectionStart;
        editor.value = editor.value.slice(0, st) + "  " + editor.value.slice(editor.selectionEnd);
        editor.selectionStart = editor.selectionEnd = st + 2;
    }
});
document.getElementById("run").addEventListener("click", runPreview);
document.getElementById("reset-code").addEventListener("click", function () {
    if (!current) return;
    editor.value = current.broken;
    save("embed-code-" + current.id, editor.value);
    runPreview();
});

document.getElementById("check").addEventListener("click", function () {
    if (!current) return;
    runPreview();
    const doc = new DOMParser().parseFromString(editor.value, "text/html");
    const results = current.checks.map(function (c) {
        let ok = false;
        try { ok = !!c.test(doc, editor.value); } catch (e) { ok = false; }
        return { label: c.label, ok: ok };
    });
    const allOk = results.every(function (r) { return r.ok; });
    if (allOk) { progress.sc[current.id] = true; save(PROGRESS_KEY, progress); renderPicker(); }
    document.getElementById("results").innerHTML =
        '<div class="checklist"><p class="score-line">' + results.filter(function (r) { return r.ok; }).length + " of " + results.length + " checks passed</p><ul>" +
        results.map(function (r) {
            return '<li class="' + (r.ok ? "met" : "unmet") + '"><span class="tick">' + (r.ok ? "&#10003;" : "&#9675;") + "</span>" + esc(r.label) + "</li>";
        }).join("") + "</ul>" +
        (allOk ? '<p class="plain"><strong>Fixed!</strong> ' + esc(current.why) + "</p>" : '<p class="note-tip">Not quite. Try a hint, or compare your code with the guide.</p>') +
        "</div>";
});

document.getElementById("hint").addEventListener("click", function () {
    if (!current) return;
    if (hintIndex >= current.hints.length) return;
    hintIndex++;
    document.getElementById("hints").innerHTML = '<div class="plain debug"><strong>Hints</strong><ol class="notice-list">' +
        current.hints.slice(0, hintIndex).map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ol>" +
        (hintIndex < current.hints.length ? "" : '<p class="note-tip">That\'s every hint.</p>') + "</div>";
});

document.getElementById("show").addEventListener("click", function () {
    if (!current) return;
    if (!window.confirm("Show one working fix? Try the hints first if you haven't.")) return;
    document.getElementById("solution").innerHTML = '<h3 class="sub">One working fix</h3><pre class="code"><code>' + esc(current.solution) +
        '</code></pre><p class="plain"><strong>What was wrong:</strong> ' + esc(current.why) + "</p>";
});

renderPicker();
