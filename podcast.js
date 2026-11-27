/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Podcast page: episode scripts, read-aloud with two voices, and voice/written responses.
  To add an episode, copy one object in the EPISODES list and edit it.
*/

// Format: the host, Vera, asks a broad question ("q"), then narrower follow-ups.
// Vera ("a") and her guest Theo ("b") explain and build on each other. Code is
// described in plain words so it sounds natural when read aloud.
const EPISODES = [
    {
        id: "why-embed",
        title: "Why embed? The big picture",
        tag: "Overview",
        question: "Why do web pages borrow images, videos and tools instead of just using text?",
        lines: [
            ["a", "Welcome to Embedding 101. Today we're starting with the big picture before any code. Theo, thanks for joining."],
            ["b", "Happy to be here. Everything later makes more sense once you know why we embed things at all."],
            ["q", "So let's start there. Why put images, videos and maps on a page instead of explaining everything in text?"],
            ["b", "Because people understand pictures faster than paragraphs. A photo of a place, or a short video showing a process, can replace a whole page of description."],
            ["a", "And it changes how people move through a page. If a menu is made of pictures, visitors click what interests them instead of scrolling through everything."],
            ["b", "That's the jump link idea: click a picture, land on the matching section. It's a shortcut that keeps a long page organized."],
            ["q", "Let's narrow in on something the assignment stresses: who controls each piece. What are the four ways content gets onto a page?"],
            ["a", "The first is owned. That's a file in your own repository, like a photo you uploaded. You control it, and it only changes when you change it."],
            ["b", "Second is linked. You point to a file on someone else's website using its full web address. It shows up on your page, but they control it. If they move it, it breaks for you."],
            ["a", "Third is embedded. That's a live window into another service, like YouTube or Google Maps, sitting in a box on your page. It runs on their side."],
            ["b", "And fourth is built: code in your own page that does something, like a dark mode button. You control that one."],
            ["q", "Why does that question, who controls it, actually matter?"],
            ["a", "Because it tells you where to look when something breaks. If an owned image is broken, the problem is in your code or your files."],
            ["b", "If an embedded video says unavailable, the problem might be on YouTube's side, like the owner blocking embeds. No amount of fixing your code will change that."],
            ["q", "Last one. What makes an embed interactive, and why is that useful?"],
            ["a", "An interactive embed responds to the visitor. A map you can zoom and drag, or a chart you can hover over to see numbers."],
            ["b", "So the page becomes a tool, not just something to read. Each visitor can explore the part they care about."],
            ["a", "And there's a third kind, two-way, like an embedded form, where you send information and the other company keeps it."],
            ["b", "So: show instead of tell, give people shortcuts, and let them interact. That's the why. The next episodes cover the how."],
        ],
        prompts: [
            "Think of a page you use often. What's owned, linked, embedded or built on it?",
            "When would a video teach something better than text? When wouldn't it?",
            "If an embedded map stopped working, how would you decide whether it's your fault?",
        ],
    },
    {
        id: "images-jumps",
        title: "Images and jump links",
        tag: "Image & jump link",
        question: "How do you add an image, make it clickable, and fix it when it breaks?",
        lines: [
            ["a", "Today we're covering the most common thing on any page: an image. And then making that image jump somewhere when you click it."],
            ["b", "These are also where the smallest typos cause the most confusion."],
            ["q", "Start simple. What does an image tag need?"],
            ["b", "An image tag needs a source, written as s-r-c, which is the file name in quotes. Then alt text describing the picture, and usually a width and a height."],
            ["a", "If the file is in your repository, the source is just its name, plus the folder if it's in one. If it's on another site, the source is the full address starting with https."],
            ["q", "Let's narrow in. You see a broken-image icon. What's your first move?"],
            ["a", "Open the repository's file list right next to the code, and compare the name letter by letter."],
            ["b", "The classic mistake is capital letters. On GitHub Pages, a capital S and a lowercase s are different, so Sunset dot jpg and sunset dot jpg are two different files."],
            ["a", "Then check the extension. J-P-G, J-P-E-G and P-N-G are not interchangeable. And check the folder: if the image lives in an images folder, the source has to include it."],
            ["b", "And quotes. Every value needs an opening and a closing quote mark."],
            ["q", "Now jump links. How does a picture jump to a section?"],
            ["b", "There are two halves. At the destination, you put an empty anchor with an i-d, a name, like cooking-video."],
            ["a", "Then you wrap the picture in a link whose h-ref is a hash sign followed by that same name. Click the picture, and the page scrolls to the name."],
            ["q", "And when clicking does nothing?"],
            ["a", "Compare the name after the hash with the i-d, letter for letter. A capital letter, a missing hyphen, or a small spelling difference is enough to break it."],
            ["b", "Two more checks. The hash goes only in the link, never in the i-d itself. And the image has to sit inside the link, between the opening and closing a tags."],
            ["a", "So for images, compare the file name. For jump links, compare the two names. Most of debugging is careful comparing."],
        ],
        prompts: [
            "What three things would you compare when an image is broken?",
            "Explain the two halves of a jump link in your own words.",
            "Why does a capital letter break a file name on GitHub Pages?",
        ],
    },
    {
        id: "video",
        title: "YouTube videos: watch links vs embed links",
        tag: "Video",
        question: "Why does one YouTube video play inside a page while another refuses to load?",
        lines: [
            ["a", "This episode is about one specific problem that trips up almost everyone: the YouTube video that won't play inside your page."],
            ["b", "And the fix is usually just a few letters."],
            ["q", "Broad question first. How does a YouTube video get onto a page at all?"],
            ["b", "With an iframe. An iframe is a box that holds a whole other web page. Inside it, YouTube runs its own video player."],
            ["a", "And you almost never write it by hand. On YouTube you click Share, then Embed, and YouTube gives you the code to copy."],
            ["q", "So what goes wrong?"],
            ["b", "YouTube has two kinds of links. The one in your browser's address bar is a watch link. It ends in watch, question mark, v, equals, and then the video's ID."],
            ["a", "That link is for watching on YouTube itself. YouTube won't show that full page inside someone else's site."],
            ["b", "What the iframe needs is the embed link: youtube dot com slash embed slash, then the same ID."],
            ["q", "Let's narrow further. How do you spot this in the pencil editor?"],
            ["a", "Find a video on the page that works, and compare its source with the broken one. Usually you'll see embed in one and watch in the other."],
            ["b", "Then copy the ID, the eleven characters after v equals, and rebuild the address with embed. Shorts work the same way: slash shorts slash becomes slash embed slash."],
            ["a", "Same for short youtu dot be links. They need to become embed links too."],
            ["q", "And if you fix all that and it still says video unavailable?"],
            ["b", "Then it's probably not your code. Some owners block embedding. That's the embedded-content lesson again: YouTube controls that box."],
            ["a", "The fix there is to pick a different video, not to keep changing your code."],
            ["b", "So: watch links are for YouTube, embed links are for your page. Compare with a working video, swap in embed, and keep the ID exact."],
        ],
        prompts: [
            "What's the difference between a watch link and an embed link?",
            "How would you turn a Shorts link into an embed link?",
            "How can you tell a code problem from a blocked video?",
        ],
    },
    {
        id: "maps",
        title: "Maps and dashboards",
        tag: "Map & dashboard",
        question: "How do you embed an interactive map or chart, and what goes wrong when you paste it?",
        lines: [
            ["a", "Today we're looking at interactive embeds: maps and dashboards. These are the ones that turn a page into a tool."],
            ["b", "And the good news is, you don't write this code. Google or the chart site writes it for you."],
            ["q", "Broad question. How do you get a Google Map onto a page?"],
            ["b", "Search for a place on Google Maps, click Share, then the Embed a map tab, then Copy HTML. You get a full iframe, start to finish."],
            ["a", "For a chart from Our World in Data, it's similar. Open the chart, click Share, then Embed, and copy the code. Use the archived version so it keeps working."],
            ["b", "Then you paste the whole thing into the section where it belongs, and change the heading so visitors know what they're looking at."],
            ["q", "What makes these different from an image?"],
            ["a", "Visitors can use them. They can zoom, drag, or hover to see numbers. And none of that is saved. Each person changes only their own view."],
            ["b", "And it all runs on Google's or the chart site's servers. Your page is just holding the window open."],
            ["q", "Let's narrow in on errors. What usually goes wrong?"],
            ["a", "The biggest one is pasting the wrong thing. If you copy the address from the browser bar, you get a plain link, not a map. Real embed code starts with the word iframe in angle brackets."],
            ["b", "The second is a partial paste. If the closing iframe tag is missing, the browser treats everything after it as part of the iframe, and the rest of your page seems to vanish."],
            ["a", "Same with a missing quote mark. One missing quote can make the browser misread the whole tag."],
            ["b", "And watch for duplicate attributes. Sometimes a tag ends up with two widths. The browser only uses the first one, so the size won't be what you expect."],
            ["q", "So what's the habit to build?"],
            ["a", "Copy the whole embed code, every time, and check that it starts with an opening iframe tag and ends with a closing one."],
            ["b", "Then test it live. Zoom the map, hover the chart. If you can interact with it, it's working."],
        ],
        prompts: [
            "Where do you get the embed code for a Google Map?",
            "What happens if the closing iframe tag is missing?",
            "Why is a map an interactive embed rather than a static one?",
        ],
    },
    {
        id: "debugging",
        title: "Debugging in the pencil editor",
        tag: "Finding errors",
        question: "What's a reliable process for finding what's broken in someone else's code?",
        lines: [
            ["a", "This episode isn't about one kind of embed. It's about the process of fixing a page when you don't know what's wrong yet."],
            ["b", "Which is exactly what the HTML-2 assignment asks you to do."],
            ["q", "Broad question. Where do you even start?"],
            ["b", "Start with the live page, not the code. Click every picture, play every video, press every button. Make a list of exactly what doesn't work."],
            ["a", "That turns a vague problem, the page is broken, into specific ones: this image is missing, this link doesn't jump, this video won't play."],
            ["q", "Then what?"],
            ["a", "Open the file with the pencil editor and find the section for the first problem. Good pages have comments labeling each section, so read those."],
            ["b", "Then find a version that works. Most pages have one section that's correct. Use it as a model and compare the broken section against it, line by line."],
            ["q", "Let's narrow that. What are you comparing?"],
            ["a", "Names, mostly. File names against the file list. Link names after the hash sign against the i-d. Function names in a button against the function in the script."],
            ["b", "Then addresses. Is this a watch link or an embed link? Does the source start with https when it should?"],
            ["a", "Then punctuation. Matching quote marks, matching opening and closing tags."],
            ["q", "Any habits that make this easier?"],
            ["b", "Fix one thing at a time, and commit with a clear message, like fixed body image file name. If something new breaks, you know what caused it."],
            ["a", "And remember GitHub Pages takes a minute or two to update. Wait, then refresh before deciding a fix didn't work."],
            ["b", "So: test the live page, list the problems, compare against a working example, fix one thing, commit, and test again."],
        ],
        prompts: [
            "Describe the debugging process in your own words, step by step.",
            "Why compare a broken section to a working one?",
            "Why fix and commit one thing at a time?",
        ],
    },
    {
        id: "scripts",
        title: "A little code: the dark mode script",
        tag: "Script",
        question: "How does a small script like a dark mode button actually work?",
        lines: [
            ["a", "Our last topic is the built part of a page: a small script. Specifically, the dark mode button from HTML-2."],
            ["b", "It looks intimidating, but it's only five parts."],
            ["q", "Broad question first. What does the script do?"],
            ["b", "When you click the button, the page switches colors. The page turns one color and the embed block at the bottom turns the opposite one."],
            ["q", "Walk us through the five parts."],
            ["a", "Part one is two colors, called light color and dark color. Those are the only lines you're meant to change."],
            ["b", "Part two is a memory: a variable called dark that's either false, meaning light mode, or true, meaning dark mode."],
            ["a", "Part three is a function called paint. It colors the page with one color and the embed block with the other, depending on that memory."],
            ["b", "Part four is toggle dark. It runs every time you click. It flips the memory, then calls paint."],
            ["a", "And part five is one more call to paint at the very end, so the page is colored correctly when it first loads."],
            ["q", "Let's narrow in on errors. The button does nothing. What do you check?"],
            ["b", "First, the button's onclick. The name there has to match the function name exactly. Toggle dark with a capital D is not the same as all lowercase."],
            ["a", "Second, get element by i-d. The name in quotes has to match an i-d on the page. If the section is called embed-block with a hyphen, and the script asks for embedblock without one, nothing gets colored."],
            ["b", "Third, the colors themselves. They need quotes and a hash sign. And if both colors are the same, the button works but nothing visibly changes."],
            ["q", "Any advice for choosing colors?"],
            ["a", "Pick two that are far apart, one light and one dark, so text stays readable in both modes. And test both modes before you submit."],
            ["b", "So: names must match, colors must differ, and test by clicking twice."],
        ],
        prompts: [
            "Name the five parts of the dark mode script.",
            "What three things would you check if the button did nothing?",
            "Why does the script call paint() once at the end?",
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
//  TIMESTAMPS: browsers don't report how long speech takes, so each line's
//  length is estimated from its word count. The estimate then learns from
//  your voice: after each line, it compares the real time with the estimate
//  and adjusts ("pace"), so timestamps and 15-second skips stay accurate.
//  Skips and pauses can start partway through a line, at the right word.
// ======================================================================
const WPM = 160;            // starting guess: words per minute at 1x
const GAP = 0.5;            // pause between lines, seconds
let speed = +load("podcast-speed", 1) || 1;
let pace = +load("podcast-pace", 1) || 1;    // learned: real time / estimated time
let lineStartAt = 0;        // when the current line started (ms), adjusted for a word offset
let startWord = 0;          // word to start from in the line at "pos" (for skips and resumes)
let clockTimer = null;

function wordsOf(text) { return text.trim().split(/\s+/); }
function lineSecs(text) {
    return (wordsOf(text).length / WPM * 60 + GAP) * pace / speed;
}
function secsPerWord(i) {
    const t = current.lines[i][1];
    return lineSecs(t) / wordsOf(t).length;
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
    if (i >= current.lines.length) return st[i];
    if (playing && !lineDone) {
        const inLine = (performance.now() - lineStartAt) / 1000;
        return st[i] + Math.min(inLine, st[i + 1] - st[i]);
    }
    return st[i] + startWord * secsPerWord(i);
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

// Learn how fast this voice really talks, from a line that finished normally.
function learnPace(estimatedSecs, actualSecs) {
    if (estimatedSecs < 2 || actualSecs <= 0) return;           // too short to trust
    const ratio = actualSecs / estimatedSecs;
    if (ratio < 0.3 || ratio > 3) return;                        // ignore odd readings
    pace = Math.max(0.5, Math.min(2, pace * (0.6 + 0.4 * ratio)));
    save("podcast-pace", pace);
    refreshStamps();
}

function speakNext() {
    if (!playing || !current) return;
    if (pos >= current.lines.length) { finish(); return; }
    const i = pos;
    const l = current.lines[i];
    const words = wordsOf(l[1]);
    const offset = Math.min(startWord, words.length - 1);
    startWord = 0;
    const text = offset > 0 ? words.slice(offset).join(" ") : l[1];
    const spw = secsPerWord(i);
    const estimate = (words.length - offset) * spw;
    highlight(i);
    lineDone = false;
    const spokenFrom = performance.now();
    lineStartAt = spokenFrom - offset * spw * 1000;              // so the clock counts from the line's start
    startClock();
    sayLine(voiceFor(l[0]), text, function () {
        if (!playing || pos !== i) return;
        learnPace(estimate, (performance.now() - spokenFrom) / 1000 + GAP * pace / speed);
        lineDone = true;
        pos = i + 1;
        speakNext();
    });
}

function finish() {
    playing = false;
    paused = false;
    pos = 0;
    startWord = 0;
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

// Remember the word we were on, so resuming continues from (just before) there.
function holdPlace() {
    if (playing && !lineDone && pos < current.lines.length) {
        const inLine = (performance.now() - lineStartAt) / 1000;
        startWord = Math.max(0, Math.floor(inLine / secsPerWord(pos)) - 1);
        lineDone = true;
    }
}

function pauseNow() {
    if (!playing) return;
    holdPlace();
    playing = false;
    paused = true;
    cancelSpeech();
    stopClock();
    setControls();
}

// Jump to a line (and optionally a word in it). Keeps playing if it was playing.
function jumpTo(i, keepPaused, word) {
    if (!current || !synth) return;
    cancelSpeech();
    pos = Math.max(0, Math.min(i, current.lines.length - 1));
    startWord = word || 0;
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

// Skip by a number of seconds, landing on the nearest word.
function skip(seconds) {
    if (!current) return;
    const st = starts();
    const total = st[current.lines.length];
    const target = Math.max(0, elapsed() + seconds);
    if (target >= total - 0.5) { cancelSpeech(); finish(); return; }
    let i = 0;
    while (i < current.lines.length - 1 && st[i + 1] <= target) i++;
    let word = Math.floor((target - st[i]) / secsPerWord(i));
    if (word < 2) word = 0;                                     // close to the start: start the line cleanly
    jumpTo(i, !playing, word);
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
    const wasSpeaking = playing && !lineDone;
    if (wasSpeaking) holdPlace();                    // note the word we're on, at the old speed
    speed = +speedSel.value;
    save("podcast-speed", speed);
    refreshStamps();
    if (wasSpeaking) { cancelSpeech(); speakNext(); }   // continue from that word at the new speed
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
