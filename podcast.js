/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Podcast page: episode scripts, read-aloud with two voices, and voice/written responses.
  To add an episode, copy one object in the EPISODES list and edit it.
*/

const EPISODES = [
    {
        id: "proportion",
        title: "Why call it \"proportion\" instead of madness?",
        tag: "Diagnosis as judgment",
        question: "Bradshaw \"never spoke of 'madness'; he called it not having a sense of proportion.\" What does that change in words accomplish?",
        lines: [
            ["a", "Start with the rename. Bradshaw won't say 'madness.' He says Septimus lacks a sense of proportion."],
            ["b", "Isn't that kinder, though? 'Madness' was a brutal label in 1923. Maybe he's avoiding stigma."],
            ["a", "Look at what 'proportion' implies: balance, restraint, knowing your place. Those aren't medical terms. They're social virtues."],
            ["b", "So the diagnosis becomes a judgment of character."],
            ["a", "And if the problem is character, the cure is correction. Rest, isolation, separation from his wife until he learns to behave."],
            ["b", "I'll push back once more. Bradshaw does see that Septimus is seriously ill, unlike Holmes. Isn't that something?"],
            ["a", "It is. But seeing the illness and listening to the patient aren't the same. Bradshaw decides everything in under an hour, and Septimus asks, 'What power had Bradshaw over him?'"],
        ],
        prompts: [
            "Is \"proportion\" a medical concept, a moral one, or a class one? Point to the text.",
            "Is Bradshaw better or worse than Holmes, who denies anything is wrong?",
            "How could you use the word \"proportion\" as the backbone of a thesis?",
        ],
    },
    {
        id: "holmes",
        title: "Holmes: kindly doctor or quiet tyrant?",
        tag: "Denial & masculinity",
        question: "Holmes says there's \"nothing whatever the matter\" and that \"health is largely a matter in our own control.\" Is he harmless, or the most dangerous figure in the book?",
        lines: [
            ["b", "In Holmes's defense, he's a busy GP. Porridge, hobbies, get outdoors: it's what everyone was told."],
            ["a", "But 'health is largely a matter in our own control' means that if you're still sick, it's your fault."],
            ["b", "That's how people talked about soldiers, too. Pull yourself together."],
            ["a", "Right. Septimus was proud of 'feeling very little.' The army taught him that. Holmes reinforces the same ideal of manly control that broke him."],
            ["b", "And at the end Holmes calls him 'The coward!' Not 'poor man,' not 'I was wrong.' Coward."],
            ["a", "Which is exactly what the army called shell-shocked men. Medicine repeating the military's moral verdict."],
        ],
        prompts: [
            "How does Holmes's denial connect to wartime ideals of masculinity?",
            "Is Holmes's cheerfulness itself a form of control?",
            "What does \"The coward!\" reveal about what medicine is really policing?",
        ],
    },
    {
        id: "england",
        title: "Medicine for whom? Bradshaw, the party, and England",
        tag: "Class & national ideals",
        question: "The narrator says Proportion made England prosper by secluding lunatics and forbidding childbirth. Who is medicine really serving?",
        lines: [
            ["a", "The Proportion passage ties Bradshaw's success to England's. 'Made England prosper.' That's a national project, not a patient's recovery."],
            ["b", "And then the list: secluded her lunatics, forbade childbirth, penalised despair. That's eugenics language."],
            ["a", "It was mainstream at the time. Woolf puts it in the mouth of the most respectable doctor in London."],
            ["b", "Then he shows up at the party. The Prime Minister is there, Richard is there, and Bradshaw is talking about a Bill on shell shock."],
            ["a", "So the doctor isn't just treating patients. He's helping write policy, among the people who run the country."],
            ["b", "Which makes Clarissa's thought sharp: 'obscurely evil.' She senses it, even if she can't name it."],
        ],
        prompts: [
            "What does it mean that Bradshaw is a welcome guest at the party?",
            "How does the eugenics language in the Proportion passage change your reading of Bradshaw?",
            "Who benefits from Septimus being sent away?",
        ],
    },
    {
        id: "death",
        title: "Was Septimus's death a symptom or a refusal?",
        tag: "Death as resistance",
        question: "Is the suicide presented as the result of illness, or as resistance to medical control?",
        lines: [
            ["b", "We should be careful here. Septimus is very ill. Reading his death as a political act could romanticize it."],
            ["a", "Agreed. But look at his last thoughts. 'He did not want to die. Life was good. The sun hot.' The problem is 'human beings.'"],
            ["b", "And the timing: Holmes is coming up the stairs. He jumps at the moment of being taken."],
            ["a", "His last words are 'I'll give it you!' That's thrown at someone. It sounds like defiance."],
            ["b", "And Clarissa reads it that way too: 'Death was defiance.' But she's also using it for her own reflection."],
            ["a", "So maybe the novel holds both: illness and refusal. The point is that the doctors made a life with his illness unlivable."],
        ],
        prompts: [
            "Can a reading of the death as resistance avoid romanticizing it? How?",
            "What evidence in the window passage supports either reading?",
            "Does Clarissa's interpretation strengthen or weaken the argument against the doctors?",
        ],
    },
    {
        id: "women",
        title: "\"Gone under\": women, conversion, and the convalescent",
        tag: "Gender",
        question: "Lady Bradshaw \"had gone under\" fifteen years ago, and Clarissa sleeps alone in a narrow bed. Does medical-social control work differently on women?",
        lines: [
            ["a", "Notice that Conversion doesn't only hit patients. Bradshaw's own wife 'had gone under.' Her will was absorbed into his."],
            ["b", "So the healthy can be converted too. She's the finished product: polite, decorative, apologizing for being late."],
            ["a", "And Clarissa: recovering from illness, moved up to the attic, a narrow bed. Nobody questions that arrangement, least of all her."],
            ["b", "But Clarissa isn't oppressed like Septimus. She's rich, she runs her house, she throws the party."],
            ["a", "True. Maybe that's Woolf's point: the respectable version of control doesn't look like control at all."],
            ["b", "And Woolf herself had rest cures. Compare 'The Yellow Wallpaper,' which is the same treatment from a woman's side."],
        ],
        prompts: [
            "Is Lady Bradshaw a victim, an accomplice, or both?",
            "Is Clarissa's convalescence a form of the same control? Or is that a stretch?",
            "How might Woolf's own medical history shape these female characters?",
        ],
    },
    {
        id: "care",
        title: "Care vs. cure: what does real help look like?",
        tag: "Care vs. cure",
        question: "The hat scene shows Septimus at his best, with no doctor in sight. What alternative to medical control does the novel imagine?",
        lines: [
            ["b", "The hat scene is the happiest Septimus is all day. He jokes, he designs, he's proud."],
            ["a", "And it's just him and Rezia doing ordinary work together. No diagnosis, no instructions."],
            ["b", "Compare that to Holmes's version: take an interest in things outside yourself. That's an order, not a shared activity."],
            ["a", "The irony is the doctors' cure is separation from Rezia, the one thing that's actually helping."],
            ["b", "But we shouldn't turn Rezia into a saint. She's exhausted, lonely, and the system makes her the enforcer."],
            ["a", "Which might be the point: care needs support, and the system offers control instead."],
        ],
        prompts: [
            "What does the hat scene suggest care could look like?",
            "How does the medical system turn Rezia from caregiver into enforcer?",
            "Connect this to the social model of disability: what would accommodation look like for Septimus?",
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

// ---- Choosing the most human-sounding voices this device has ----
// Neural voices (Edge "Natural", Safari "Premium"/"Enhanced", Google voices in Chrome)
// sound far more natural than the old system voices, so they're ranked first.
const FEMALE = /sonia|libby|maisie|hollie|bella|abbie|jenny|aria|michelle|ava|emma|serena|kate|martha|stephanie|samantha|karen|moira|tessa|fiona|victoria|susan|zira|hazel|female|woman/i;
const MALE = /ryan|thomas|oliver|elliot|alfie|ethan|noah|guy|davis|andrew|brian|christopher|eric|daniel|arthur|alex|tom|george|david|mark|james|male|man\b/i;
const NOVELTY = /albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|fred|good news|hysterical|jester|junior|organ|superstar|trinoids|whisper|wobble|zarvox|ralph|kathy|grandma|grandpa|eddy|flo|reed|rocko|sandy|shelley/i;

function voiceScore(v) {
    let score = 0;
    if (/natural/i.test(v.name)) score += 100;
    if (/premium/i.test(v.name)) score += 80;
    if (/enhanced|siri/i.test(v.name)) score += 60;
    if (/online|neural/i.test(v.name)) score += 50;
    if (/google/i.test(v.name)) score += 40;
    if (v.lang === "en-GB") score += 15;          // the novel is set in London
    else if (/^en-(US|AU|IE)/.test(v.lang)) score += 5;
    if (v.localService === false) score += 5;     // cloud voices are usually the neural ones
    if (NOVELTY.test(v.name)) score -= 500;
    return score;
}

function englishVoices() {
    return (synth ? synth.getVoices() : []).filter(function (v) { return v.lang && v.lang.indexOf("en") === 0; })
        .sort(function (a, b) { return voiceScore(b) - voiceScore(a); });
}

function autoVoices() {
    const list = englishVoices();
    const a = list.find(function (v) { return FEMALE.test(v.name) && !MALE.test(v.name); }) || list[0] || null;
    const b = list.find(function (v) { return v !== a && MALE.test(v.name) && !FEMALE.test(v.name); }) ||
              list.find(function (v) { return v !== a; }) || a;
    return { a: a, b: b };
}

function pickVoices() {
    const auto = autoVoices();
    const chosen = load("podcast-voices", {});
    const list = englishVoices();
    function byName(n) { return list.find(function (v) { return v.name === n; }); }
    return { a: byName(chosen.a) || auto.a, b: byName(chosen.b) || auto.b };
}

// Fill the two voice menus (voices load a moment after the page does).
function fillVoiceMenus() {
    const list = englishVoices();
    const menus = { a: document.getElementById("voice-a"), b: document.getElementById("voice-b") };
    if (!list.length || !menus.a) return;
    const current = pickVoices();
    ["a", "b"].forEach(function (k) {
        menus[k].innerHTML = list.map(function (v) {
            const tag = voiceScore(v) >= 40 ? " \u2605" : "";
            return '<option value="' + escapeHtml(v.name) + '"' + (current[k] === v ? " selected" : "") + ">" +
                   escapeHtml(v.name.replace(/^Microsoft |^Google /, "")) + " (" + v.lang + ")" + tag + "</option>";
        }).join("");
        menus[k].onchange = function () {
            const chosen = load("podcast-voices", {});
            chosen[k] = menus[k].value;
            save("podcast-voices", chosen);
            if (!playing) previewVoice(k);
        };
    });
    const best = Math.max.apply(null, list.map(voiceScore));
    voiceNote.innerHTML = best >= 40 ? "" :
        "Your browser only has basic voices. For much more natural ones, open this page in <strong>Microsoft Edge</strong> (its \"Natural\" voices) or Safari.";
}

function previewVoice(k) {
    if (!synth) return;
    synth.cancel();
    sayLine(k, k === "a" ? "Hello, I'm Vera." : "And I'm Theo.", function () {});
}

if (synth) {
    fillVoiceMenus();
    synth.addEventListener ? synth.addEventListener("voiceschanged", fillVoiceMenus) : (synth.onvoiceschanged = fillVoiceMenus);
}

function highlight(i) {
    document.querySelectorAll(".line.speaking").forEach(function (x) { x.classList.remove("speaking"); });
    const el = document.getElementById("line-" + i);
    if (el) el.classList.add("speaking");
}

function sayLine(speaker, text, onDone) {
    const v = pickVoices();
    const u = new SpeechSynthesisUtterance(text);
    if (v[speaker]) { u.voice = v[speaker]; u.lang = v[speaker].lang; }
    u.pitch = 1;       // changing pitch makes voices sound robotic
    u.rate = 1;
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
