/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Podcast page: episode scripts, read-aloud with two voices, and voice/written responses.
  To add an episode, copy one object in the EPISODES list and edit it.
*/

const EPISODES = [
    {
        id: "madness",
        title: "Is Septimus mad, or the only one seeing clearly?",
        tag: "Disability & medicine",
        question: "Does the novel present Septimus's illness as something to cure, or as a kind of truth the 'healthy' world can't face?",
        lines: [
            ["a", "Let's start with the obvious. Septimus is suffering. He hallucinates his dead friend Evans, he can't feel, he's terrified. Woolf isn't romanticizing that."],
            ["b", "Agreed, but look at what he sees. He says the world is cruel, that human nature wants blood. Five years after the war, is that actually wrong?"],
            ["a", "So you'd say his madness is a kind of insight?"],
            ["b", "Partly. Everyone else at the party has agreed not to see the war. Septimus can't stop seeing it. The doctors call that illness."],
            ["a", "But careful. If we turn his illness into a superpower, we erase the pain. He doesn't experience it as wisdom. He experiences it as hell."],
            ["b", "Fair. Maybe the point is that both are true. He's ill, and the cure being offered is worse than the disease."],
            ["a", "That's where Bradshaw comes in. 'Proportion' means making everyone fit. The problem isn't diagnosis. It's that nobody listens to Septimus."],
        ],
        prompts: [
            "Do you read Septimus's visions as symptoms, as insight, or both? Point to one moment.",
            "How does the disability lens from class change how you judge Holmes and Bradshaw?",
            "Is there anyone in the novel who actually listens to Septimus?",
        ],
    },
    {
        id: "double",
        title: "Why does Clarissa never meet Septimus?",
        tag: "Structure & doubling",
        question: "Clarissa and Septimus never meet. So why does Woolf build the whole novel around their connection?",
        lines: [
            ["a", "Woolf said she first meant for Clarissa to die at the end. Septimus took that death instead. He's her double."],
            ["b", "But they have almost nothing in common. She's a rich hostess, and he's a working-class veteran. Isn't 'double' a stretch?"],
            ["a", "Look at the details. Both think 'Fear no more the heat o' the sun.' Both feel cut off from others. Both are recovering from illness."],
            ["b", "Okay, but one survives by conforming and the other dies refusing to. That's a contrast, not a mirror."],
            ["a", "Maybe a double is both. In the little room, she says she feels 'very like him.' She's glad he did it, and then she goes back to her party."],
            ["b", "And that's what bothers me. She turns his death into her own private revelation. Is that empathy, or is she using him?"],
        ],
        prompts: [
            "Is Clarissa's reaction to Septimus's death empathy, appropriation, or something else?",
            "Name one parallel and one contrast between the two characters.",
            "What would the novel lose if they actually met?",
        ],
    },
    {
        id: "proportion",
        title: "Proportion and Conversion: doctors as villains?",
        tag: "Medical power",
        question: "Are Holmes and Bradshaw villains, or just doctors of their time?",
        lines: [
            ["b", "I'll defend the doctors for a second. In 1923, nobody understood PTSD. Rest and a quiet home in the country was standard care."],
            ["a", "Sure, but Woolf doesn't write them as confused. She writes them as power-hungry. Bradshaw 'swooped' and 'devoured.' He secretly enjoys control."],
            ["b", "That's Woolf's own anger at her doctors, though. Is it fair to the profession?"],
            ["a", "It's not supposed to be fair. It's satire. The point is a system where a 45-minute appointment can take a man away from his wife."],
            ["b", "Holmes is the stranger one. He seems almost friendly: eat porridge, take up a hobby. He's not cruel, just completely dismissive."],
            ["a", "That might be scarier. Bradshaw is a dramatic villain. Holmes is the everyday version: 'there's nothing the matter with you.'"],
        ],
        prompts: [
            "Which doctor is more dangerous in your reading, Holmes or Bradshaw? Why?",
            "Does knowing about Woolf's own treatment make the satire stronger or less fair?",
            "Where do you see 'Proportion' at work outside the doctors, for example with Lady Bruton, Hugh, or Miss Kilman?",
        ],
    },
    {
        id: "party",
        title: "Is Clarissa's party shallow or meaningful?",
        tag: "Class & connection",
        question: "Peter thinks Clarissa's parties are snobbish. Clarissa calls them an 'offering.' Who's right?",
        lines: [
            ["b", "Let's be honest. It's a party for rich people with the Prime Minister. Peter calls her a perfect hostess, and he doesn't mean it as a compliment."],
            ["a", "But Clarissa says her parties are an offering: bringing people together who'd otherwise stay apart. In a book about isolation, that matters."],
            ["b", "Does it, though? The party is exactly where the war, Septimus, and suffering are kept out. Until Lady Bradshaw brings death in."],
            ["a", "Right, and Clarissa goes into a quiet room to face it. The party is where she has her deepest moment."],
            ["b", "Then she walks back out and keeps hosting. It's the same pattern again: feel it privately, perform publicly."],
        ],
        prompts: [
            "Is the party an act of connection or an act of avoidance?",
            "How does social class shape who is inside and outside the party?",
            "What does Clarissa gain, and lose, by returning to her guests?",
        ],
    },
    {
        id: "woolf",
        title: "How much of Woolf is in the novel?",
        tag: "Author & biography",
        question: "Should we read Septimus through Woolf's own mental illness, or does that limit the novel?",
        lines: [
            ["a", "Woolf lived through breakdowns, rest cures, and doctors who told her not to write. Septimus's chapters feel like they come from experience."],
            ["b", "But if we read everything as autobiography, we turn a novel into a medical file. And we read her death into every page."],
            ["a", "True. But the biography explains why the medical scenes are so precise and so angry."],
            ["b", "I'll grant that. Maybe use the biography as context, not as the key that unlocks everything."],
            ["a", "And notice she gives Septimus's experience to a working-class man and a soldier, not a woman like herself. That's a choice."],
        ],
        prompts: [
            "Does knowing Woolf's history help or hurt your reading of Septimus?",
            "Why might Woolf give her experience to a male veteran rather than a female character?",
            "How does your class discuss 'disability in literature' when the author was disabled herself?",
        ],
    },
];

const HOSTS = { a: "Vera", b: "Theo" };

// Short host pickups after you interject (no AI, just keeps the conversation flowing).
const PICKUPS = [
    ["a", "Good point. Let's keep that in mind as we go."],
    ["b", "Hold onto that. It might change how you hear the next part."],
    ["a", "That's worth bringing to class. Okay, picking back up."],
    ["b", "Fair question. Let's see if the rest of this answers it."],
];

// --- small helpers for browser storage (can fail in some browsers, so wrap it) ---
function load(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
}
function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
}
function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
}

const epList = document.getElementById("episodes");
const player = document.getElementById("player");
let current = null;

EPISODES.forEach(function (ep, i) {
    const b = document.createElement("button");
    b.className = "episode-btn";
    b.innerHTML = "Ep. " + (i + 1) + ": " + ep.title + "<small>" + ep.tag + "</small>";
    b.addEventListener("click", function () { openEpisode(ep, b); });
    epList.appendChild(b);
});

function openEpisode(ep, btn) {
    stopAll();
    current = ep;
    pos = 0;
    document.querySelectorAll(".episode-btn").forEach(function (x) { x.classList.remove("active"); });
    btn.classList.add("active");
    player.hidden = false;
    document.getElementById("ep-title").textContent = ep.title;
    document.getElementById("ep-question").innerHTML = "<strong>The question:</strong> " + ep.question;

    const t = document.getElementById("transcript");
    t.innerHTML = "";
    ep.lines.forEach(function (l, i) {
        const div = document.createElement("div");
        div.className = "line " + l[0];
        div.id = "line-" + i;
        div.innerHTML = '<div class="speaker">' + HOSTS[l[0]] + "</div>" + l[1] +
            '<div><button type="button" class="respond-link">&#8627; Respond here</button></div>';
        div.querySelector(".respond-link").addEventListener("click", function () {
            interject(i, false);
        });
        t.appendChild(div);
    });

    // Bring back interjections you typed or that were transcribed on an earlier visit.
    load("podcast-interjections-" + ep.id, []).forEach(function (saved) {
        const anchor = document.getElementById("line-" + saved.after);
        if (anchor) placeAfter(anchor, savedBubble(saved));
    });

    const p = document.getElementById("prompts");
    p.innerHTML = "";
    ep.prompts.forEach(function (q) { const li = document.createElement("li"); li.textContent = q; p.appendChild(li); });

    document.getElementById("written").value = load("podcast-written-" + ep.id, "");
    document.getElementById("saved-msg").textContent = "";
    document.getElementById("recordings").innerHTML = "";
    setControls();
    player.scrollIntoView({ behavior: "smooth" });
}

// ======================================================================
//  PLAYBACK: one line at a time, so we can pause anywhere and resume
// ======================================================================
const synth = window.speechSynthesis;
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const interjectBtn = document.getElementById("interject");
const voiceNote = document.getElementById("voice-note");

let pos = 0;           // index of the next line to speak
let playing = false;   // hosts are talking right now
let paused = false;    // paused for an interjection
let lineDone = true;   // did the current line finish before we paused?
let pickupCount = 0;

if (!synth) voiceNote.textContent = "Your browser can't read aloud. Read the transcript and use \"Respond here\" on any line.";

function pickVoices() {
    const voices = synth ? synth.getVoices().filter(function (v) { return v.lang && v.lang.indexOf("en") === 0; }) : [];
    const gb = voices.filter(function (v) { return v.lang === "en-GB"; });
    const pool = gb.length >= 2 ? gb : voices;
    return { a: pool[0] || null, b: pool[1] || pool[0] || null };
}

function highlight(i) {
    document.querySelectorAll(".line.speaking").forEach(function (x) { x.classList.remove("speaking"); });
    const el = document.getElementById("line-" + i);
    if (el) el.classList.add("speaking");
}

function sayLine(speaker, text, onDone) {
    const v = pickVoices();
    const u = new SpeechSynthesisUtterance(text);
    if (v[speaker]) u.voice = v[speaker];
    u.pitch = speaker === "a" ? 1.1 : 0.85;
    u.rate = 0.98;
    u.onend = onDone;
    synth.speak(u);
}

function speakNext() {
    if (!playing || !current) return;
    if (pos >= current.lines.length) { finish(); return; }
    const i = pos;
    const l = current.lines[i];
    highlight(i);
    lineDone = false;
    sayLine(l[0], l[1], function () {
        if (!playing || pos !== i) return;   // stopped or paused mid-line
        lineDone = true;
        pos = i + 1;
        speakNext();
    });
}

function finish() {
    playing = false;
    paused = false;
    pos = 0;
    highlight(-1);
    setControls();
    document.querySelector(".your-turn").scrollIntoView({ behavior: "smooth", block: "center" });
}

function stopAll() {
    playing = false;
    paused = false;
    if (synth) synth.cancel();
    highlight(-1);
    setControls();
}

function setControls() {
    playBtn.disabled = !synth || playing;
    playBtn.innerHTML = paused ? "&#9654; Resume" : (pos > 0 ? "&#9654; Continue" : "&#9654; Play episode");
    stopBtn.disabled = !playing && !paused;
    interjectBtn.disabled = !playing;
}

playBtn.addEventListener("click", function () {
    if (!current || !synth) return;
    closeOpenComposer();
    paused = false;
    playing = true;
    setControls();
    speakNext();
});
stopBtn.addEventListener("click", function () { closeOpenComposer(); pos = 0; stopAll(); });
interjectBtn.addEventListener("click", function () {
    // Attach to the line being spoken (or the one that just finished).
    const at = lineDone ? Math.max(0, pos - 1) : pos;
    interject(at, true);
});

// ======================================================================
//  INTERJECTIONS: record (with live transcript where supported) or type
// ======================================================================
const canRecord = !!(navigator.mediaDevices && window.MediaRecorder);
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let openComposer = null;   // only one interjection box open at a time

function placeAfter(anchor, el) {
    // Put it after the anchor line and after any interjections already attached to that line.
    let ref = anchor;
    while (ref.nextElementSibling && ref.nextElementSibling.classList.contains("you")) ref = ref.nextElementSibling;
    ref.after(el);
}

function savedBubble(saved) {
    const div = document.createElement("div");
    div.className = "line you";
    div.innerHTML = '<div class="speaker">You &middot; ' + escapeHtml(saved.when) + "</div>" + escapeHtml(saved.text);
    return div;
}

function closeOpenComposer() {
    if (openComposer) openComposer.cancel();
}

function interject(afterIndex, fromPlayback) {
    if (!current) return;
    closeOpenComposer();

    // Pause the hosts.
    const wasPlaying = playing || fromPlayback;
    if (playing) {
        playing = false;
        paused = true;
        if (synth) synth.cancel();
        // pos already points at the next line (or the interrupted one, which replays on resume)
        setControls();
    }

    const anchor = document.getElementById("line-" + afterIndex);
    const box = document.createElement("div");
    box.className = "line you composing";
    box.innerHTML =
        '<div class="speaker">You &middot; interjecting</div>' +
        '<p class="note-tip ij-status"></p>' +
        '<p class="ij-live"></p>' +
        '<div class="row">' +
            (canRecord ? '<button type="button" class="ij-rec">&#9679; Record</button>' : "") +
            '<button type="button" class="ghost ij-type">Type instead</button>' +
        "</div>" +
        '<textarea class="ij-text" rows="3" hidden placeholder="Your question or point..."></textarea>' +
        '<div class="ij-audio"></div>' +
        '<div class="row" style="margin-top:10px">' +
            '<button type="button" class="ij-done">' + (wasPlaying ? "Done, resume podcast" : "Save interjection") + "</button>" +
            '<button type="button" class="ghost ij-cancel">Cancel</button>' +
        "</div>";
    placeAfter(anchor, box);
    box.scrollIntoView({ behavior: "smooth", block: "center" });

    const status = box.querySelector(".ij-status");
    const live = box.querySelector(".ij-live");
    const recBtn = box.querySelector(".ij-rec");
    const text = box.querySelector(".ij-text");
    let recorder = null, stream = null, chunks = [], recog = null, transcript = "", audioUrl = null;

    status.textContent = canRecord ? "Record a question or reaction, or type it." : "Recording isn't supported here. Type your interjection.";
    if (!canRecord) text.hidden = false;

    function stopRecording() {
        if (recorder && recorder.state === "recording") recorder.stop();
        if (recog) { try { recog.stop(); } catch (e) {} }
    }

    async function startRecording() {
        try {
            stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        } catch (err) {
            status.textContent = "Microphone access was blocked. Type your interjection instead.";
            text.hidden = false;
            return;
        }
        recorder = new MediaRecorder(stream);
        chunks = [];
        recorder.ondataavailable = function (e) { chunks.push(e.data); };
        recorder.onstop = function () {
            stream.getTracks().forEach(function (t) { t.stop(); });
            const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
            audioUrl = URL.createObjectURL(blob);
            box.querySelector(".ij-audio").innerHTML = '<audio controls src="' + audioUrl + '"></audio>';
            recBtn.innerHTML = "&#9679; Re-record";
            status.textContent = transcript ? "Recorded. Edit the transcript below if it misheard you." : "Recorded.";
            if (transcript) { text.hidden = false; text.value = transcript.trim(); }
        };
        recorder.start();
        recBtn.innerHTML = "&#9632; Stop recording";
        status.textContent = "Recording... speak your question or point.";

        // Live transcript where the browser supports it (Chrome, Edge, Safari).
        if (Recognition) {
            transcript = "";
            recog = new Recognition();
            recog.continuous = true;
            recog.interimResults = true;
            recog.lang = "en-US";
            recog.onresult = function (e) {
                let finalText = "", interim = "";
                for (let k = 0; k < e.results.length; k++) {
                    if (e.results[k].isFinal) finalText += e.results[k][0].transcript + " ";
                    else interim += e.results[k][0].transcript;
                }
                transcript = finalText + interim;
                live.textContent = transcript;
            };
            recog.onerror = function () { /* transcript is optional */ };
            try { recog.start(); } catch (e) {}
        }
    }

    if (recBtn) recBtn.addEventListener("click", function () {
        if (recorder && recorder.state === "recording") stopRecording();
        else { live.textContent = ""; startRecording(); }
    });
    box.querySelector(".ij-type").addEventListener("click", function () { text.hidden = false; text.focus(); });

    function teardown() {
        stopRecording();
        openComposer = null;
    }

    box.querySelector(".ij-cancel").addEventListener("click", function () {
        controller.cancel();
        if (wasPlaying) resumeAfter(false);
    });

    box.querySelector(".ij-done").addEventListener("click", function () {
        stopRecording();
        // Give the recorder a moment to finish writing the clip.
        setTimeout(function () {
            const typed = text.value.trim() || transcript.trim();
            if (!typed && !audioUrl) { status.textContent = "Record or type something first, or press Cancel."; return; }
            teardown();
            const when = new Date().toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
            box.classList.remove("composing");
            box.innerHTML = '<div class="speaker">You &middot; ' + escapeHtml(when) + "</div>" +
                (typed ? "<p>" + escapeHtml(typed) + "</p>" : "<p class=\"note-tip\">(voice only)</p>") +
                (audioUrl ? '<audio controls src="' + audioUrl + '"></audio>' +
                    '<a href="' + audioUrl + '" download="dalloway-' + current.id + '-interjection.webm">Download clip</a>' : "");
            if (typed) {
                const list = load("podcast-interjections-" + current.id, []);
                list.push({ after: afterIndex, text: typed, when: when });
                save("podcast-interjections-" + current.id, list);
            }
            if (wasPlaying) resumeAfter(true);
        }, 300);
    });

    const controller = {
        cancel: function () { teardown(); box.remove(); },
    };
    openComposer = controller;

    // From the Interject button, start recording right away (or open the text box).
    if (fromPlayback) {
        if (canRecord) startRecording(); else text.focus();
    }
}

function resumeAfter(withPickup) {
    if (!current || !synth) { setControls(); return; }
    paused = false;
    playing = true;
    setControls();
    if (withPickup) {
        const p = PICKUPS[pickupCount++ % PICKUPS.length];
        sayLine(p[0], p[1], speakNext);
    } else {
        speakNext();
    }
}

// --- record your own take at the end ---
const recBtn = document.getElementById("rec");
const recStatus = document.getElementById("rec-status");
let endRecorder = null;
let endChunks = [];

if (!canRecord) {
    recBtn.disabled = true;
    recStatus.textContent = "Recording isn't supported in this browser. Write your take instead.";
}

recBtn.addEventListener("click", async function () {
    if (endRecorder && endRecorder.state === "recording") { endRecorder.stop(); return; }
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        endRecorder = new MediaRecorder(stream);
        endChunks = [];
        endRecorder.ondataavailable = function (e) { endChunks.push(e.data); };
        endRecorder.onstop = function () {
            stream.getTracks().forEach(function (t) { t.stop(); });
            const blob = new Blob(endChunks, { type: endRecorder.mimeType || "audio/webm" });
            const url = URL.createObjectURL(blob);
            const wrap = document.createElement("div");
            const stamp = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
            wrap.innerHTML = '<audio controls src="' + url + '"></audio>' +
                '<a href="' + url + '" download="dalloway-' + current.id + '-take.webm">Download this take (' + stamp + ")</a>";
            document.getElementById("recordings").appendChild(wrap);
            recBtn.innerHTML = "&#9679; Record another take";
            recStatus.textContent = "Saved below. Download it if you want to keep it.";
        };
        endRecorder.start();
        recBtn.innerHTML = "&#9632; Stop recording";
        recStatus.textContent = "Recording...";
    } catch (err) {
        recStatus.textContent = "Microphone access was blocked. Allow it in your browser, or write your take instead.";
    }
});

// --- written take, auto-saved ---
document.getElementById("written").addEventListener("input", function (e) {
    if (!current) return;
    const ok = save("podcast-written-" + current.id, e.target.value);
    document.getElementById("saved-msg").textContent = ok ? "Saved in this browser." : "Couldn't save in this browser. Copy your text somewhere safe.";
});
