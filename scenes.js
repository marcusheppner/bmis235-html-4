/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Builds the scene and monologue lists on scenes.html from BREAKDOWNS (breakdowns.js).
*/

function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
}

const ORDER = Object.keys(BREAKDOWNS);
const SCENES = ORDER.filter(function (k) { return BREAKDOWNS[k].kind === "scene"; });
const MONOS = ORDER.filter(function (k) { return BREAKDOWNS[k].kind === "mono"; });

function card(key, num) {
    const b = BREAKDOWNS[key];
    const isMono = b.kind === "mono";
    return '<div class="scene' + (isMono ? " mono" : "") + '" id="' + key + '"><div class="num">' + num + "</div><div>" +
        "<h3>" + esc(b.title) + "</h3>" +
        '<div class="who">' + esc(b.who) + " &middot; " + esc(b.where) + "</div>" +
        (isMono ? "<blockquote>" + esc(b.quotes[0][0]) + "</blockquote>" : "") +
        "<p>" + esc(b.summary) + "</p>" +
        '<div class="row">' + b.themes.map(function (t) { return '<span class="chip small">' + esc(t) + "</span>"; }).join("") + "</div>" +
        '<a class="status-link" href="breakdown.html?id=' + key + '">Breakdown &rarr;</a>' +
        "</div></div>";
}

// Scenes grouped by part of the day.
let html = "";
PARTS.forEach(function (p) {
    const inPart = SCENES.filter(function (k) { return BREAKDOWNS[k].part === p[0]; });
    if (!inPart.length) return;
    html += '<h3 class="part-label">' + p[1] + "</h3>";
    inPart.forEach(function (k) { html += card(k, String(SCENES.indexOf(k) + 1).padStart(2, "0")); });
});
document.getElementById("scene-list").innerHTML = html;

document.getElementById("mono-list").innerHTML = MONOS.map(function (k, i) { return card(k, "M" + (i + 1)); }).join("");

// Jump to a #scene-xx link once the list exists.
if (location.hash) {
    const el = document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView();
}
