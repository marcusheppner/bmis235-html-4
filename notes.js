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
        say: "Bradshaw \"never spoke of 'madness'; he called it not having a sense of proportion.\" Renaming illness as a lack of proportion turns it into a moral and social failing (imbalance, lack of restraint), so treatment becomes correction toward the norm.",
        scenes: ["scene-06", "mono-03"],
        ask: "Is \"proportion\" a medical idea or a social ideal dressed up as medicine?",
    },
    {
        name: "Conversion & control", theme: true,
        keys: ["conversion", "convert", "control", "power", "dominat", "force", "forcing", "soul", "kilman", "religio", "discipline"],
        say: "Conversion, Proportion's \"sister,\" \"feasts on the wills of the weakly.\" Woolf extends it beyond medicine: Miss Kilman's religious urge to possess Elizabeth mirrors Bradshaw, and Clarissa finally names his offense as \"forcing your soul.\"",
        scenes: ["mono-03", "scene-07", "scene-12"],
        ask: "Is the urge to convert others presented as specifically medical, or as a general social disease?",
    },
    {
        name: "Denial (Holmes)", theme: true,
        keys: ["holmes", "denial", "deny", "nothing the matter", "nothing whatever", "porridge", "hobby", "hobbies", "willpower", "own control", "gp"],
        say: "Holmes insists \"There was nothing whatever the matter\" and that \"health is largely a matter in our own control.\" Denial shifts responsibility from illness to the patient's character, which is another way of enforcing the norm.",
        scenes: ["scene-05", "scene-02", "scene-09"],
        ask: "Is Holmes's cheerful denial more or less harmful than Bradshaw's control?",
    },
    {
        name: "Rest cure & isolation", theme: true,
        keys: ["rest", "rest cure", "isolat", "separat", "home in the country", "asylum", "institution", "confine", "seclu", "nursing home", "sent away", "removed"],
        say: "Bradshaw's treatment is removal: \"We have been arranging that you should go into a home,\" away from Rezia. This mirrors the rest cure Woolf herself underwent, with isolation, rest, and no stimulation, and the Proportion passage's \"secluded her lunatics.\"",
        scenes: ["scene-06", "mono-03", "scene-03"],
        ask: "What does isolating the patient accomplish for society, as opposed to the patient?",
    },
    {
        name: "Shell shock & masculinity", theme: true,
        keys: ["shell shock", "shell-shock", "ptsd", "trauma", "war", "soldier", "veteran", "evans", "coward", "cowardice", "masculin", "manly", "manhood", "feeling very little", "numb"],
        say: "Septimus \"congratulated himself upon feeling very little,\" the soldierly ideal of control. Holmes's final word, \"The coward!\", repeats the military's moral verdict on shell-shocked men. At the party, Bradshaw turns it into policy: \"the deferred effects of shell shock.\"",
        scenes: ["scene-05", "scene-09", "scene-11"],
        ask: "How does medicine reinforce the same masculine ideal that helped break Septimus?",
    },
    {
        name: "Class & medical authority", theme: true,
        keys: ["social class", "upper class", "ruling class", "harley", "establishment", "party", "prime minister", "england", "nation", "empire", "authority", "expert", "upper", "wealth", "civilisation", "civilization", "ambulance", "bill", "law", "policy"],
        say: "Bradshaw's Proportion \"made England prosper.\" He arrives at Clarissa's party among the Prime Minister and MPs, discussing a shell-shock Bill. Peter praises the ambulance as \"one of the triumphs of civilisation.\" Medicine and the ruling class share values and rooms.",
        scenes: ["scene-11", "mono-03", "scene-10"],
        ask: "Whose interests does Bradshaw's medicine ultimately serve?",
    },
    {
        name: "Eugenics & the 'unfit'", theme: true,
        keys: ["eugenic", "unfit", "childbirth", "propagate", "breed", "degenera", "mental deficiency", "steriliz"],
        say: "The Proportion passage says it \"forbade childbirth\" and \"made it impossible for the unfit to propagate their views,\" echoing the eugenics ideas common among respectable Britons in the 1910s and 20s.",
        scenes: ["mono-03"],
        ask: "How does the eugenics language widen the critique from one doctor to a whole ideology?",
    },
    {
        name: "Care vs. cure", theme: true,
        keys: ["care", "caregiv", "caring", "rezia", "lucrezia", "hat", "wife", "support", "accommodat"],
        say: "The hat scene, with no doctor present, is the healthiest Septimus is all day. Rezia does the real care but is ignored and made the doctors' enforcer. The \"cure\" prescribed is separation from her.",
        scenes: ["scene-08", "mono-06", "scene-04"],
        ask: "What alternative to medical control does the novel imagine, and why is it destroyed?",
    },
    {
        name: "The patient's view", theme: true,
        keys: ["septimus", "patient", "vision", "visions", "hallucinat", "madness", "mad", "insan", "sane", "sanity", "message", "messages", "human nature", "paranoi", "insight"],
        say: "Woolf gives Septimus's mind beauty and moral force (\"Men must not cut down trees\"). He also analyzes his own situation: \"Once you fall... Holmes and Bradshaw are on you.\" The patient's voice challenges the doctors' authority to define him.",
        scenes: ["mono-01", "mono-02", "scene-04"],
        ask: "Does the novel treat Septimus's \"madness\" as something with knowledge in it?",
    },
    {
        name: "Death as resistance", theme: true,
        keys: ["death", "die", "dies", "suicide", "killed", "jump", "window", "defiance", "resist", "resistance", "refusal", "refuse", "intolerable"],
        say: "Septimus \"did not want to die. Life was good.\" His last words, \"I'll give it you!\", are thrown at Holmes. Clarissa reads it as \"Death was defiance\" and imagines him thinking \"they make life intolerable, men like that.\"",
        scenes: ["mono-05", "scene-09", "scene-12"],
        ask: "Can you argue the death is resistance without romanticizing it?",
    },
    {
        name: "Gender", theme: true,
        keys: ["gender", "women", "woman", "female", "wife", "lady bradshaw", "gone under", "clarissa", "yellow wallpaper", "hyster", "nervous", "feminis"],
        say: "Conversion works on the healthy too: Lady Bradshaw \"had gone under\" fifteen years ago. Clarissa's convalescence (the attic, the narrow bed) is a quieter, accepted version of medical-social management, much like the rest cures given to women such as Woolf.",
        scenes: ["mono-03", "scene-03", "scene-11"],
        ask: "Does medical-social control work differently, or more invisibly, on women?",
    },
    {
        name: "Visibility & shame", theme: true,
        keys: ["shame", "ashamed", "embarrass", "notice", "visible", "invisible", "hide", "hidden", "public", "stigma"],
        say: "From the first scene, illness must not be seen: Rezia thinks \"People must notice; people must see.\" The party, too, keeps suffering outside until Lady Bradshaw brings it in.",
        scenes: ["scene-01", "scene-11"],
        ask: "How does the pressure to hide illness work alongside medical treatment?",
    },
    {
        name: "Woolf's own treatment", theme: false,
        keys: ["woolf", "author", "biograph", "savage", "her doctors", "leonard", "on being ill", "virginia", "diary"],
        say: "Woolf had repeated breakdowns and was treated with rest cures by eminent doctors, including Sir George Savage. In her diary she wrote that she wanted to \"criticise the social system, & to show it at work.\" Use biography as context, not as the whole argument.",
        scenes: ["mono-03"],
        ask: "How far should Woolf's medical history shape your reading of Holmes and Bradshaw?",
    },
    {
        name: "Disability studies lenses", theme: false,
        keys: ["disability", "social model", "medical model", "foucault", "ableism", "ableist", "impairment", "lens", "theory", "critic"],
        say: "The medical model locates the problem in the individual; the social model locates it in how society treats difference. Bradshaw embodies the medical model; the novel's sympathies point toward the social model. Foucault's idea of normalization (control by defining and correcting \"normal\") fits Proportion closely.",
        scenes: ["scene-06", "mono-03"],
        ask: "Which model of disability does the novel itself seem to endorse?",
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
        html += "<h4>" + (i === 0 ? "Connects to: " : "Also touches: ") + h.name + "</h4><p>" + h.say + "</p>";
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
    html += "<h4>Take back to class</h4><p>" + hits[0].ask + "</p>";
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
