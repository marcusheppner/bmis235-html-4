/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Podcast page: episode scripts, read-aloud with two voices, and voice/written responses.
  To add an episode, copy one object in the EPISODES list and edit it.
*/

// Format (like a seminar podcast): the host, Vera, asks a broad question ("q"),
// then narrower follow-ups ("q" again). Vera ("a") and her guest Theo ("b") both
// answer and build on each other. Every quote is checked against the 1925 text.
const EPISODES = [
    {
        id: "proportion-long",
        title: "Diagnosis as judgment: Bradshaw's \"proportion\"",
        tag: "Proportion & normality",
        question: "What does Sir William Bradshaw mean by a \"sense of proportion,\" and what does that idea do to the people he treats?",
        lines: [
            ["a", "Welcome back. Today we're looking at one small word that carries a lot of weight in this novel: proportion. Theo, thanks for joining me."],
            ["b", "Glad to be here. It's a word that sounds harmless until you notice how often it shows up, and who uses it."],
            ["q", "Let's start broad. What does Sir William Bradshaw actually mean by a sense of proportion?"],
            ["a", "On the surface, it sounds sensible. Proportion means balance. Not too much feeling, not too much work, rest, good food. Bradshaw's prescription for Septimus is basically a schedule for being balanced."],
            ["b", "But Woolf gives us his definition directly. Sir William said he never spoke of madness; he called it not having a sense of proportion. So proportion isn't the treatment. It's the diagnosis. Being ill means being out of proportion."],
            ["a", "And that's a strange thing for a diagnosis to be, because it doesn't describe a disease. It describes a way of behaving."],
            ["b", "Right. Balance, restraint, self-control, knowing your place. Those are social virtues. They're what a respectable Englishman in 1923 is supposed to have."],
            ["q", "Let me narrow that down. Why would Bradshaw avoid the word madness? Is that kindness, or something else?"],
            ["b", "I want to give him a little credit here. Madness was a brutal label in the 1920s. Avoiding it could be a way of sparing patients the stigma."],
            ["a", "I agree it sounds gentler. But think about what the new word changes. If you're mad, something has happened to you. If you lack proportion, it's something you've failed to do."],
            ["b", "So the responsibility moves onto the patient."],
            ["a", "Exactly. And once the problem is a failure, the cure becomes correction. Rest, isolation, separation from his wife until he learns the norm again. Listen to how he puts it: We have been arranging that you should go into a home."],
            ["b", "That word we is chilling when you read it aloud. It's collective and impersonal. The decision has been made about Septimus, not with him, and you can't really argue with a we."],
            ["q", "Let's widen out. The narrator calls proportion Sir William's goddess. Why turn it into a religion?"],
            ["b", "Because a goddess can't be questioned. If proportion is divine, then someone who lacks it isn't just unwell. They're almost a heretic."],
            ["a", "And the passage keeps going. Worshipping proportion, Sir William not only prospered himself but made England prosper. His personal success and the nation's success are tied together."],
            ["b", "Which tells you who proportion really serves. Not Septimus. England. And then there's the list of what it does: secluded her lunatics, forbade childbirth, penalised despair."],
            ["a", "Forbade childbirth points straight at eugenics, which was respectable opinion at the time. Woolf puts it in the hands of the most respected doctor in London, not a villain on the margins."],
            ["b", "That's what makes it unsettling. It's not one bad doctor. It's an ideal the whole society shares."],
            ["q", "One more, aimed at an essay. If you were building an argument around this word, where would you start?"],
            ["a", "I'd start with the rename, from madness to proportion, and argue that it turns illness into a moral failing, so that medicine's job becomes correcting people back toward a social norm."],
            ["b", "And I'd complicate it. Bradshaw does see that Septimus is seriously ill, unlike Holmes. So the problem isn't that he misses the illness. It's that he never listens. Later that day Septimus asks himself: What power had Bradshaw over him? I'd build my conclusion around that question."],
            ["a", "Power, not health. That's a good place to stop. Your turn: tell us where you land."],
        ],
        prompts: [
            "Is \"proportion\" a medical idea, a moral one, or a class one? Point to one line.",
            "Does avoiding the word \"madness\" protect Septimus or trap him?",
            "Draft a one-sentence thesis built around the word \"proportion.\"",
        ],
    },
    {
        id: "holmes-long",
        title: "Holmes, denial, and the soldier's code",
        tag: "Denial & masculinity",
        question: "How does Dr. Holmes's insistence that nothing is wrong enforce the same ideals of manhood that helped break Septimus?",
        lines: [
            ["a", "Today's guest is Theo again, and our subject is the other doctor, the one who's easy to overlook: Dr. Holmes."],
            ["b", "The cheerful one. Which is exactly why he's worth slowing down for."],
            ["q", "Broad question first. Who is Dr. Holmes, and what does he think is wrong with Septimus?"],
            ["b", "Holmes is a general practitioner, the everyday family doctor. And his answer is simple: nothing. There was nothing whatever the matter, said Dr. Holmes."],
            ["a", "And he says it more than once. He tells Septimus to take up hobbies, get outdoors, eat properly. Even Rezia repeats his advice to herself, that her husband should take an interest in things outside himself."],
            ["b", "My favorite line of his is the most revealing one: health is largely a matter in our own control."],
            ["a", "That line sounds like encouragement. But it carries a judgment inside it."],
            ["q", "Let's refine that. Why might Holmes's denial be just as controlling as Bradshaw's confinement?"],
            ["a", "Because if health is in your control, then staying sick is a choice. Denial doesn't leave the patient alone. It tells him his suffering is his own fault."],
            ["b", "And it keeps him in the system. Holmes keeps coming back, keeps visiting, and in the end he pushes past Rezia on the stairs. Denying the illness doesn't mean stepping away from the patient. It means managing him."],
            ["a", "So Bradshaw controls by taking Septimus away, and Holmes controls by refusing to believe him. Two methods, same outcome."],
            ["q", "Now let's connect this to the war. Where does this idea of self-control come from?"],
            ["b", "From the army, at least partly. Look at how Septimus reacted when his friend Evans was killed. He congratulated himself upon feeling very little and very reasonably."],
            ["a", "That's the ideal soldier, isn't it? Calm, controlled, unshaken. And for a while Septimus is proud of it."],
            ["b", "Until the numbness becomes the illness itself. What the army praised as manly control turns out to be the damage."],
            ["a", "And Holmes reinforces it. His medicine says: be a man, pull yourself together. It's the same code that broke Septimus, now delivered as a prescription."],
            ["b", "Which is why his final word matters so much. When Septimus dies, Holmes shouts: The coward!"],
            ["a", "Coward is a moral word, not a medical one. It's exactly what shell-shocked soldiers were called during the war."],
            ["q", "Last one. How does Septimus himself understand the doctors?"],
            ["b", "He sees them as agents of something bigger. Once you fall, Septimus repeated to himself, human nature is on you. Holmes and Bradshaw are on you."],
            ["a", "And just before that: The verdict of human nature on such a wretch was death. That's a terrifying sentence, and it turns out to be accurate."],
            ["b", "So you could argue Septimus's paranoia is also a correct reading of his situation. The doctors really are enforcing a social verdict."],
            ["a", "That's a strong essay move: treat the patient's view as evidence, not just as a symptom. Over to you."],
        ],
        prompts: [
            "Is Holmes more or less dangerous than Bradshaw? Defend your answer with a quote.",
            "How does \"The coward!\" connect medicine to wartime ideals of manhood?",
            "Can Septimus's view of the doctors count as evidence in your argument?",
        ],
    },
    {
        id: "england-long",
        title: "Medicine for whom? The doctor at the party",
        tag: "Class & medical authority",
        question: "What does it mean that Sir William Bradshaw is a welcome guest at Clarissa's party, among the people who run the country?",
        lines: [
            ["a", "Today we move from the consulting room to the drawing room. Theo, why does it matter where a doctor shows up in this novel?"],
            ["b", "Because Woolf puts Bradshaw in two places: his office in Harley Street, and Clarissa's party. And those two rooms turn out to be connected."],
            ["q", "Broad question. Where do we see medicine and the ruling class overlap?"],
            ["a", "Most clearly at the end. The Bradshaws arrive late to the party, where the Prime Minister is a guest. Lady Bradshaw apologizes: We are shockingly late, dear Mrs. Dalloway, we hardly dared to come in."],
            ["b", "Perfect manners, from a woman who's about to mention a young man's suicide as party news."],
            ["a", "And Sir William is talking politics with Richard Dalloway, who's a Member of Parliament. They're discussing a Bill about, in the narrator's words, the deferred effects of shell shock."],
            ["b", "So the doctor who mishandled Septimus that morning is helping shape the law about men like him that evening."],
            ["q", "Let's sit with that. What does it mean that Bradshaw is working on legislation?"],
            ["a", "It means his idea of proportion isn't staying in one office. It's becoming policy. His judgment about who's balanced and who isn't is being written into how the country treats veterans."],
            ["b", "And notice the language: deferred effects. It's abstract, bureaucratic. The suffering man becomes a category in a Bill."],
            ["a", "Woolf said in her diary that she wanted to criticise the social system and show it at work. This is it at work: the medical expert and the politician, in evening dress, deciding things."],
            ["q", "How do the other characters see this system? Do they notice anything wrong?"],
            ["b", "Mostly, no. My favorite example is Peter Walsh. He hears an ambulance bell in the street and thinks how efficient London is. One of the triumphs of civilisation, Peter Walsh thought."],
            ["a", "And the reader knows the ambulance is carrying Septimus."],
            ["b", "That's the irony. From the outside, the system looks humane and modern. Peter isn't cruel. He just can't see who's paying for that efficiency."],
            ["a", "Which might be the point about class. The system works beautifully for people like Peter and the Dalloways."],
            ["q", "Last question. Does anyone at the party see Bradshaw clearly?"],
            ["b", "Clarissa does, at least for a moment. She thinks of him as a great doctor yet to her obscurely evil."],
            ["a", "And then she sharpens it. She imagines him capable of some indescribable outrage, forcing your soul, that was it."],
            ["b", "Forcing your soul. That's her name for what medicine does at its worst. Not a physical injury, a violation of the self."],
            ["a", "But she still goes back to being his hostess. So an essay could argue that the novel shows how a society can recognize what its institutions do, and still keep them in place. Your turn."],
        ],
        prompts: [
            "What does Bradshaw's presence at the party add to the novel's critique of medicine?",
            "Who benefits from the system Peter calls \"one of the triumphs of civilisation\"?",
            "Clarissa sees Bradshaw clearly but keeps hosting him. What does that suggest?",
        ],
    },
    {
        id: "death-long",
        title: "Symptom or refusal? Septimus's death",
        tag: "Death as resistance",
        question: "Does the novel present Septimus's death as the result of his illness, or as a refusal of medical control?",
        lines: [
            ["a", "This is the hardest topic we'll cover, so we'll go carefully. Theo, why is Septimus's death so central to the medical reading of the novel?"],
            ["b", "Because it's where the doctors' treatment ends. Everything we've discussed, proportion, denial, the plan to send him away, leads to that window."],
            ["q", "Start broad. How does Woolf present the moment itself?"],
            ["a", "What surprises most readers is that he doesn't want to die. Woolf is explicit: He did not want to die. Life was good. The sun hot."],
            ["b", "Those are short, simple sentences. Almost childlike. He loves being alive in that moment."],
            ["a", "And then: Only human beings. The thing he can't bear isn't life. It's people, and specifically the people coming up the stairs."],
            ["b", "Holmes is on his way to take him to the home. The timing matters. He jumps at the moment of being taken."],
            ["q", "Let's look closer at the last words. What do they tell us?"],
            ["b", "His last words are: I'll give it you! They're thrown at Holmes."],
            ["a", "It doesn't sound like despair. It sounds like defiance, almost sarcasm. As if to say, you want me? Here."],
            ["b", "And Holmes answers with: The coward! So the scene ends with the doctor passing a moral verdict on a dead man."],
            ["a", "Which is why many readers see the death as a refusal. The one thing Septimus still controls is whether they get to take him."],
            ["q", "How does Clarissa read the death, hours later at her party?"],
            ["b", "She goes into a small room alone and thinks: Death was defiance. Death was an attempt to communicate."],
            ["a", "She also imagines him thinking, about doctors like Bradshaw: they make life intolerable, men like that."],
            ["b", "And then the line that troubles a lot of students: She felt glad that he had done it; thrown it away."],
            ["a", "That's uncomfortable, and it should be. She's turning a stranger's death into her own moment of understanding."],
            ["q", "So how do you write about this without romanticizing it?"],
            ["b", "I'd say: don't claim the novel celebrates suicide. It doesn't. Septimus is genuinely ill and suffering."],
            ["a", "Agreed. The stronger claim is that the novel holds both things at once. He is ill, and the treatment he's offered makes a life with his illness unlivable. The death is shaped by the medical system, not just by his mind."],
            ["b", "And Clarissa's gladness can be your evidence that even the comfortable characters sense something is wrong, even if they turn it into something about themselves."],
            ["a", "That's a careful, defensible argument. Over to you."],
        ],
        prompts: [
            "What evidence in the window scene supports reading the death as refusal?",
            "How can your essay make this argument without romanticizing suicide?",
            "Does Clarissa's reaction strengthen or weaken the case against the doctors?",
        ],
    },
    {
        id: "women-long",
        title: "\"Gone under\": women and quieter control",
        tag: "Gender",
        question: "Does the pressure to be \"normal\" work differently, and more invisibly, on the women in the novel?",
        lines: [
            ["a", "Most of our episodes have focused on Septimus. Today, Theo, I want to ask whether the same pressures reach the women in the book, even when they aren't patients."],
            ["b", "They do, and that's one of the subtler things Woolf is doing."],
            ["q", "Broad question. Who else, besides Septimus, has been shaped by Bradshaw's ideas?"],
            ["b", "His own wife. In the middle of the Proportion passage, the narrator mentions Lady Bradshaw almost in passing: Fifteen years ago she had gone under."],
            ["a", "Gone under is such a vivid phrase. Like drowning."],
            ["b", "And it's tied to Proportion's sister, Conversion. Woolf writes: Conversion is her name and she feasts on the wills of the weakly. Lady Bradshaw's will has been absorbed into her husband's."],
            ["a", "So conversion doesn't only happen to patients. It can happen inside a marriage, to someone who's perfectly healthy."],
            ["q", "Let's narrow to Clarissa. Is she also, in a quieter way, a patient?"],
            ["a", "I think so. She's recovering from an illness that affected her heart. She's moved up to an attic room and sleeps alone. Woolf writes: Narrower and narrower would her bed be."],
            ["b", "And the way she goes upstairs: Like a nun withdrawing, or a child exploring a tower, she went upstairs. Withdrawal is presented as almost a virtue."],
            ["a", "Nobody questions this arrangement, least of all Clarissa. That's what makes it the respectable version of what's done to Septimus."],
            ["b", "I'd push back a little, though. Clarissa isn't oppressed the way Septimus is. She's wealthy, she runs her household, she throws the party."],
            ["a", "That's fair. Maybe the point is that the respectable version of control doesn't look like control at all."],
            ["q", "Is the urge to convert others only a medical problem in this book?"],
            ["b", "No, and Miss Kilman shows that. She's a religious tutor who wants to take possession of Elizabeth's soul. Her resentment of Clarissa is physical: If she could have felled her it would have eased her."],
            ["a", "And Clarissa groups the two forces together: Love and religion! thought Clarissa. Both, for her, are ways of taking over another person."],
            ["b", "So Woolf seems to see conversion everywhere. Medicine is one powerful version of a much wider habit."],
            ["q", "Finally, what about Woolf herself?"],
            ["a", "Woolf was given rest cures: isolation, bed rest, no writing. That treatment was given especially to women considered nervous. It's worth comparing to Charlotte Perkins Gilman's story The Yellow Wallpaper, which is about the same cure from a woman's point of view."],
            ["b", "Just be careful not to make the novel pure autobiography. Woolf turned her experience into an argument about institutions, not just a record of what happened to her."],
            ["a", "Good caution. Your turn: where do the women fit in your argument?"],
        ],
        prompts: [
            "Is Lady Bradshaw a victim of Conversion, an accomplice, or both?",
            "Is it fair to call Clarissa's convalescence a form of control? Why or why not?",
            "How does Miss Kilman widen the novel's critique beyond medicine?",
        ],
    },
    {
        id: "care-long",
        title: "Care vs. cure: Rezia and the hat",
        tag: "Care vs. cure",
        question: "If the doctors offer control, what does the novel suggest real care might look like?",
        lines: [
            ["a", "We've spent a lot of time on what the doctors get wrong. Today, Theo, I want to ask what the novel thinks would be right."],
            ["b", "That's a harder question, and I think the answer is mostly in Rezia, and in one small scene with a hat."],
            ["q", "Broad question first. What is Rezia's role in Septimus's treatment?"],
            ["b", "She's the one who does the daily work of caring for him. But the doctors treat her like an assistant whose job is to carry out their instructions."],
            ["a", "You can hear the doctor in her head. Dr. Holmes had told her to make her husband, who had nothing whatever seriously the matter with him but was a little out of sorts, take an interest in things outside himself."],
            ["b", "And she's also carrying the social shame. On Bond Street her first fear is: People must notice; people must see."],
            ["a", "So she's caught. She's caring for him, enforcing the doctor's orders, and worrying about what people think, all at once."],
            ["q", "Let's narrow in. Who takes care of Rezia?"],
            ["b", "No one. That's the painful part. In the park she walks off and cries: I am alone; I am alone!"],
            ["a", "She's far from home, she's young, and nobody in authority asks how she is. The caregiver is invisible to the medical system."],
            ["b", "Which is a point a disability reading can make: when a system focuses only on fixing the patient, it ignores the people and relationships that actually sustain him."],
            ["q", "Now the hat scene. What happens there, and why does it matter?"],
            ["a", "Late in the afternoon, Rezia is trimming a hat for a client, and Septimus starts helping. He jokes, he makes suggestions, and for a while he's clear and happy."],
            ["b", "Woolf writes: Never had he done anything which made him feel so proud."],
            ["a", "There's no doctor, no diagnosis, no instructions. Just two people doing something together, with Septimus treated as a person who can contribute."],
            ["b", "And the tragedy is that the doctors' cure is to separate him from her, the one relationship that's actually helping."],
            ["q", "Last question. Does Septimus have something to offer, not just something wrong with him?"],
            ["a", "The novel suggests he does. His messages are strange, but some of them are morally serious. Men must not cut down trees. There is a God. Or: No one kills from hatred."],
            ["b", "No one kills from hatred is a remarkable thing for a veteran to say. It suggests the war's violence came from obedience, from people doing what they were told."],
            ["a", "Which is exactly what the doctors demand of him: obedience. So the social model of disability fits here. The problem isn't only Septimus. It's a society that only knows how to correct him."],
            ["b", "And the hat scene is a glimpse of the alternative: care that accepts him as he is. Over to you."],
        ],
        prompts: [
            "What does the hat scene suggest care could look like, compared with the doctors' cure?",
            "How does the medical system turn Rezia from caregiver into enforcer?",
            "Using the social model of disability, what would accommodating Septimus have meant?",
        ],
    },
];

const HOSTS = { a: "Vera (host)", b: "Theo (guest)", q: "Question" };
function voiceFor(role) { return role === "b" ? "b" : "a"; }   // the host asks the questions

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
    ep.lines.forEach(function (l, i) {
        const div = document.createElement("div");
        div.className = "line " + l[0];
        div.id = "line-" + i;
        div.innerHTML = '<div class="speaker">' + HOSTS[l[0]] +
            ' <button type="button" class="stamp-btn" title="Play from here"></button></div>' + l[1] +
            '<div><button type="button" class="respond-link">&#8627; Respond here</button></div>';
        div.querySelector(".stamp-btn").addEventListener("click", function () { jumpTo(i, false); });
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
    closeOpenComposer();
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
    interjectBtn.disabled = !playing;
    document.getElementById("back15").disabled = !has;
    document.getElementById("fwd15").disabled = !has;
}

playBtn.addEventListener("click", function () {
    if (!current || !synth) return;
    if (playing) { pauseNow(); return; }
    closeOpenComposer();
    paused = false;
    playing = true;
    setControls();
    speakNext();
});
stopBtn.addEventListener("click", function () { closeOpenComposer(); pos = 0; lineDone = true; stopAll(); });
interjectBtn.addEventListener("click", function () {
    // Attach to the line being spoken (or the one that just finished).
    const at = lineDone ? Math.max(0, pos - 1) : pos;
    interject(at, true);
});
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
        cancelSpeech();
        stopClock();
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
