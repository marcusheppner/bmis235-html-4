/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Class notes chat. Each topic below has keywords; a note is matched to the topics
  whose keywords it mentions most. To teach the chat something new, add a topic
  or add keywords to an existing one.
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
function persist(list) {
    try { localStorage.setItem(STORE, JSON.stringify(list)); return true; } catch (e) { return false; }
}

let notes = load();
const box = document.getElementById("messages");

function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
}

// Short keys (4 letters or fewer) must be whole words, so "war" doesn't match "toward".
// Longer keys match the start of a word, so "isolat" matches "isolation".
function hasKey(text, key) {
    const safe = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = key.length <= 4 ? "\\b" + safe + "\\b" : "\\b" + safe;
    return new RegExp(pattern).test(text);
}

function match(text, max) {
    const t = text.toLowerCase();
    return TOPICS.map(function (topic) {
        const score = topic.keys.reduce(function (n, k) { return n + (hasKey(t, k) ? 1 : 0); }, 0);
        return { topic: topic, score: score };
    }).filter(function (m) { return m.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, max || 2)
      .map(function (m) { return m.topic; });
}

function replyFor(note) {
    const hits = match(note.text, note.photo ? 3 : 2);
    if (!hits.length) {
        return "<p>Saved. I couldn't link this to the medicine theme. Try naming a doctor, an idea, or a passage " +
               "(like <em>Bradshaw</em>, <em>proportion</em>, <em>shell shock</em>, <em>Rezia</em>, or <em>the party</em>). " +
               "If it's about another part of the book, it's still kept in your notes.</p>";
    }
    // Look for earlier notes on the same theme so the chat can connect class sessions.
    const earlier = notes.filter(function (n) {
        return n.id !== note.id && n.topics && n.topics.indexOf(hits[0].name) !== -1;
    });
    let html = "";
    hits.forEach(function (h, i) {
        html += "<h4>" + (i === 0 ? "Theme: " : "Also: ") + h.name + "</h4><p>" + h.say + "</p>";
    });
    html += "<h4>Passages to reread</h4><p>" + hits[0].scenes.filter(function (id) {
        return typeof BREAKDOWNS !== "undefined" && BREAKDOWNS[id];
    }).map(function (id) {
        return '<a href="breakdown.html?id=' + id + '">' + escapeHtml(BREAKDOWNS[id].title.replace(/"/g, "")) + "</a>";
    }).join(" &middot; ") + "</p>";
    if (earlier.length) {
        const last = earlier[earlier.length - 1];
        html += "<h4>From your earlier notes</h4><p>You've noted <strong>" + hits[0].name + "</strong> " +
                earlier.length + " time" + (earlier.length > 1 ? "s" : "") + " before, most recently: <em>\"" +
                escapeHtml(last.text.slice(0, 120)) + (last.text.length > 120 ? "..." : "") + "\"</em></p>";
    }
    html += "<h4>A question to think about</h4><p>" + hits[0].ask + "</p>";
    return html;
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

function userBubbleHtml(n) {
    const img = n.photo ? '<img class="note-photo" src="' + n.photo + '" alt="Photo of handwritten notes">' : "";
    const label = n.photo ? '<span class="photo-label">' + CAMERA_ICON + " From your handwritten notes</span>" : "";
    return img + label + escapeHtml(n.text).replace(/\n/g, "<br>");
}

function renderTracker() {
    const counts = {};
    TOPICS.filter(function (t) { return t.theme; }).forEach(function (t) { counts[t.name] = 0; });
    notes.forEach(function (n) { (n.topics || []).forEach(function (name) { if (name in counts) counts[name]++; }); });
    const max = Math.max(1, ...Object.values(counts));
    document.getElementById("tracker").innerHTML = Object.keys(counts)
        .sort(function (a, b) { return counts[b] - counts[a]; })
        .map(function (name) {
            return '<div class="bar"><span>' + name + '</span><span class="fill" style="width:' +
                   (counts[name] / max * 100) + 'px"></span><span>' + counts[name] + "</span></div>";
        }).join("");
    document.getElementById("count").textContent = notes.length;
}

function renderAll() {
    box.innerHTML = "";
    addBubble("bot", "<p>Hi! Send me a note from class and I'll connect it to the novel. Your notes are saved in this browser, " +
              "so the more you add, the more I can link today's discussion to earlier ones.</p>");
    const all = notes;
    all.forEach(function (n, i) {
        addBubble("user", userBubbleHtml(n), n.ts);
        notes = all.slice(0, i + 1);   // so "earlier notes" only counts notes before this one
        addBubble("bot", replyFor(n));
    });
    notes = all;
    renderTracker();
}

document.getElementById("composer").addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (!text) return;
    addNote(text, null);
    input.value = "";
});

document.getElementById("input").addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); document.getElementById("composer").requestSubmit(); }
});

document.getElementById("export").addEventListener("click", function () {
    const text = notes.map(function (n) {
        return "[" + stamp(n.ts) + "]" + (n.photo ? " (from photo)" : "") + " " + n.text + (n.topics.length ? "\n   Themes: " + n.topics.join(", ") : "");
    }).join("\n\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text || "No notes yet."], { type: "text/plain" }));
    a.download = "mrs-dalloway-class-notes.txt";
    a.click();
});

document.getElementById("clear").addEventListener("click", function () {
    if (!notes.length) return;
    if (!window.confirm("Delete all your saved notes? Download them first if you want a copy.")) return;
    notes = [];
    persist(notes);
    renderAll();
});

// ======================================================================
//  ADDING A NOTE (typed or from a photo)
// ======================================================================
function addNote(text, photo) {
    const note = { id: Date.now(), ts: Date.now(), text: text, photo: photo || null };
    note.topics = match(text, photo ? 3 : 2).map(function (t) { return t.name; });
    notes.push(note);
    if (!persist(notes) && photo) {
        // Browser storage is full: keep the text, drop the picture.
        note.photo = null;
        persist(notes);
        addBubble("bot", "<p>Your browser's storage is full, so I saved the text from this photo but not the picture itself. " +
                  "Download your notes to keep a backup.</p>");
    }
    addBubble("user", userBubbleHtml(note), note.ts);
    addBubble("bot", replyFor(note));
    renderTracker();
}

// ======================================================================
//  PHOTOS OF HANDWRITTEN NOTES
//  1. shrink + clean up the image   2. read it with Tesseract.js (OCR)
//  3. let you fix the text          4. add it as a note
// ======================================================================
const CAMERA_ICON = '<svg class="icon-camera" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l1.6-2.4A1.5 1.5 0 0 1 9.9 5h4.2a1.5 1.5 0 0 1 1.3.6L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></svg>';
const TESSERACT_URL = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
let tesseractLoading = null;

function loadTesseract() {
    if (window.Tesseract) return Promise.resolve(window.Tesseract);
    if (!tesseractLoading) {
        tesseractLoading = new Promise(function (resolve, reject) {
            const sc = document.createElement("script");
            sc.src = TESSERACT_URL;
            sc.onload = function () { resolve(window.Tesseract); };
            sc.onerror = function () { tesseractLoading = null; reject(new Error("load failed")); };
            document.head.appendChild(sc);
        });
    }
    return tesseractLoading;
}

function loadImage(file) {
    return new Promise(function (resolve, reject) {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = function () { resolve(img); };
        img.onerror = reject;
        img.src = url;
    });
}

// Draw the image on a canvas at a given max size; optionally boost contrast for OCR.
function toCanvas(img, maxSide, forOcr) {
    const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
    const c = document.createElement("canvas");
    c.width = Math.round(img.width * scale);
    c.height = Math.round(img.height * scale);
    const ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0, c.width, c.height);
    if (forOcr) {
        const d = ctx.getImageData(0, 0, c.width, c.height);
        const px = d.data;
        for (let k = 0; k < px.length; k += 4) {
            const gray = 0.299 * px[k] + 0.587 * px[k + 1] + 0.114 * px[k + 2];
            const v = Math.max(0, Math.min(255, (gray - 128) * 1.6 + 140));   // grayscale + contrast
            px[k] = px[k + 1] = px[k + 2] = v;
        }
        ctx.putImageData(d, 0, 0);
    }
    return c;
}

function cleanOcr(text) {
    return text.replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}

async function handlePhoto(file) {
    const card = document.createElement("div");
    card.className = "msg user photo-review";
    card.innerHTML = '<span class="photo-label">' + CAMERA_ICON + " Reading your notes...</span>" +
        '<div class="ocr-progress"><div class="ocr-fill"></div></div>' +
        '<p class="ocr-status">Loading the page...</p>';
    box.appendChild(card);
    box.scrollTop = box.scrollHeight;
    const status = card.querySelector(".ocr-status");
    const fill = card.querySelector(".ocr-fill");

    let img;
    try { img = await loadImage(file); } catch (e) {
        card.innerHTML = "<p>That file couldn't be opened as an image. Try a JPG or PNG.</p>";
        return;
    }
    const thumb = toCanvas(img, 640, false).toDataURL("image/jpeg", 0.6);
    card.insertAdjacentHTML("afterbegin", '<img class="note-photo" src="' + thumb + '" alt="Your notes">');

    let text = "";
    let failed = false;
    try {
        status.textContent = "Loading the handwriting reader (first time takes a few seconds)...";
        const T = await loadTesseract();
        const worker = await T.createWorker("eng", 1, {
            logger: function (m) {
                if (m.status === "recognizing text") {
                    fill.style.width = Math.round(m.progress * 100) + "%";
                    status.textContent = "Reading handwriting... " + Math.round(m.progress * 100) + "%";
                }
            },
        });
        const result = await worker.recognize(toCanvas(img, 2000, true));
        await worker.terminate();
        text = cleanOcr(result.data.text || "");
    } catch (e) {
        failed = true;
    }

    card.querySelector(".ocr-progress").remove();
    card.querySelector(".photo-label").innerHTML = CAMERA_ICON + " Check the text before adding";
    status.innerHTML = failed
        ? "I couldn't load the handwriting reader (are you offline?). Type the key points from this page below."
        : (text
            ? "Here's what I could read. Handwriting is tricky, so fix any mistakes or add what it missed:"
            : "I couldn't make out any words. Try a brighter, straight-on photo, or type the key points below.");
    card.insertAdjacentHTML("beforeend",
        '<textarea class="ocr-text" rows="7"></textarea>' +
        '<div class="row"><button type="button" class="ocr-add">Add to my notes</button>' +
        '<button type="button" class="ghost ocr-skip">Discard</button></div>');
    const ta = card.querySelector(".ocr-text");
    ta.value = text;
    ta.focus();
    box.scrollTop = box.scrollHeight;

    card.querySelector(".ocr-skip").addEventListener("click", function () { card.remove(); });
    card.querySelector(".ocr-add").addEventListener("click", function () {
        const finalText = ta.value.trim();
        if (!finalText) { status.textContent = "Add at least a few words so I can connect it to the novel."; return; }
        card.remove();
        addNote(finalText, thumb);
    });
}

document.getElementById("photo").addEventListener("change", async function (e) {
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    for (const f of files) await handlePhoto(f);   // one at a time so each can be checked
});

renderAll();
