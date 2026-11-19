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

// --- small helpers for browser storage (can fail in some browsers, so wrap it) ---
function load(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
}
function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
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
    stopSpeaking();
    current = ep;
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
        div.innerHTML = '<div class="speaker">' + HOSTS[l[0]] + "</div>" + l[1];
        t.appendChild(div);
    });

    const p = document.getElementById("prompts");
    p.innerHTML = "";
    ep.prompts.forEach(function (q) { const li = document.createElement("li"); li.textContent = q; p.appendChild(li); });

    document.getElementById("written").value = load("podcast-written-" + ep.id, "");
    document.getElementById("saved-msg").textContent = "";
    document.getElementById("recordings").innerHTML = "";
    player.scrollIntoView({ behavior: "smooth" });
}

// --- read aloud with two different voices ---
const synth = window.speechSynthesis;
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const voiceNote = document.getElementById("voice-note");

if (!synth) {
    playBtn.disabled = true;
    voiceNote.textContent = "Your browser can't read aloud. Use the transcript below.";
}

function pickVoices() {
    const voices = synth ? synth.getVoices().filter(function (v) { return v.lang && v.lang.indexOf("en") === 0; }) : [];
    const gb = voices.filter(function (v) { return v.lang === "en-GB"; });
    const pool = gb.length >= 2 ? gb : voices;
    return { a: pool[0] || null, b: pool[1] || pool[0] || null };
}

function stopSpeaking() {
    if (synth) synth.cancel();
    document.querySelectorAll(".line.speaking").forEach(function (x) { x.classList.remove("speaking"); });
    playBtn.disabled = !synth;
    stopBtn.disabled = true;
}

playBtn.addEventListener("click", function () {
    if (!current) return;
    stopSpeaking();
    const v = pickVoices();
    playBtn.disabled = true;
    stopBtn.disabled = false;
    current.lines.forEach(function (l, i) {
        const u = new SpeechSynthesisUtterance(l[1]);
        if (v[l[0]]) u.voice = v[l[0]];
        u.pitch = l[0] === "a" ? 1.1 : 0.85;
        u.rate = 0.98;
        u.onstart = function () {
            document.querySelectorAll(".line.speaking").forEach(function (x) { x.classList.remove("speaking"); });
            const el = document.getElementById("line-" + i);
            if (el) el.classList.add("speaking");
        };
        if (i === current.lines.length - 1) u.onend = stopSpeaking;
        synth.speak(u);
    });
});
stopBtn.addEventListener("click", stopSpeaking);

// --- record your own take ---
const recBtn = document.getElementById("rec");
const recStatus = document.getElementById("rec-status");
let recorder = null;
let chunks = [];

if (!navigator.mediaDevices || !window.MediaRecorder) {
    recBtn.disabled = true;
    recStatus.textContent = "Recording isn't supported in this browser. Write your take instead.";
}

recBtn.addEventListener("click", async function () {
    if (recorder && recorder.state === "recording") { recorder.stop(); return; }
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        recorder = new MediaRecorder(stream);
        chunks = [];
        recorder.ondataavailable = function (e) { chunks.push(e.data); };
        recorder.onstop = function () {
            stream.getTracks().forEach(function (t) { t.stop(); });
            const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
            const url = URL.createObjectURL(blob);
            const wrap = document.createElement("div");
            const stamp = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
            wrap.innerHTML = '<audio controls src="' + url + '"></audio>' +
                '<a href="' + url + '" download="dalloway-' + current.id + '-take.webm">Download this take (' + stamp + ")</a>";
            document.getElementById("recordings").appendChild(wrap);
            recBtn.innerHTML = "&#9679; Record another take";
            recStatus.textContent = "Saved below. Download it if you want to keep it.";
        };
        recorder.start();
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
