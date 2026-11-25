/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Discussion Chat. Ask a question or jot a thought; the chat looks for matching points in
  my class discussion notes (discussion-data.js) first, then in the site's theme guide
  (TOPICS below). It answers with my notes, quotes with page estimates, and questions,
  not with finished interpretations. It matches keywords; it is not an AI model.
*/

const TOPICS = [
    {
        name: "Proportion & normality", theme: true,
        keys: ["proportion", "normal", "normality", "norm", "norms", "balance", "conform", "deviant", "deviance", "standard", "ideal", "ideals", "expectation", "expectations"],
        say: "Look at Bradshaw's wording in Scene 06: \"he never spoke of 'madness'; he called it not having a sense of proportion.\" Then the narrator's passage (Monologue M4): \"Proportion, divine proportion, Sir William's goddess.\"",
        scenes: ["scene-06", "mono-03"],
        ask: "What does \"proportion\" mean in everyday speech, and what does it mean in Bradshaw's mouth?",
    },
    {
        name: "Conversion & control", theme: true,
        keys: ["conversion", "convert", "control", "power", "dominat", "force", "forcing", "soul", "kilman", "religio", "discipline"],
        say: "Look at the narrator's line \"Conversion is her name and she feasts on the wills of the weakly\" (M4), Miss Kilman and Elizabeth (Scene 07), and Clarissa's phrase \"forcing your soul\" (Scene 12).",
        scenes: ["mono-03", "scene-07", "scene-12"],
        ask: "Who tries to change whom in the novel, and how?",
    },
    {
        name: "Denial (Holmes)", theme: true,
        keys: ["holmes", "denial", "deny", "nothing the matter", "nothing whatever", "porridge", "hobby", "hobbies", "willpower", "own control", "gp"],
        say: "Look at Holmes's lines in Scene 05: \"There was nothing whatever the matter, said Dr. Holmes\" and \"health is largely a matter in our own control.\" Also his advice as Rezia remembers it in Scene 02.",
        scenes: ["scene-05", "scene-02", "scene-09"],
        ask: "How do you read Holmes's view that health is in our control?",
    },
    {
        name: "Rest cure & isolation", theme: true,
        keys: ["rest", "rest cure", "isolat", "separat", "home in the country", "asylum", "institution", "confine", "seclu", "nursing home", "sent away", "removed"],
        say: "Look at Bradshaw's plan in Scene 06: \"We have been arranging that you should go into a home.\" Compare Clarissa's attic room (Scene 03) and the rest-cure card on the Home page.",
        scenes: ["scene-06", "mono-03", "scene-03"],
        ask: "Who is separated from whom in the medical scenes, and who decides?",
    },
    {
        name: "Shell shock & masculinity", theme: true,
        keys: ["shell shock", "shell-shock", "ptsd", "trauma", "war", "soldier", "veteran", "evans", "coward", "cowardice", "masculin", "manly", "manhood", "feeling very little", "numb"],
        say: "Look at Septimus after Evans's death: he \"congratulated himself upon feeling very little\" (Scene 05); Holmes's \"The coward!\" (Scene 09); and \"the deferred effects of shell shock\" at the party (Scene 11).",
        scenes: ["scene-05", "scene-09", "scene-11"],
        ask: "Do you see any connection between military ideals and the doctors' attitudes?",
    },
    {
        name: "Class & medical authority", theme: true,
        keys: ["social class", "upper class", "ruling class", "harley", "establishment", "party", "prime minister", "england", "nation", "empire", "authority", "expert", "upper", "wealth", "civilisation", "civilization", "ambulance", "bill", "law", "policy"],
        say: "Look at the Bradshaws at the party with the Prime Minister and Richard (Scene 11), Peter's \"One of the triumphs of civilisation\" (Scene 10), and \"made England prosper\" in the Proportion passage (M4).",
        scenes: ["scene-11", "mono-03", "scene-10"],
        ask: "Where does Bradshaw appear besides his office, and what do you make of it?",
    },
    {
        name: "Eugenics & the 'unfit'", theme: true,
        keys: ["eugenic", "unfit", "childbirth", "propagate", "breed", "degenera", "mental deficiency", "steriliz"],
        say: "Look at the list in the Proportion passage (M4): \"secluded her lunatics, forbade childbirth, penalised despair, made it impossible for the unfit to propagate their views.\" See the eugenics card on the Home page for context.",
        scenes: ["mono-03"],
        ask: "How do you hear the tone of that list in the Proportion passage?",
    },
    {
        name: "Care vs. cure", theme: true,
        keys: ["care", "caregiv", "caring", "rezia", "lucrezia", "hat", "wife", "support", "accommodat"],
        say: "Look at the hat scene (Scene 08): \"Never had he done anything which made him feel so proud.\" Also Rezia's \"I am alone; I am alone!\" (M2) and her role in Scene 02.",
        scenes: ["scene-08", "mono-06", "scene-04"],
        ask: "What seems to help Septimus, and what doesn't?",
    },
    {
        name: "The patient's view", theme: true,
        keys: ["septimus", "patient", "vision", "visions", "hallucinat", "madness", "mad", "insan", "sane", "sanity", "message", "messages", "human nature", "paranoi", "insight"],
        say: "Look at Septimus's messages (M1): \"Men must not cut down trees. There is a God.\" And his view of the doctors (M3): \"Holmes and Bradshaw are on you.\"",
        scenes: ["mono-01", "mono-02", "scene-04"],
        ask: "How much weight does the novel give to Septimus's own view?",
    },
    {
        name: "Death as resistance", theme: true,
        keys: ["death", "die", "dies", "suicide", "killed", "jump", "window", "defiance", "resist", "resistance", "refusal", "refuse", "intolerable"],
        say: "Look at Septimus's last thoughts (M6): \"He did not want to die. Life was good. The sun hot.\" His last words \"I'll give it you!\" (Scene 09), and Clarissa's \"Death was defiance\" (M7).",
        scenes: ["mono-05", "scene-09", "scene-12"],
        ask: "What details support different readings of Septimus's death?",
    },
    {
        name: "Gender", theme: true,
        keys: ["gender", "women", "woman", "female", "wife", "lady bradshaw", "gone under", "clarissa", "yellow wallpaper", "hyster", "nervous", "feminis"],
        say: "Look at Lady Bradshaw: \"Fifteen years ago she had gone under\" (M4). Clarissa's attic: \"Narrower and narrower would her bed be\" (Scene 03). The rest-cure and Yellow Wallpaper notes on the Home page.",
        scenes: ["mono-03", "scene-03", "scene-11"],
        ask: "Do the women in the novel experience any version of the pressures Septimus faces?",
    },
    {
        name: "Visibility & shame", theme: true,
        keys: ["shame", "ashamed", "embarrass", "notice", "visible", "invisible", "hide", "hidden", "public", "stigma"],
        say: "Look at Rezia on Bond Street: \"People must notice; people must see\" (Scene 01), and the moment Lady Bradshaw mentions the death at the party (Scene 11).",
        scenes: ["scene-01", "scene-11"],
        ask: "Who worries about being seen, and why?",
    },
    {
        name: "Woolf's own treatment", theme: false,
        keys: ["woolf", "author", "biograph", "savage", "her doctors", "leonard", "on being ill", "virginia", "diary"],
        say: "See \"Woolf & her doctors\" on the Home page: her rest cures, her doctors, and her diary line about wanting to \"criticise the social system, & to show it at work.\"",
        scenes: ["mono-03"],
        ask: "How much should Woolf's biography shape your reading?",
    },
    {
        name: "Disability studies lenses", theme: false,
        keys: ["disability", "social model", "medical model", "foucault", "ableism", "ableist", "impairment", "lens", "theory", "critic"],
        say: "See \"Critical lenses\" on the Home page for the medical and social models of disability and Foucault's idea of normalization. Then compare the doctors' scenes (Scene 05, Scene 06).",
        scenes: ["scene-06", "mono-03"],
        ask: "Which model of disability fits the doctors? Which fits the novel?",
    },
];

const STORE = "dalloway-notes";
function load() { try { return JSON.parse(localStorage.getItem(STORE)) || []; } catch (e) { return []; } }
function persist(list) { try { localStorage.setItem(STORE, JSON.stringify(list)); return true; } catch (e) { return false; } }

let notes = load();
const box = document.getElementById("messages");

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
}

// Short keys (4 letters or fewer) must be whole words; longer keys match the start of a word.
function hasKey(text, key) {
    const safe = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(key.length <= 4 ? "\\b" + safe + "\\b" : "\\b" + safe).test(text);
}
function score(text, keys) {
    const t = text.toLowerCase();
    return keys.reduce(function (n, k) { return n + (hasKey(t, k) ? 1 : 0); }, 0);
}
function best(list, text, getKeys, max) {
    return list.map(function (x) { return { x: x, s: score(text, getKeys(x)) }; })
        .filter(function (m) { return m.s > 0; })
        .sort(function (a, b) { return b.s - a.s; })
        .slice(0, max).map(function (m) { return m.x; });
}

function quoteLine(q) {
    const est = (typeof estimatePage === "function") ? estimatePage(q[0]) : null;
    return "<p>&ldquo;" + escapeHtml(q[0]) + "&rdquo;" + (est ? ' <span class="stamp-inline">(about p. ' + est.page + ")</span>" : "") + "</p>";
}

function replyFor(text) {
    const disc = best(DISCUSSION, text, function (d) { return d.keys; }, 2);
    let html = "";
    if (disc.length) {
        const d = disc[0];
        html += "<h4>From class (" + escapeHtml(d.date) + "): " + escapeHtml(d.title.replace(/"/g, "")) + "</h4>" +
                "<ul>" + d.notes.map(function (n) { return "<li>" + escapeHtml(n) + "</li>"; }).join("") + "</ul>";
        html += "<h4>In the text</h4>" + d.quotes.slice(0, 2).map(quoteLine).join("");
        html += "<h4>A question to think about</h4><p>" + escapeHtml(d.further[0]) + "</p>";
        html += '<p><a href="discussion.html#' + d.id + '">See all of &ldquo;' + escapeHtml(d.title.replace(/"/g, "")) + "&rdquo; &rarr;</a>";
        if (disc[1]) html += ' &middot; Also related: <a href="discussion.html#' + disc[1].id + '">' + escapeHtml(disc[1].title.replace(/"/g, "")) + "</a>";
        html += "</p>";
        return html;
    }
    const topic = best(TOPICS, text, function (t) { return t.keys; }, 1)[0];
    if (topic) {
        html += "<h4>Not in your class notes yet. From the site's guide: " + escapeHtml(topic.name) + "</h4><p>" + topic.say + "</p>";
        html += "<h4>A question to think about</h4><p>" + escapeHtml(topic.ask) + "</p>";
        return html;
    }
    return "<p>I couldn't connect that to your class notes or the site's topics. Try naming a character, a word from " +
           "class, or a passage (like <em>Holmes</em>, <em>human nature</em>, <em>conversion</em>, <em>communication</em>, " +
           "or <em>proportion</em>).</p>";
}

function stamp(ts) {
    return new Date(ts).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}
function addBubble(cls, html, ts) {
    const d = document.createElement("div");
    d.className = "msg " + cls;
    d.innerHTML = html + (ts ? '<span class="stamp">' + stamp(ts) + "</span>" : "");
    box.appendChild(d);
    box.scrollTop = box.scrollHeight;
}

function renderAll() {
    box.innerHTML = "";
    addBubble("bot", "<p>Ask a question or jot a thought about your class discussion. I'll point you to the matching notes " +
              "from class, the passages they connect to (with page estimates), and a question to push the idea further.</p>");
    notes.forEach(function (n) {
        addBubble("user", escapeHtml(n.text).replace(/\n/g, "<br>"), n.ts);
        addBubble("bot", replyFor(n.text));
    });
    document.getElementById("count").textContent = notes.length;
}

function send(text) {
    text = text.trim();
    if (!text) return;
    const n = { id: Date.now(), ts: Date.now(), text: text };
    notes.push(n);
    persist(notes);
    addBubble("user", escapeHtml(text).replace(/\n/g, "<br>"), n.ts);
    addBubble("bot", replyFor(text));
    document.getElementById("count").textContent = notes.length;
}

document.getElementById("composer").addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.getElementById("input");
    send(input.value);
    input.value = "";
});
document.getElementById("input").addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); document.getElementById("composer").requestSubmit(); }
});

document.getElementById("export").addEventListener("click", function () {
    const text = notes.map(function (n) { return "[" + stamp(n.ts) + "] " + n.text; }).join("\n\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text || "No messages yet."], { type: "text/plain" }));
    a.download = "mrs-dalloway-discussion-chat.txt";
    a.click();
});
document.getElementById("clear").addEventListener("click", function () {
    if (!notes.length) return;
    if (!window.confirm("Clear your chat history? Download it first if you want a copy.")) return;
    notes = [];
    persist(notes);
    renderAll();
});

// Topic list in the sidebar, built from the class notes.
document.getElementById("topic-list").innerHTML = DISCUSSION.map(function (d) {
    return '<button type="button" class="ghost topic-btn" data-q="' + escapeHtml(d.title.replace(/"/g, "")) + '">' +
           escapeHtml(d.title.replace(/"/g, "")) + "</button>";
}).join("");
document.querySelectorAll(".topic-btn").forEach(function (b) {
    b.addEventListener("click", function () { send(b.dataset.q); });
});

renderAll();

// Arriving from the Class Discussion page with ?ask=...
const ask = new URLSearchParams(location.search).get("ask");
if (ask) { document.getElementById("input").value = "Tell me about " + ask; document.getElementById("input").focus(); }
