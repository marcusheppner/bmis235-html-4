/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Fills breakdown.html from BREAKDOWNS (breakdowns.js) and runs the page-number finder.
*/

const CAMERA = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l1.6-2.4A1.5 1.5 0 0 1 9.9 5h4.2a1.5 1.5 0 0 1 1.3.6L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></svg>';

function load(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
}
function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
}
function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
}

// Page numbers and close readings are keyed by the quote's text, so a quote that
// appears in both a scene and a monologue shares its page number and notes.
const PAGES_KEY = "dalloway-pages";
const READING_KEY = "dalloway-close-readings";
let pages = load(PAGES_KEY, {});
let readings = load(READING_KEY, {});

// Scenes first, then monologues, in the order they're written in breakdowns.js.
const ids = Object.keys(BREAKDOWNS).filter(function (k) { return BREAKDOWNS[k].kind === "scene"; })
    .concat(Object.keys(BREAKDOWNS).filter(function (k) { return BREAKDOWNS[k].kind === "mono"; }));
const monoIds = ids.filter(function (k) { return BREAKDOWNS[k].kind === "mono"; });
const id = new URLSearchParams(location.search).get("id");
const entry = BREAKDOWNS[id];

function label(key) {
    return BREAKDOWNS[key].kind === "scene" ? "Scene " + key.slice(6) : "Monologue M" + (monoIds.indexOf(key) + 1);
}

if (!entry) {
    document.getElementById("content").innerHTML =
        '<section><h2>Breakdown not found</h2><p>Pick a scene or monologue from the <a href="scenes.html">Key Scenes page</a>.</p></section>';
    document.getElementById("title").textContent = "Breakdown not found";
} else {
    render();
}

function render() {
    document.title = entry.title.replace(/"/g, "") + " - Medicine & Mrs. Dalloway";
    document.getElementById("kicker").textContent = label(id) + " breakdown";
    document.getElementById("title").textContent = entry.title;
    document.getElementById("who").textContent = entry.who + " · " + entry.where;
    document.getElementById("back").href = "scenes.html#" + id;
    document.getElementById("back").innerHTML = "&larr; Back to the scene list";

    document.getElementById("happens-text").innerHTML = entry.happens.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    document.getElementById("lens").textContent = entry.lens;
    document.getElementById("angle").textContent = entry.angle;
    document.getElementById("themes").innerHTML = entry.themes.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("");

    const list = document.getElementById("quote-list");
    list.innerHTML = "";
    entry.quotes.forEach(function (q, i) {
        const quote = q[0], meaning = q[1];
        const div = document.createElement("div");
        div.className = "card quote-card";
        div.innerHTML =
            '<div class="quote-top">' +
                '<blockquote>' + esc(quote) + "</blockquote>" +
                '<div class="page-box">' +
                    '<label class="note-tip" for="page-' + i + '">Page</label>' +
                    '<input type="text" inputmode="numeric" class="page-input" id="page-' + i + '" placeholder="?">' +
                    '<button type="button" class="ghost cam-btn" title="Photograph the page to find it">' + CAMERA + "</button>" +
                "</div>" +
            "</div>" +
            '<p class="est-page"></p>' +
            '<p class="page-msg note-tip"></p>' +
            '<p class="meaning"><strong>Underlying meaning:</strong> ' + esc(meaning) + "</p>" +
            '<details class="close-reading"' + (readings[quote] ? " open" : "") + ">" +
                "<summary>My close reading</summary>" +
                '<textarea rows="4" placeholder="Word choice, punctuation, rhythm, images, who is speaking... what do you notice?"></textarea>' +
            "</details>";
        list.appendChild(div);

        const input = div.querySelector(".page-input");
        const est = estimatePage(quote);
        const estEl = div.querySelector(".est-page");
        input.value = pages[quote] || "";
        if (est) input.placeholder = "~" + est.page;
        function showEstimate() {
            if (!est) { estEl.textContent = ""; return; }
            estEl.innerHTML = input.value.trim()
                ? "&#10003; In your copy: <strong>p. " + esc(input.value.trim()) + "</strong>"
                : "In your edition: about <strong>p. " + est.page + "</strong> (check pp. " + est.from + "&ndash;" + est.to + ")";
        }
        showEstimate();
        input.addEventListener("input", function () {
            const v = input.value.trim();
            if (v) pages[quote] = v; else delete pages[quote];
            save(PAGES_KEY, pages);
            div.querySelector(".page-msg").textContent = "";
            showEstimate();
        });
        div.querySelector(".cam-btn").addEventListener("click", function () { startScan(i); });

        const ta = div.querySelector("textarea");
        ta.value = readings[quote] || "";
        ta.addEventListener("input", function () {
            if (ta.value.trim()) readings[quote] = ta.value; else delete readings[quote];
            save(READING_KEY, readings);
        });
    });

    document.getElementById("related").innerHTML = (entry.links || []).filter(function (k) { return BREAKDOWNS[k]; })
        .map(function (k) {
            return '<a class="chip" href="breakdown.html?id=' + k + '">' + label(k) + ": " + esc(BREAKDOWNS[k].title.replace(/"/g, "")) + "</a>";
        }).join("");

    const pos = ids.indexOf(id);
    const prev = document.getElementById("prev"), next = document.getElementById("next");
    if (pos > 0) prev.href = "breakdown.html?id=" + ids[pos - 1]; else prev.hidden = true;
    if (pos < ids.length - 1) next.href = "breakdown.html?id=" + ids[pos + 1]; else next.hidden = true;

    const ed = document.getElementById("edition");
    ed.value = load("dalloway-edition", EDITION.name);
    ed.addEventListener("input", function () { save("dalloway-edition", ed.value); });
}

// ======================================================================
//  PAGE FINDER: photo of a book page -> read text -> match all quotes
// ======================================================================
const photoInput = document.getElementById("page-photo");
const scanStatus = document.getElementById("scan-status");
let scanFor = null;   // which quote's camera was tapped

function startScan(i) {
    scanFor = i;
    photoInput.click();
}

photoInput.addEventListener("change", async function () {
    const file = photoInput.files && photoInput.files[0];
    photoInput.value = "";
    if (!file) return;
    const cards = document.querySelectorAll(".quote-card");
    const target = cards[scanFor];
    const msg = target.querySelector(".page-msg");
    msg.textContent = "Reading the page... (the first time takes a few seconds)";
    scanStatus.textContent = "";

    let text;
    try {
        text = await OCR.read(file, function (p) { msg.textContent = "Reading the page... " + Math.round(p * 100) + "%"; });
    } catch (e) {
        msg.textContent = "Couldn't load the page reader (are you offline?). Type the page number instead.";
        return;
    }

    const pageNum = OCR.findPageNumber(text);
    const found = [];
    entry.quotes.forEach(function (q, i) {
        if (OCR.findQuote(text, q[0])) found.push(i);
    });

    if (!found.length) {
        msg.innerHTML = "I couldn't find this quote on that page. It may be on the facing page, or the photo may be blurry or tilted." +
            (pageNum ? ' I did see page <strong>' + esc(pageNum) + '</strong>. <button type="button" class="ghost use-anyway">Use p. ' + esc(pageNum) + " anyway</button>" : "");
        const btn = msg.querySelector(".use-anyway");
        if (btn) btn.addEventListener("click", function () { setPage(scanFor, pageNum); msg.textContent = "Saved."; });
        return;
    }

    found.forEach(function (i) {
        const m = cards[i].querySelector(".page-msg");
        if (pageNum) {
            setPage(i, pageNum);
            m.innerHTML = "&#10003; Found on page " + esc(pageNum) + ".";
        } else {
            m.textContent = "✓ Found this quote in your photo, but couldn't read a page number. Type it in the box.";
            cards[i].querySelector(".page-input").focus();
        }
    });
    if (found.indexOf(scanFor) === -1) {
        msg.textContent = "This quote isn't on that page, but I found " + found.length + " other quote" + (found.length > 1 ? "s" : "") + " there.";
    }
    scanStatus.textContent = found.length > 1 ? "That photo matched " + found.length + " quotes on this breakdown." : "";
});

function setPage(i, num) {
    const quote = entry.quotes[i][0];
    pages[quote] = String(num);
    save(PAGES_KEY, pages);
    const input = document.querySelectorAll(".quote-card")[i].querySelector(".page-input");
    input.value = num;
    input.dispatchEvent(new Event("input"));
}
