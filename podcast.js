/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Podcast page: episode scripts, read-aloud with two voices, and voice/written responses.
  To add an episode, copy one object in the EPISODES list and edit it.
*/

// Format (like a seminar podcast): the host, Vera, asks a broad question ("q"),
// then narrower follow-ups. Vera ("a") and her guest Theo ("b") summarize what
// happens, read the quotes, and try out POSSIBLE readings without settling on one.
// The conclusions are left to the listener. Every quote is checked against the 1925 text.
const EPISODES = [
    {
        id: "proportion-open",
        title: "Bradshaw and \"proportion\"",
        tag: "Proportion & normality",
        question: "What does Sir William Bradshaw mean by a \"sense of proportion,\" and how might we read it?",
        lines: [
            ["a", "Welcome back. Today we're looking at one word that keeps coming up around Sir William Bradshaw: proportion. Theo, thanks for joining me."],
            ["b", "Glad to be here. We'll mostly be laying out what's on the page and trying a few readings, not settling anything."],
            ["q", "Let's start with the scene itself. What actually happens at the appointment?"],
            ["b", "At noon, Septimus and Rezia go to Bradshaw's office on Harley Street. He asks Septimus a few questions, decides the case is serious, and tells them arrangements have been made for Septimus to go to a home in the country, away from Rezia, to rest."],
            ["a", "And the key word comes in how Bradshaw describes the illness. Sir William said he never spoke of madness; he called it not having a sense of proportion."],
            ["b", "So in plain terms, he avoids the word madness and talks about a lack of proportion instead."],
            ["q", "What could that change in wording mean?"],
            ["a", "One possible reading is that it's a kindness. Madness was a harsh label, and avoiding it might protect patients from stigma."],
            ["b", "Another reading starts from what proportion means in everyday speech: balance, restraint, not overdoing things. On that reading, the illness becomes a question of behavior rather than disease."],
            ["a", "And a third possibility is that it's simply professional language, the way a specialist in 1923 would talk. Readers disagree about how much weight to put on it."],
            ["b", "It might help to notice how he announces the plan, too. We have been arranging that you should go into a home."],
            ["a", "That we is interesting. It's worth asking who's in it, and who isn't."],
            ["q", "Let's widen out. What does the narrator say about proportion after the appointment?"],
            ["b", "The narration steps outside the characters and calls it Proportion, divine proportion, Sir William's goddess."],
            ["a", "Then it says: Worshipping proportion, Sir William not only prospered himself but made England prosper. And it lists what that involved: secluded her lunatics, forbade childbirth, penalised despair."],
            ["b", "Some readers hear satire there, the narrator mocking him. Others hear something closer to a historical record, since ideas like these really were respectable at the time. And some hear both."],
            ["a", "The religious language is worth noticing whichever way you lean: goddess, worshipping, and next, conversion."],
            ["q", "Last question. What might Septimus's point of view add?"],
            ["b", "Later that day, Septimus asks himself: What power had Bradshaw over him?"],
            ["a", "You could read that as a sign of his illness, or as a reasonable question, or both. The novel gives you his words and leaves the judgment open."],
            ["b", "So there are a few threads to pull: the word proportion, the we, the goddess, and Septimus's question. Where do you land?"],
        ],
        prompts: [
            "Which reading of \"proportion\" seems strongest to you, and what line supports it?",
            "Who do you think is included in Bradshaw's \"we\"?",
            "How do you hear the narrator's tone in the Proportion passage?",
        ],
    },
    {
        id: "holmes-open",
        title: "Dr. Holmes: \"nothing whatever the matter\"",
        tag: "Denial & masculinity",
        question: "How does Dr. Holmes understand Septimus's illness, and what might that tell us?",
        lines: [
            ["a", "Today's episode is about the first doctor in Septimus's story, Dr. Holmes. Theo, who is he?"],
            ["b", "He's a general practitioner, an ordinary family doctor. He visits the Smiths regularly before Bradshaw is ever involved."],
            ["q", "Broad question first. What does Holmes say is wrong with Septimus?"],
            ["a", "Essentially, nothing. The narration reports it flatly: There was nothing whatever the matter, said Dr. Holmes."],
            ["b", "And we hear his advice secondhand through Rezia. He told her to make her husband take an interest in things outside himself. In her thoughts, the doctor's view appears in parentheses: nothing whatever seriously the matter, just a little out of sorts."],
            ["a", "He also says: health is largely a matter in our own control."],
            ["q", "Let's narrow in. How could we read that line about control?"],
            ["b", "One reading is that it's encouragement, the kind of thing a doctor might still say today about exercise and routine."],
            ["a", "Another reading is that it places responsibility on the patient. If health is in your control, what does it mean if you stay ill?"],
            ["b", "And another possibility is that it's simply the medical common sense of 1923, and Woolf is recording it rather than judging it. It's worth looking at how the surrounding narration treats him before deciding."],
            ["q", "What about the war? How might it connect to Holmes?"],
            ["a", "We learn that when Evans was killed, Septimus congratulated himself upon feeling very little and very reasonably."],
            ["b", "In plain English, he was proud of not feeling much. Soldiers were expected to stay calm, so some readers connect that pride to military ideals of manhood."],
            ["a", "And at the very end, when Septimus dies, Holmes says: The coward!"],
            ["b", "Coward was also a word used about soldiers during the war. Whether Woolf means us to hear that connection is a question you could test against the text."],
            ["q", "Finally, how does Septimus see the doctors?"],
            ["a", "In his own thoughts: Once you fall, Septimus repeated to himself, human nature is on you. Holmes and Bradshaw are on you."],
            ["b", "And: The verdict of human nature on such a wretch was death."],
            ["a", "Readers split here. Some treat these lines as symptoms of paranoia. Others treat them as Septimus seeing something real about how he's treated. Some say it's both at once."],
            ["b", "So the pieces to weigh are Holmes's words, the war, and Septimus's own view. What do you make of them?"],
        ],
        prompts: [
            "Do you read \"health is largely a matter in our own control\" as encouragement, blame, or something else?",
            "Is there a connection between Septimus's war and Holmes's advice? What's your evidence?",
            "How much weight do you give Septimus's view of the doctors?",
        ],
    },
    {
        id: "party-open",
        title: "The doctor at the party",
        tag: "Class & medical authority",
        question: "What happens when Sir William Bradshaw arrives at Clarissa's party, and why might it matter?",
        lines: [
            ["a", "Today we're following Sir William Bradshaw out of his office and into Clarissa Dalloway's party. Theo, set the scene."],
            ["b", "It's late evening. The house is full of important guests, including the Prime Minister. Richard Dalloway, Clarissa's husband, is a Member of Parliament."],
            ["q", "What actually happens when the Bradshaws arrive?"],
            ["a", "They're late, and Lady Bradshaw apologizes: We are shockingly late, dear Mrs. Dalloway, we hardly dared to come in."],
            ["b", "Sir William talks with Richard about a Bill in Parliament. The narration describes the subject as the deferred effects of shell shock."],
            ["a", "And Lady Bradshaw quietly tells Clarissa that a young man, one of Sir William's patients, has killed himself."],
            ["q", "Let's slow down on the Bill. Why might that detail be there?"],
            ["b", "One reading is simply realism. Doctors did advise on legislation, and shell shock was a live political issue in the early 1920s."],
            ["a", "Another reading notices the timing: the same doctor who saw Septimus at noon is discussing laws about men like him that evening."],
            ["b", "And another possibility is that it's about the setting more than the man: what kinds of conversations happen at a party like this, and who's in the room for them."],
            ["q", "How does anyone else see the medical system on this day?"],
            ["a", "Earlier that evening, Peter Walsh hears an ambulance bell in the street. One of the triumphs of civilisation, Peter Walsh thought."],
            ["b", "The reader knows who's in the ambulance, and Peter doesn't. People read that gap differently. Some hear irony, some hear Peter's honest admiration for a modern city, and some hear both."],
            ["q", "Finally, how does Clarissa react to Sir William?"],
            ["a", "She thinks of him as a great doctor yet to her obscurely evil."],
            ["b", "Obscurely is an interesting word. It suggests she can't quite say why."],
            ["a", "Then she goes further. She imagines him capable of some indescribable outrage, forcing your soul, that was it."],
            ["b", "And afterwards she goes back out and carries on as hostess. Readers interpret that return in very different ways."],
            ["a", "So: the Bill, the ambulance, Clarissa's reaction, and her return to the party. How do you put those pieces together?"],
        ],
        prompts: [
            "Why do you think Woolf brings Bradshaw to the party?",
            "How do you hear Peter's thought about the ambulance?",
            "What do you make of Clarissa returning to her guests?",
        ],
    },
    {
        id: "death-open",
        title: "Septimus's last minutes",
        tag: "Death as resistance",
        question: "How does the novel present Septimus's death, and what readings does the text allow?",
        lines: [
            ["a", "This is a difficult episode, so we'll go carefully and stick closely to the text. Theo, what's the situation?"],
            ["b", "It's early evening. Septimus and Rezia have just had a calm hour making a hat together. Then Dr. Holmes arrives to take Septimus to the home in the country."],
            ["q", "What happens in those last minutes?"],
            ["a", "Rezia tries to keep Holmes on the stairs. Septimus, alone, asks himself why he must go: What power had Bradshaw over him?"],
            ["b", "Then the narration gives his thoughts at the window. He did not want to die. Life was good. The sun hot. And then: Only human beings."],
            ["a", "As Holmes comes in, he says: I'll give it you! and jumps. Holmes's reaction is: The coward!"],
            ["q", "Let's take those last thoughts first. How might we read them?"],
            ["b", "One reading focuses on the short sentences. They're simple and clear, which could suggest a moment of calm or clarity."],
            ["a", "Another reading focuses on the contrast: life is good, but human beings are the problem. Readers ask which human beings he means."],
            ["b", "And a third reading emphasizes that he is seriously ill, and that his thoughts at this moment shouldn't be treated as a statement of principle."],
            ["q", "What about his last words?"],
            ["a", "I'll give it you! is addressed to someone. Some readers hear defiance. Others hear desperation, or bitterness. The words themselves are short enough to support several tones."],
            ["b", "It might help to read the whole page aloud and listen for the tone yourself."],
            ["q", "How does Clarissa interpret the death later?"],
            ["a", "At her party, alone in a small room, she thinks: Death was defiance. Death was an attempt to communicate."],
            ["b", "She also imagines the young man thinking, about men like Sir William: they make life intolerable, men like that."],
            ["a", "And then: She felt glad that he had done it; thrown it away. Many readers find that line uncomfortable."],
            ["b", "One question is whether Clarissa's reading should be taken as the novel's view, or as one character's view. The novel doesn't say directly."],
            ["a", "So there's the scene, his last thoughts, his last words, and Clarissa's interpretation. How do you read them?"],
        ],
        prompts: [
            "What details in the window scene stand out to you most?",
            "Is Clarissa's interpretation the novel's view or only hers? What makes you think so?",
            "How would you write about this scene carefully and respectfully?",
        ],
    },
    {
        id: "women-open",
        title: "Lady Bradshaw, Clarissa, and Miss Kilman",
        tag: "Gender",
        question: "How do the women in the novel relate to medicine and to the pressure to conform?",
        lines: [
            ["a", "Most of our episodes focus on Septimus. Today, Theo, we're looking at three women who aren't his doctors' patients."],
            ["b", "Lady Bradshaw, Clarissa, and Miss Kilman. Each one connects to the medical story differently."],
            ["q", "Start with Lady Bradshaw. Where does she appear?"],
            ["a", "In the narrator's passage about Proportion and Conversion. Conversion is her name and she feasts on the wills of the weakly. And shortly after, about Sir William's wife: Fifteen years ago she had gone under."],
            ["b", "In plain English, gone under means she gave way, or sank. The passage doesn't spell out exactly what happened."],
            ["a", "Readers interpret it in different ways: as her will being absorbed into her husband's, as an illness of her own, or as something left deliberately vague."],
            ["q", "Now Clarissa. How is her health described?"],
            ["b", "She's recovering from an illness that affected her heart, and she sleeps alone in an attic room. Narrower and narrower would her bed be."],
            ["a", "And when she goes upstairs: Like a nun withdrawing, or a child exploring a tower, she went upstairs."],
            ["b", "One reading compares her quiet rest with Septimus's treatment. Another stresses the differences: she's wealthy and in charge of her own household. Others read the attic mainly in terms of her marriage and her memories of Sally Seton."],
            ["q", "And Miss Kilman? She isn't connected to medicine at all."],
            ["a", "Not directly. She's Elizabeth's religious tutor. She resents Clarissa: If she could have felled her it would have eased her."],
            ["b", "And Clarissa thinks: Love and religion! thought Clarissa. She groups the two together."],
            ["a", "Some readers connect Kilman's wish to bring Elizabeth to her faith with the narrator's word conversion. Others see her mostly as a lonely, mistreated figure in her own right."],
            ["q", "One more. What about Woolf herself?"],
            ["b", "Woolf received rest cures: bed rest, isolation, limits on reading and writing. Some readers bring that biography in; others prefer to read the novel on its own terms."],
            ["a", "Charlotte Perkins Gilman's story The Yellow Wallpaper is another account of a rest cure, if you want a comparison."],
            ["b", "So: three women, three different relationships to control. What connections do you see, if any?"],
        ],
        prompts: [
            "What do you think \"gone under\" means for Lady Bradshaw?",
            "Do you see any connection between Clarissa's illness and Septimus's? Or are they too different?",
            "Does Miss Kilman belong in a discussion of medicine? Why or why not?",
        ],
    },
    {
        id: "care-open",
        title: "Rezia and the hat",
        tag: "Care vs. cure",
        question: "What is Rezia's role in Septimus's story, and what happens in the hat scene?",
        lines: [
            ["a", "Today we're looking at Lucrezia, Rezia, Septimus's wife. Theo, who is she?"],
            ["b", "She's young, Italian, a hat-maker. They married in Milan after the war, and she moved to London with him."],
            ["q", "Broad question. What does Rezia do in the medical story?"],
            ["a", "She's with Septimus all the time. She follows the doctors' advice. Dr. Holmes had told her to make her husband take an interest in things outside himself."],
            ["b", "And on Bond Street in the morning, she's worried about appearances: People must notice; people must see."],
            ["a", "Readers describe her role in different ways: caregiver, the doctors' helper, a wife in an impossible position. Possibly all at once."],
            ["q", "Let's narrow in. What happens to Rezia herself?"],
            ["b", "In Regent's Park she walks away from Septimus to the fountain and cries out: I am alone; I am alone!"],
            ["a", "She thinks about Italy and her sisters. In plain English, she's homesick and has no one to turn to."],
            ["b", "It's worth checking whether any doctor ever asks Rezia what she thinks, and what happens when she speaks."],
            ["q", "Now the hat scene. What happens?"],
            ["a", "Late in the afternoon, Rezia is trimming a hat for a client. Septimus starts helping, makes suggestions and jokes. For a while, they're simply happy together."],
            ["b", "The narration says: Never had he done anything which made him feel so proud."],
            ["a", "Then Rezia remembers he'll be taken away, and they promise nothing will separate them."],
            ["q", "How might we read that scene?"],
            ["b", "One reading treats it as a contrast with the medical scenes: no doctor, and Septimus at his clearest. Another reading is more cautious: it's a brief good hour, and his illness hasn't gone away."],
            ["a", "And some readers focus on its placement, right before Holmes arrives, and what that ordering does."],
            ["b", "We should also mention Septimus's own messages from the park: Men must not cut down trees. There is a God. And: No one kills from hatred. Readers debate whether these are only symptoms or also contain insight."],
            ["a", "So: Rezia's role, her loneliness, and the hat scene. What do you take from them?"],
        ],
        prompts: [
            "How would you describe Rezia's role: caregiver, helper, enforcer, or something else?",
            "What do you notice about where the hat scene is placed in the day?",
            "What, if anything, does the novel suggest would actually help Septimus?",
        ],
    },
];

const HOSTS = { a: "Vera (host)", b: "Theo (guest)", q: "Question" };
function voiceFor(role) { return role === "b" ? "b" : "a"; }   // the host asks the questions


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
    b.innerHTML = "Ep. " + (i + 1) + ": " + ep.title + "<small>" + ep.tag +
        ' &middot; <span class="ep-length"></span></small>';
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
    setTranscript(false);
    ep.lines.forEach(function (l, i) {
        const div = document.createElement("div");
        div.className = "line " + l[0];
        div.id = "line-" + i;
        div.innerHTML = '<div class="speaker">' + HOSTS[l[0]] +
            ' <button type="button" class="stamp-btn" title="Play from here"></button></div>' + l[1];
        div.querySelector(".stamp-btn").addEventListener("click", function () { jumpTo(i, false); });
        t.appendChild(div);
    });


    const p = document.getElementById("prompts");
    p.innerHTML = "";
    ep.prompts.forEach(function (q) { const li = document.createElement("li"); li.textContent = q; p.appendChild(li); });

    refreshStamps();
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
const voiceNote = document.getElementById("voice-note");

let pos = 0;           // index of the next line to speak
let playing = false;   // hosts are talking right now
let paused = false;    // paused by the listener
let lineDone = true;   // did the current line finish before we paused?

if (!synth) voiceNote.textContent = "Your browser can't read aloud. Open the transcript to read the episode instead.";

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
    cancelSpeech();
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
    updateNowPlaying(i);
}

// ======================================================================
//  TRANSCRIPT: hidden by default to keep the page clean.
//  While hidden, a "Now playing" bar shows the current line.
// ======================================================================
const transcriptEl = document.getElementById("transcript");
const toggleBtn = document.getElementById("toggle-transcript");

function setTranscript(open) {
    transcriptEl.hidden = !open;
    toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
    toggleBtn.innerHTML = open ? "&#9652; Hide transcript" : "&#9662; Show transcript";
    updateNowPlaying(current && document.querySelector(".line.speaking") ? +document.querySelector(".line.speaking").id.slice(5) : -1);
}
toggleBtn.addEventListener("click", function () { setTranscript(transcriptEl.hidden); });

function updateNowPlaying(i) {
    const bar = document.getElementById("now-playing");
    if (!current || i < 0 || i >= current.lines.length || !transcriptEl.hidden) { bar.hidden = true; return; }
    const l = current.lines[i];
    bar.hidden = false;
    bar.classList.toggle("is-question", l[0] === "q");
    document.getElementById("np-speaker").textContent = HOSTS[l[0]];
    document.getElementById("np-text").textContent = l[1];
}

// ---- Speech, with a "generation" counter so cancelled lines never trigger the next one ----
let gen = 0;
function cancelSpeech() {
    gen++;
    if (synth) synth.cancel();
}

function sayLine(speaker, text, onDone) {
    const v = pickVoices();
    const u = new SpeechSynthesisUtterance(text);
    if (v[speaker]) { u.voice = v[speaker]; u.lang = v[speaker].lang; }
    u.pitch = 1;       // changing pitch makes voices sound robotic
    u.rate = speed;
    const myGen = gen;
    u.onend = function () { if (myGen === gen) onDone(); };
    synth.speak(u);
}

// ======================================================================
//  TIMESTAMPS: browsers don't report speech length, so each line's length
//  is estimated from its word count at a natural speaking pace.
// ======================================================================
const WPM = 160;            // words per minute at 1x
const GAP = 0.5;            // pause between lines, seconds
let speed = +load("podcast-speed", 1) || 1;
let lineStartAt = 0;        // when the current line started (ms)
let clockTimer = null;

function lineSecs(text) {
    return (text.trim().split(/\s+/).length / WPM * 60 + GAP) / speed;
}
function episodeSecs(ep) {
    return ep.lines.reduce(function (t, l) { return t + lineSecs(l[1]); }, 0);
}
function starts() {
    const out = [];
    let t = 0;
    current.lines.forEach(function (l) { out.push(t); t += lineSecs(l[1]); });
    out.push(t);            // last entry = total length
    return out;
}
function fmt(sec) {
    sec = Math.max(0, Math.round(sec));
    return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");
}
function elapsed() {
    if (!current) return 0;
    const st = starts();
    const i = Math.min(pos, current.lines.length);
    if (playing && !lineDone && i < current.lines.length) {
        const inLine = (performance.now() - lineStartAt) / 1000;
        return st[i] + Math.min(inLine, st[i + 1] - st[i]);
    }
    return st[i];
}
function updateClock() {
    if (!current) return;
    const total = starts()[current.lines.length];
    const now = elapsed();
    document.getElementById("clock").textContent = fmt(now) + " / " + fmt(total);
    document.getElementById("progress-fill").style.width = (total ? now / total * 100 : 0) + "%";
}
function refreshStamps() {
    if (current) {
        const st = starts();
        current.lines.forEach(function (l, i) {
            const el = document.querySelector("#line-" + i + " .stamp-btn");
            if (el) el.textContent = fmt(st[i]);
        });
    }
    document.querySelectorAll(".episode-btn").forEach(function (b, i) {
        const m = b.querySelector(".ep-length");
        if (m) m.textContent = "⏱ " + fmt(episodeSecs(EPISODES[i]));
    });
    updateClock();
}
function startClock() {
    if (!clockTimer) clockTimer = setInterval(updateClock, 250);
}
function stopClock() {
    clearInterval(clockTimer);
    clockTimer = null;
    updateClock();
}

function speakNext() {
    if (!playing || !current) return;
    if (pos >= current.lines.length) { finish(); return; }
    const i = pos;
    const l = current.lines[i];
    highlight(i);
    lineDone = false;
    lineStartAt = performance.now();
    startClock();
    sayLine(voiceFor(l[0]), l[1], function () {
        if (!playing || pos !== i) return;
        lineDone = true;
        pos = i + 1;
        speakNext();
    });
}

function finish() {
    playing = false;
    paused = false;
    pos = 0;
    lineDone = true;
    highlight(-1);
    stopClock();
    setControls();
    document.querySelector(".your-turn").scrollIntoView({ behavior: "smooth", block: "center" });
}

function stopAll() {
    playing = false;
    paused = false;
    cancelSpeech();
    highlight(-1);
    stopClock();
    setControls();
}

function pauseNow() {
    if (!playing) return;
    playing = false;
    paused = true;
    cancelSpeech();         // the interrupted line replays from its start
    stopClock();
    setControls();
}

// Jump to a line. Keeps playing if it was playing, otherwise starts.
function jumpTo(i, keepPaused) {
    if (!current || !synth) return;
    cancelSpeech();
    pos = Math.max(0, Math.min(i, current.lines.length - 1));
    lineDone = true;
    if (keepPaused) {
        highlight(pos);
        updateClock();
        setControls();
        return;
    }
    paused = false;
    playing = true;
    setControls();
    speakNext();
}

function skip(seconds) {
    if (!current) return;
    const st = starts();
    const target = elapsed() + seconds;
    let i = 0;
    while (i < current.lines.length - 1 && st[i + 1] <= target) i++;
    const here = Math.min(pos, current.lines.length - 1);
    if (seconds > 0 && i <= here) i = here + 1;              // always move forward at least one line
    if (i >= current.lines.length) { cancelSpeech(); finish(); return; }
    jumpTo(i, !playing);
}

function setControls() {
    const has = !!current && !!synth;
    playBtn.disabled = !has;
    playBtn.innerHTML = playing ? "&#10074;&#10074; Pause" :
        (paused ? "&#9654; Resume" : (pos > 0 ? "&#9654; Continue" : "&#9654; Play episode"));
    stopBtn.disabled = !playing && !paused;
    document.getElementById("back15").disabled = !has;
    document.getElementById("fwd15").disabled = !has;
}

playBtn.addEventListener("click", function () {
    if (!current || !synth) return;
    if (playing) { pauseNow(); return; }
    paused = false;
    playing = true;
    setControls();
    speakNext();
});
stopBtn.addEventListener("click", function () { pos = 0; lineDone = true; stopAll(); });
document.getElementById("back15").addEventListener("click", function () { skip(-15); });
document.getElementById("fwd15").addEventListener("click", function () { skip(15); });

document.getElementById("progress").addEventListener("click", function (e) {
    if (!current) return;
    const r = this.getBoundingClientRect();
    const target = (e.clientX - r.left) / r.width * starts()[current.lines.length];
    const st = starts();
    let i = 0;
    while (i < current.lines.length - 1 && st[i + 1] <= target) i++;
    jumpTo(i, !playing);
});

refreshStamps();   // fill in each episode's length

const speedSel = document.getElementById("speed");
speedSel.value = String(speed);
if (speedSel.value !== String(speed)) { speed = 1; speedSel.value = "1"; }
speedSel.addEventListener("change", function () {
    speed = +speedSel.value;
    save("podcast-speed", speed);
    refreshStamps();
    if (playing && !lineDone) { cancelSpeech(); speakNext(); }   // restart the current line at the new speed
});

// ======================================================================
//  INTERJECTIONS: record (with live transcript where supported) or type
// --- record your own take at the end ---
const recBtn = document.getElementById("rec");
const recStatus = document.getElementById("rec-status");
let endRecorder = null;
let endChunks = [];

if (!(navigator.mediaDevices && window.MediaRecorder)) {
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
