/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Class notes chat. Each topic below has keywords; a note is matched to the topics
  whose keywords it mentions most. To teach the chat something new, add a topic
  or add keywords to an existing one.
*/

const TOPICS = [
    {
        name: "Disability & medicine", theme: true,
        keys: ["disab", "ill", "illness", "mad", "madness", "insan", "sane", "sanity", "doctor", "medic", "bradshaw", "holmes", "proportion",
               "conversion", "shell shock", "ptsd", "trauma", "mental", "cure", "treatment", "asylum", "home in the country", "normal", "patholog"],
        say: "This connects to the novel's critique of medical power. Holmes dismisses Septimus ('nothing the matter'), while Bradshaw imposes 'Proportion' and isolation. For a disability-studies reading, the problem isn't just the illness. It's who gets to define 'normal' and what happens to people who don't fit.",
        scenes: ["08 Septimus's backstory & Dr. Holmes", "09 Bradshaw: Proportion and Conversion", "15 Septimus's death"],
        ask: "Does the novel locate the 'problem' in Septimus's mind, or in the society and doctors around him?",
    },
    {
        name: "Septimus as double", theme: true,
        keys: ["double", "mirror", "parallel", "never meet", "foil", "counterpart", "doppel"],
        say: "Septimus is Clarissa's double. Woolf said she originally planned for Clarissa to die and gave that fate to Septimus instead. They never meet, but they share images ('Fear no more'), sensitivity, and isolation. One conforms and lives, and the other refuses and dies.",
        scenes: ["02 The motor car on Bond Street", "15 Septimus's death", "18 The little room"],
        ask: "Is Clarissa feeling 'very like him' real empathy, or is she turning his death into her own story?",
    },
    {
        name: "Time & memory", theme: true,
        keys: ["time", "clock", "big ben", "hour", "memory", "remember", "past", "bourton", "nostalg", "flashback", "leaden circles"],
        say: "Woolf contrasts clock time (Big Ben's 'leaden circles,' Harley Street clocks 'shredding and slicing' the day) with inner time, where one moment can hold 30 years of memory. Bourton keeps flooding into 1923.",
        scenes: ["01 Buying the flowers", "06 Peter in Regent's Park", "17 The party"],
        ask: "Who in the novel is controlled by clock time, and who escapes it?",
    },
    {
        name: "Isolation & connection", theme: true,
        keys: ["alone", "isolat", "lonel", "connect", "communicat", "party", "parties", "offering", "together", "solitude", "privacy", "soul"],
        say: "Every character is sealed in their own consciousness, yet shared moments (the car, the plane, the bells) link strangers. Clarissa calls her parties an 'offering.' At the party, she even reads Septimus's death as an attempt to communicate.",
        scenes: ["03 The skywriting airplane", "17 The party", "18 The little room"],
        ask: "Does anyone in the novel truly connect with another person, or are there only near misses?",
    },
    {
        name: "Death", theme: true,
        keys: ["death", "die", "dying", "dies", "suicide", "killed", "fear no more", "cymbeline", "mortal", "window", "defiance"],
        say: "'Fear no more the heat o' the sun' (from Shakespeare's Cymbeline) links Clarissa and Septimus. At the party, Clarissa thinks of death as 'defiance,' a way of keeping something whole. The novel puts the will to live and the choice to die next to each other.",
        scenes: ["15 Septimus's death", "16 The ambulance", "18 The little room"],
        ask: "Why does Woolf have Clarissa hear of the death at her own party rather than anywhere else?",
    },
    {
        name: "Love, desire & queerness", theme: true,
        keys: ["love", "loves", "loved", "sally", "kiss", "queer", "desire", "sexual", "lesbian", "romance", "marriage", "marry", "passion", "repress"],
        say: "Clarissa's kiss with Sally at Bourton is 'the most exquisite moment of her whole life,' yet she married Richard for safety and turned Peter down. Many critics read a repressed queer desire that her society has no language for.",
        scenes: ["04 The attic room & Sally", "06 Peter's memories of Bourton", "11 Richard's roses"],
        ask: "Did Clarissa choose safety, or did her society choose it for her?",
    },
    {
        name: "Class & empire", theme: true,
        keys: ["social class", "working class", "middle class", "upper", "classes", "wealth", "rich", "poor", "empire", "india", "colonial", "prime minister", "establishment", "conservative",
               "politic", "lady bruton", "hugh", "society", "conform", "power"],
        say: "The Dalloways belong to the ruling class: an MP, the Prime Minister at the party, Peter back from colonial India, and Lady Bruton planning emigration to Canada. Woolf said she wanted to 'criticise the social system & show it at work.' Bradshaw's 'Proportion' is that system applied to minds.",
        scenes: ["10 Lunch at Lady Bruton's", "17 The party"],
        ask: "How does social class decide who gets cared for and who gets 'sent away'?",
    },
    {
        name: "War & its aftermath", theme: true,
        keys: ["war", "wwi", "ww1", "soldier", "veteran", "wars", "evans", "battle", "army", "1918", "1923", "grief", "trench", "postwar", "post-war"],
        say: "It's 1923, five years after the Armistice. London's parties try to move on, but the war returns through Septimus, through Evans's death, and in quieter ways, like Lady Bexborough opening a bazaar after losing a son. Septimus is the war that society won't look at.",
        scenes: ["02 The motor car", "07 Septimus in the park", "08 Septimus's backstory"],
        ask: "Where does the war show up in characters other than Septimus?",
    },
    {
        name: "Stream of consciousness & style", theme: true,
        keys: ["stream", "conscious", "style", "narrat", "free indirect", "modernis", "form", "structure", "point of view", "pov", "voice", "chapter", "tunnel"],
        say: "Woolf uses free indirect discourse: third-person narration that takes on a character's voice. She shifts minds through shared sights and sounds. She described her method as 'tunnelling,' digging caves behind characters so their pasts connect.",
        scenes: ["02 The motor car", "03 The skywriting airplane"],
        ask: "What does the style let Woolf show that a traditional narrator couldn't?",
    },
    {
        name: "Virginia Woolf's life", theme: false,
        keys: ["woolf", "author", "biograph", "rest cure", "leonard", "bloomsbury", "hogarth", "on being ill", "her life", "virginia"],
        say: "Woolf had repeated breakdowns and was treated with 'rest cures' of isolation, bed rest, and no writing. Bradshaw is widely read as her satire of those doctors. Her essay 'On Being Ill' (1926) argues illness deserves literature's attention.",
        scenes: ["09 Bradshaw: Proportion and Conversion"],
        ask: "How far should Woolf's biography shape our reading of Septimus?",
    },
    {
        name: "Clarissa", theme: false,
        keys: ["clarissa", "hostess", "mrs. dalloway", "mrs dalloway", "flowers", "heart", "51", "fifty"],
        say: "Clarissa is 51, recovering from an illness that weakened her heart, and loves life while fearing her own feelings. Others see her as cold (Peter), as a model (Hugh), or as an enemy (Miss Kilman).",
        scenes: ["01 Buying the flowers", "05 Peter's visit", "18 The little room"],
        ask: "Which character's view of Clarissa does the novel seem to trust most?",
    },
    {
        name: "Rezia & caregiving", theme: false,
        keys: ["rezia", "lucrezia", "wife", "caregiv", "care", "hat", "italian", "milan"],
        say: "Rezia carries the daily work of caring for Septimus. She's lonely, foreign, and unheard by the doctors. The hat-making scene is the couple's one moment of shared calm before Holmes arrives.",
        scenes: ["07 Septimus in the park", "14 Making the hat"],
        ask: "What does Rezia's experience add to a disability reading of the novel?",
    },
    {
        name: "Peter Walsh", theme: false,
        keys: ["peter", "walsh", "knife", "pocketknife", "pocket-knife", "daisy", "proposal"],
        say: "Peter, the suitor Clarissa refused, is emotional and critical and keeps opening and closing his pocketknife. He calls the ambulance carrying Septimus 'one of the triumphs of civilisation' without knowing who's inside.",
        scenes: ["05 Peter's visit", "06 Peter in Regent's Park", "16 The ambulance", "19 'For there she was'"],
        ask: "Is Peter a reliable judge of Clarissa?",
    },
    {
        name: "Miss Kilman & Elizabeth", theme: false,
        keys: ["kilman", "elizabeth", "daughter", "tutor", "religio", "eclair", "éclair", "omnibus", "bus", "strand", "career"],
        say: "Miss Kilman wants to 'convert' Elizabeth, which echoes Bradshaw's 'Conversion.' She's also an outsider who lost her job in the war over her German ancestry. Elizabeth slips away and rides the bus up the Strand, imagining a profession.",
        scenes: ["12 Miss Kilman at the Army & Navy Stores", "13 Elizabeth on the omnibus"],
        ask: "Is Miss Kilman a villain, a victim, or both?",
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
        return "<p>Saved. I couldn't link this one to a theme yet. Try naming a character, a scene, or an idea " +
               "(like <em>Septimus</em>, <em>Big Ben</em>, <em>the party</em>, or <em>doctors</em>).</p>";
    }
    // Look for earlier notes on the same theme so the chat can connect class sessions.
    const earlier = notes.filter(function (n) {
        return n.id !== note.id && n.topics && n.topics.indexOf(hits[0].name) !== -1;
    });
    let html = "";
    hits.forEach(function (h, i) {
        html += "<h4>" + (i === 0 ? "Connects to: " : "Also touches: ") + h.name + "</h4><p>" + h.say + "</p>";
    });
    html += "<h4>Scenes to reread</h4><p>" + hits[0].scenes.map(function (s) {
        return '<a href="scenes.html#scene-' + s.slice(0, 2) + '">' + s + "</a>";
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
