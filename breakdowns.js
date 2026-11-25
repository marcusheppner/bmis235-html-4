/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Scene and monologue breakdowns on medicine and social norms.
  scenes.html lists them; breakdown.html?id=scene-05 shows one.

  The approach: help with READING (what happens, what a sentence literally says)
  and point toward things to notice, but leave the interpreting to you.

  Each entry:
    kind        "scene" or "mono"
    part        morning | midday | afternoon | evening
    title, who, where, summary (one line for the list)
    happens     what happens (plain English, no interpretation)
    notice      things to look at closely (pointers, not conclusions)
    angle       an open question
    themes      tags
    quotes      [ quote, in plain English ]  (quotes checked against the 1925 Harcourt text)
    links       related ids
*/

const BREAKDOWNS = {

/* ============================ MORNING ============================ */

"scene-01": {
    kind: "scene", part: "morning",
    title: "First sight of Septimus on Bond Street",
    who: "Septimus, Rezia, the crowd", where: "Bond Street, morning",
    summary: "A car backfires; a crowd gathers; we meet Septimus and Rezia for the first time.",
    happens: [
        "A car backfires in Bond Street. A crowd gathers and guesses which important person is inside, since the blinds are down. Among them is Septimus Warren Smith, a young veteran. The noise and the crowd terrify him: the world seems to shake and threaten to burst into flames, and he thinks he is the one blocking the way.",
        "His wife Rezia is embarrassed and frightened, and wants to get him away before anyone notices.",
    ],
    notice: [
        "How Septimus is first described: from the outside, like a description of a stranger.",
        "What Rezia worries about first, and what that worry is about.",
        "The difference between the crowd's interest in the hidden passenger and its interest in Septimus.",
    ],
    angle: "Is there pressure on Septimus and Rezia before any doctor appears? Where does it come from?",
    themes: ["Visibility & shame", "Shell shock & masculinity"],
    quotes: [
        ["Septimus Warren Smith, aged about thirty, pale-faced, beak-nosed",
         "A plain physical description: he's around thirty, pale, with a nose like a beak."],
        ["It is I who am blocking the way, he thought.",
         "He thinks he personally is causing the traffic jam."],
        ["People must notice; people must see.",
         "Rezia's thought: people are bound to notice something is wrong with him."],
    ],
    links: ["scene-02", "mono-01"],
},

"scene-02": {
    kind: "scene", part: "morning",
    title: "The skywriting airplane & Dr. Holmes's advice",
    who: "Septimus, Rezia", where: "The Mall and Regent's Park, morning",
    summary: "A plane writes an advert in smoke; Septimus thinks it is signalling to him; Rezia remembers the doctor's advice.",
    happens: [
        "A plane writes an advertisement in smoke over London and the crowd tries to read the letters. Septimus believes the letters are signals meant for him and is overwhelmed by how beautiful everything is.",
        "Rezia keeps urging him to look at things, because Dr. Holmes told her to get him interested in things outside himself.",
    ],
    notice: [
        "The words inside the parentheses in the Holmes quote. Whose words are they, and whose thoughts are they in?",
        "What Septimus sees in the sky compared with what everyone else sees.",
        "How Rezia's role is described: wife, nurse, or something else?",
    ],
    angle: "What does Dr. Holmes's advice reveal about how he understands Septimus's condition?",
    themes: ["Denial (Holmes)", "Care vs. cure"],
    quotes: [
        ["So, thought Septimus, looking up, they are signalling to me.",
         "Looking at the sky, Septimus decides the letters are a message sent to him."],
        ["Dr. Holmes had told her to make her husband (who had nothing whatever seriously the matter with him but was a little out of sorts) take an interest in things outside himself.",
         "Holmes told Rezia to get Septimus interested in the world around him; Holmes thinks nothing is really wrong, just that he's a bit off."],
    ],
    links: ["scene-01", "scene-04"],
},

"scene-03": {
    kind: "scene", part: "morning",
    title: "Clarissa's attic room",
    who: "Clarissa", where: "Her house, late morning",
    summary: "Back home, Clarissa goes up to the attic room where she has slept alone since her illness.",
    happens: [
        "Clarissa comes home and goes upstairs to the attic room where she has slept alone since an illness that affected her heart. She thinks about her coldness, her marriage to Richard, and getting older.",
        "Her mind turns to Sally Seton and a kiss at Bourton, her family's country house, which she remembers as the best moment of her life.",
    ],
    notice: [
        "The images used for Clarissa going upstairs.",
        "How her bed is described, and how that description changes.",
        "Whether anyone in the novel questions this sleeping arrangement.",
    ],
    angle: "How is Clarissa's illness managed, and how does that compare with Septimus's?",
    themes: ["Clarissa's illness", "Rest cure & isolation", "Gender"],
    quotes: [
        ["Like a nun withdrawing, or a child exploring a tower, she went upstairs",
         "She goes up the stairs like a nun retreating from the world, or like a child exploring a tower."],
        ["Narrower and narrower would her bed be.",
         "Her bed will keep getting narrower."],
        ["there was an emptiness about the heart of life; an attic room.",
         "There's something empty at the center of her life, like an attic room."],
    ],
    links: ["scene-11", "mono-07"],
},

/* ============================ MIDDAY ============================ */

"scene-04": {
    kind: "scene", part: "midday",
    title: "Septimus and Rezia in Regent's Park",
    who: "Septimus, Rezia", where: "Regent's Park, before noon",
    summary: "Waiting for the specialist, Septimus has visions and writes messages; Rezia walks off alone.",
    happens: [
        "Septimus and Rezia sit in Regent's Park before their noon appointment with Sir William Bradshaw. Septimus sees his dead friend Evans, hears birds sing in Greek, and writes down messages he thinks the world needs.",
        "Rezia, exhausted and homesick for Italy, walks away to the fountain and cries out that she is alone.",
    ],
    notice: [
        "What Septimus's messages are about.",
        "How Woolf writes his visions: the rhythm and the images.",
        "What Rezia thinks about while she is apart from him.",
    ],
    angle: "How does the novel present Septimus's visions, and how does that affect how you see the doctors?",
    themes: ["The patient's view", "Care vs. cure"],
    quotes: [
        ["Men must not cut down trees. There is a God.",
         "Two of Septimus's 'messages': people shouldn't cut down trees, and God exists."],
        ["I am alone; I am alone!",
         "Rezia's cry that she is on her own."],
    ],
    links: ["mono-01", "mono-06", "scene-05"],
},

"scene-05": {
    kind: "scene", part: "midday",
    title: "Septimus's history: the war and Dr. Holmes",
    who: "Septimus (narrated history), Dr. Holmes", where: "Flashback",
    summary: "Septimus's war, Evans's death, the numbness that followed, and Dr. Holmes's visits.",
    happens: [
        "Septimus volunteered early for the war and was praised as a soldier. When his close friend Evans was killed, he felt almost nothing, and was at first pleased with himself for that.",
        "After marrying Rezia and returning to London, he breaks down. Dr. Holmes visits repeatedly, says nothing is wrong, and recommends hobbies, outside interests and willpower.",
    ],
    notice: [
        "How Septimus reacts to Evans's death, and how he feels about his reaction.",
        "What Holmes recommends, and what that implies about the cause of Septimus's illness.",
        "Where the idea of 'control' appears.",
    ],
    angle: "What connections, if any, can you find between what the army expected of Septimus and what Holmes expects of him?",
    themes: ["Shell shock & masculinity", "Denial (Holmes)"],
    quotes: [
        ["congratulated himself upon feeling very little and very reasonably.",
         "He was pleased with himself for feeling very little, and for staying calm and sensible."],
        ["There was nothing whatever the matter, said Dr. Holmes.",
         "Holmes says nothing at all is wrong with Septimus."],
        ["health is largely a matter in our own control.",
         "Holmes's view: being healthy is mostly up to us."],
    ],
    links: ["mono-02", "scene-06"],
},

"scene-06": {
    kind: "scene", part: "midday",
    title: "The appointment with Sir William Bradshaw",
    who: "Septimus, Rezia, Sir William Bradshaw", where: "Harley Street, noon",
    summary: "The specialist examines Septimus and arranges for him to go to a home in the country.",
    happens: [
        "At noon, the Smiths see Sir William Bradshaw. After a short examination he decides Septimus's case is serious and tells them arrangements have been made for him to go to a home in the country, away from Rezia, to rest.",
        "Rezia leaves feeling abandoned. Later that day, Septimus asks himself what power Bradshaw has over him.",
    ],
    notice: [
        "The word Bradshaw uses instead of 'madness.'",
        "The pronoun in \"We have been arranging.\" Who is included?",
        "How long the appointment lasts, and who does most of the talking.",
    ],
    angle: "What difference does it make that Bradshaw says \"proportion\" instead of \"madness\"?",
    themes: ["Proportion & normality", "Rest cure & isolation", "Class & medical authority"],
    quotes: [
        ["Sir William said he never spoke of \"madness\"; he called it not having a sense of proportion.",
         "Bradshaw never uses the word 'madness'; he calls it lacking a sense of proportion."],
        ["We have been arranging that you should go into a home",
         "'We' have already started organizing for you to go to a care home."],
    ],
    links: ["mono-03", "scene-05", "scene-11"],
},

/* ============================ AFTERNOON ============================ */

"scene-07": {
    kind: "scene", part: "afternoon",
    title: "Miss Kilman, Clarissa, and Elizabeth",
    who: "Miss Kilman, Clarissa, Elizabeth", where: "The Dalloways' house and the Army & Navy Stores",
    summary: "Elizabeth's religious tutor arrives; she and Clarissa dislike each other; Kilman takes Elizabeth shopping.",
    happens: [
        "Miss Kilman, Elizabeth's tutor, comes to take Elizabeth out. She and Clarissa dislike each other. Clarissa thinks about love and religion.",
        "At the Army & Navy Stores, Miss Kilman eats, tries to keep Elizabeth with her, and is left alone and humiliated when Elizabeth leaves.",
    ],
    notice: [
        "What Miss Kilman wants from Elizabeth.",
        "What Clarissa groups together with religion, and why.",
        "Any similarities between Kilman and the doctors.",
    ],
    angle: "Does anything in Kilman's behavior echo the medical scenes?",
    themes: ["Conversion & control"],
    quotes: [
        ["Love and religion! thought Clarissa",
         "Clarissa's exasperated thought about love and religion."],
        ["If she could have felled her it would have eased her.",
         "Kilman feels that knocking Clarissa down would have made her feel better."],
    ],
    links: ["mono-04", "mono-03"],
},

"scene-08": {
    kind: "scene", part: "afternoon",
    title: "Making the hat",
    who: "Septimus, Rezia", where: "Their lodgings, late afternoon",
    summary: "Septimus helps Rezia trim a hat; for a while they are calm and happy.",
    happens: [
        "At home, Rezia trims a hat for a client. Septimus begins helping, making suggestions and jokes. For a while he is clear-minded and they laugh together.",
        "Then Rezia remembers he will be taken away, and they promise that nothing will separate them.",
    ],
    notice: [
        "Who is present in this scene, and who is not.",
        "How Septimus behaves compared with the park and the appointment.",
        "What the couple promises each other.",
    ],
    angle: "What, if anything, does this scene suggest about what helps Septimus?",
    themes: ["Care vs. cure"],
    quotes: [
        ["Never had he done anything which made him feel so proud.",
         "Nothing he had ever done had made him feel so proud."],
    ],
    links: ["scene-09", "scene-04"],
},

/* ============================ EVENING ============================ */

"scene-09": {
    kind: "scene", part: "evening",
    title: "Holmes arrives; Septimus jumps",
    who: "Septimus, Rezia, Dr. Holmes", where: "Their lodgings, evening",
    summary: "Holmes comes to take Septimus away; Septimus jumps from the window.",
    happens: [
        "Waiting, Septimus asks himself why he \"must\" go and what power Bradshaw has over him. Dr. Holmes arrives to take him to the home. Rezia tries to stop him on the stairs.",
        "Septimus, alone in the room, jumps from the window onto the railings below and dies. Holmes calls him a coward. Rezia is given a sedative.",
    ],
    notice: [
        "The repeated word in Septimus's question.",
        "Septimus's last words: who are they addressed to?",
        "What kind of word \"coward\" is, and who uses it.",
    ],
    angle: "How does the scene present Septimus's death, and what details support different ways of reading it?",
    themes: ["Death as resistance", "Shell shock & masculinity", "Denial (Holmes)"],
    quotes: [
        ["\"Must,\" \"must,\" why \"must\"? What power had Bradshaw over him?",
         "Septimus asks why he has to do what he's told, and what gives Bradshaw that power."],
        ["I'll give it you!",
         "His last words, shouted as Holmes comes in: roughly, 'I'll give it to you!'"],
        ["The coward!",
         "Holmes's reaction to Septimus's death."],
    ],
    links: ["mono-05", "scene-10", "scene-12"],
},

"scene-10": {
    kind: "scene", part: "evening",
    title: "The ambulance",
    who: "Peter Walsh", where: "Near his hotel, evening",
    summary: "Peter hears an ambulance in the street and thinks about London's efficiency.",
    happens: [
        "Peter hears an ambulance bell and thinks how well organized and efficient London is. He doesn't know who is inside.",
    ],
    notice: [
        "What Peter knows and what the reader knows.",
        "The word \"civilisation.\"",
    ],
    angle: "What does the gap between Peter's knowledge and the reader's do in this passage?",
    themes: ["Class & medical authority", "Visibility & shame"],
    quotes: [
        ["One of the triumphs of civilisation, Peter Walsh thought.",
         "Peter thinks the ambulance is one of civilization's great achievements."],
    ],
    links: ["scene-09"],
},

"scene-11": {
    kind: "scene", part: "evening",
    title: "The Bradshaws at the party",
    who: "Clarissa, Sir William and Lady Bradshaw, Richard", where: "The Dalloways' party, night",
    summary: "The Bradshaws arrive late; Sir William talks politics; Lady Bradshaw mentions the suicide.",
    happens: [
        "The Bradshaws arrive late and Lady Bradshaw apologizes. Sir William talks with Richard Dalloway, a Member of Parliament, about a Bill concerning the deferred effects of shell shock.",
        "Lady Bradshaw tells Clarissa that a young man, one of Sir William's patients, has killed himself.",
    ],
    notice: [
        "Who else is at the party.",
        "What Sir William is discussing, and with whom.",
        "Clarissa's private reaction to Sir William.",
    ],
    angle: "Why might Woolf bring Bradshaw to Clarissa's party?",
    themes: ["Class & medical authority", "Shell shock & masculinity"],
    quotes: [
        ["We are shockingly late, dear Mrs. Dalloway, we hardly dared to come in",
         "Lady Bradshaw apologizes for arriving so late."],
        ["the deferred effects of shell shock",
         "The delayed effects of war trauma: the subject of the Bill."],
        ["a great doctor yet to her obscurely evil",
         "To Clarissa, he is a great doctor and yet, in a way she can't quite name, evil."],
    ],
    links: ["scene-12", "scene-06", "mono-03"],
},

"scene-12": {
    kind: "scene", part: "evening",
    title: "The little room",
    who: "Clarissa", where: "A small room off the party, night",
    summary: "Alone, Clarissa thinks about the young man's death and about Sir William.",
    happens: [
        "Clarissa goes into a small empty room. She imagines the young man's fall and thinks about what his death meant.",
        "She thinks about Sir William and imagines the young man's view of men like him. She feels a connection with the stranger, then goes back to her guests.",
    ],
    notice: [
        "The words Clarissa uses for death.",
        "What Clarissa imagines the young man thinking about doctors.",
        "What Clarissa does at the end of the scene.",
    ],
    angle: "How do you read Clarissa's response to the death?",
    themes: ["Death as resistance", "Conversion & control", "Proportion & normality"],
    quotes: [
        ["capable of some indescribable outrage—forcing your soul, that was it",
         "Clarissa senses Bradshaw could do something terrible that she can't describe: forcing your soul."],
        ["they make life intolerable, men like that",
         "Men like Bradshaw make life unbearable."],
        ["Death was defiance. Death was an attempt to communicate",
         "Clarissa thinks of death as an act of defiance and an attempt to reach others."],
        ["She felt somehow very like him",
         "In some way she can't explain, she feels very similar to him."],
    ],
    links: ["mono-07", "scene-11", "scene-09"],
},

/* ============================ MONOLOGUES ============================ */

"mono-01": {
    kind: "mono", part: "midday",
    title: "Septimus's messages",
    who: "Septimus", where: "Regent's Park",
    summary: "Inside Septimus's mind as he decides he must tell the world what he has learned.",
    happens: [
        "In the park, Septimus feels that everything is alive and connected and that he must tell the world. He writes his messages down while Rezia sits beside him.",
    ],
    notice: [
        "The content of each message.",
        "Which messages sound strange and which sound reasonable.",
    ],
    angle: "How do you read Septimus's messages: as symptoms, as insight, or as both?",
    themes: ["The patient's view"],
    quotes: [
        ["Men must not cut down trees. There is a God.",
         "People shouldn't cut down trees; God exists."],
        ["No one kills from hatred.",
         "People don't kill because they hate."],
    ],
    links: ["scene-04"],
},

"mono-06": {
    kind: "mono", part: "midday",
    title: "Rezia: \"I am alone\"",
    who: "Rezia", where: "By the fountain in Regent's Park",
    summary: "Rezia's thoughts as she walks away from Septimus, homesick and overwhelmed.",
    happens: [
        "Rezia walks away from Septimus to the fountain. She thinks about Italy and her sisters, how far she is from home, and cries out that she is alone.",
    ],
    notice: [
        "What Rezia remembers about home.",
        "Whether anyone hears or helps her.",
    ],
    angle: "What does Rezia's point of view add to the medical story?",
    themes: ["Care vs. cure"],
    quotes: [
        ["I am alone; I am alone!",
         "She is on her own."],
    ],
    links: ["scene-04"],
},

"mono-02": {
    kind: "mono", part: "midday",
    title: "\"Holmes and Bradshaw are on you\"",
    who: "Septimus", where: "His thoughts about his breakdown",
    summary: "Septimus's view of 'human nature' and of the two doctors.",
    happens: [
        "Septimus reflects on his breakdown. He has decided that human nature is cruel, and he connects it with Holmes and Bradshaw.",
    ],
    notice: [
        "What Septimus means by \"human nature.\"",
        "How the doctors are named in the same breath.",
    ],
    angle: "Is Septimus's view of the doctors simply a symptom, or does the novel give it weight?",
    themes: ["The patient's view", "Proportion & normality"],
    quotes: [
        ["Once you fall, Septimus repeated to himself, human nature is on you. Holmes and Bradshaw are on you.",
         "Septimus tells himself that once you fall, human nature attacks you, and so do Holmes and Bradshaw."],
        ["The verdict of human nature on such a wretch was death.",
         "Human nature's judgment on a miserable person like him is death."],
    ],
    links: ["scene-05", "scene-06"],
},

"mono-03": {
    kind: "mono", part: "midday",
    title: "The narrator on Proportion and Conversion",
    who: "The narrator", where: "After Bradshaw's appointment",
    summary: "The narration steps outside any character to describe Sir William's ideals of Proportion and Conversion.",
    happens: [
        "After the appointment, the narration leaves the characters' heads and describes Sir William's philosophy. It names Proportion as his goddess and lists what worship of Proportion has done. It then introduces Proportion's 'sister,' Conversion, and mentions Lady Bradshaw.",
    ],
    notice: [
        "Who is speaking in this passage: no character is thinking it.",
        "The religious language: goddess, worship, conversion.",
        "Each item in the list after \"made England prosper.\"",
        "Where Lady Bradshaw appears, and why.",
    ],
    angle: "How does this passage connect medicine to England and to wider social ideals?",
    themes: ["Proportion & normality", "Conversion & control", "Eugenics & the 'unfit'", "Gender"],
    quotes: [
        ["Proportion, divine proportion, Sir William's goddess",
         "Proportion, described as Sir William's goddess."],
        ["Worshipping proportion, Sir William not only prospered himself but made England prosper",
         "By devoting himself to proportion, Sir William became successful and helped England succeed."],
        ["secluded her lunatics, forbade childbirth, penalised despair, made it impossible for the unfit to propagate their views",
         "It shut away the mentally ill, stopped some people having children, punished despair, and stopped those judged 'unfit' from spreading their views."],
        ["Conversion is her name and she feasts on the wills of the weakly",
         "Proportion's 'sister' is called Conversion, and she feeds on weaker people's wills."],
        ["Fifteen years ago she had gone under.",
         "Fifteen years earlier, Lady Bradshaw had 'gone under.'"],
    ],
    links: ["scene-06", "scene-11"],
},

"mono-04": {
    kind: "mono", part: "afternoon",
    title: "Miss Kilman at the Stores",
    who: "Miss Kilman", where: "Army & Navy Stores",
    summary: "Inside Miss Kilman's mind: poverty, religion, resentment and loneliness.",
    happens: [
        "We follow Miss Kilman's thoughts: her bitterness about being poor and unattractive, her struggle to control her feelings through religion, her wish to keep Elizabeth close, and her humiliation when Elizabeth leaves.",
    ],
    notice: [
        "What Kilman wants, and what she fears.",
        "Her final words to Elizabeth.",
    ],
    angle: "How do you see Miss Kilman: victim, enforcer, both, or neither?",
    themes: ["Conversion & control"],
    quotes: [
        ["If she could have felled her it would have eased her.",
         "Knocking Clarissa down would have made her feel better."],
        ["Don't quite forget me",
         "Kilman asks Elizabeth not to forget her completely."],
    ],
    links: ["scene-07"],
},

"mono-05": {
    kind: "mono", part: "evening",
    title: "Septimus at the window",
    who: "Septimus", where: "At the window",
    summary: "Septimus's last thoughts as Holmes climbs the stairs.",
    happens: [
        "As Holmes comes up the stairs, Septimus thinks about the ways he could die. He doesn't want to die; life is good and the sun is hot. What he can't bear is people.",
    ],
    notice: [
        "The length of the sentences.",
        "What Septimus says about life, and what he says about people.",
    ],
    angle: "What do Septimus's last thoughts add to your reading of his death?",
    themes: ["Death as resistance", "The patient's view"],
    quotes: [
        ["He did not want to die. Life was good. The sun hot.",
         "He didn't want to die. Life was good. The sun was hot."],
        ["Only human beings",
         "Only people (are the problem)."],
    ],
    links: ["scene-09"],
},

"mono-07": {
    kind: "mono", part: "evening",
    title: "Clarissa: \"Death was defiance\"",
    who: "Clarissa", where: "The little room at the party",
    summary: "Clarissa's thoughts about the stranger's death and the doctor.",
    happens: [
        "Alone at her party, Clarissa imagines the young man's death, thinks about what it meant, thinks about Sir William, and feels connected to the young man. Then she returns to her guests.",
    ],
    notice: [
        "How Clarissa describes death.",
        "The word \"glad\" and how it sits in the passage.",
        "That she goes back to the party.",
    ],
    angle: "Is Clarissa's response empathy, something else, or both?",
    themes: ["Death as resistance", "Conversion & control"],
    quotes: [
        ["capable of some indescribable outrage—forcing your soul, that was it",
         "Bradshaw could do something terrible: force your soul."],
        ["Death was defiance. Death was an attempt to communicate",
         "Death is a way of defying, and of trying to reach others."],
        ["She felt glad that he had done it; thrown it away.",
         "She was glad he had done it and thrown his life away."],
    ],
    links: ["scene-12", "scene-03"],
},

};

const PARTS = [
    ["morning", "Morning"],
    ["midday", "Midday"],
    ["afternoon", "Afternoon"],
    ["evening", "Evening & the party"],
];

// ---------------------------------------------------------------------
// PAGE ESTIMATES for the edition you're reading.
// SOURCE_PAGES = the page each quote is on in the 1925 Harcourt text (296 pages).
// Your page is estimated as that page's position scaled to your edition's length.
// Tested against the NYRB Classics edition: estimates landed on the exact page.
// ---------------------------------------------------------------------
const EDITION = {
    name: "NYRB Classics, ed. Edward Mendelson (2025)",
    pages: 175,          // last page of the novel in your edition
    sourcePages: 296,    // last page of the 1925 Harcourt text
    spread: 4,           // +/- pages to search
};

const SOURCE_PAGES = {
    // added for the Class Discussion page (11/19 notes)
    "Why not try two tabloids of bromide dissolved in a glass of water at bedtime?": 137,
    "Human nature, in short, was on him—the repulsive brute, with the blood-red nostrils.": 139,
    "Once you stumble, Septimus wrote on the back of a postcard, human nature is on you. Holmes is on you.": 139,
    "Communication is health; communication is happiness": 141,
    "seeing human nature, that is Dr. Holmes, enter the room": 141,
    "the heat and sands of India, the mud and swamp of Africa, the purlieus of London": 151,
    "She must be brave and drink something": 227,
    "Septimus Warren Smith, aged about thirty, pale-faced, beak-nosed": 20,
    "It is I who am blocking the way, he thought.": 21,
    "People must notice; people must see.": 22,
    "So, thought Septimus, looking up, they are signalling to me.": 31,
    "Dr. Holmes had told her to make her husband (who had nothing whatever seriously the matter with him but was a little out of sorts) take an interest in things outside himself.": 31,
    "Men must not cut down trees. There is a God.": 35,
    "I am alone; I am alone!": 35,
    "No one kills from hatred.": 35,
    "Like a nun withdrawing, or a child exploring a tower, she went upstairs": 45,
    "Narrower and narrower would her bed be.": 45,
    "there was an emptiness about the heart of life; an attic room.": 45,
    "congratulated himself upon feeling very little and very reasonably.": 130,
    "There was nothing whatever the matter, said Dr. Holmes.": 137,
    "health is largely a matter in our own control.": 138,
    "The verdict of human nature on such a wretch was death.": 138,
    "Sir William said he never spoke of \"madness\"; he called it not having a sense of proportion.": 146,
    "We have been arranging that you should go into a home": 147,
    "Once you fall, Septimus repeated to himself, human nature is on you. Holmes and Bradshaw are on you.": 148,
    "Proportion, divine proportion, Sir William's goddess": 150,
    "Worshipping proportion, Sir William not only prospered himself but made England prosper": 150,
    "secluded her lunatics, forbade childbirth, penalised despair, made it impossible for the unfit to propagate their views": 150,
    "Conversion is her name and she feasts on the wills of the weakly": 151,
    "Fifteen years ago she had gone under.": 152,
    "If she could have felled her it would have eased her.": 189,
    "Love and religion! thought Clarissa": 191,
    "Don't quite forget me": 201,
    "Never had he done anything which made him feel so proud.": 218,
    "\"Must,\" \"must,\" why \"must\"? What power had Bradshaw over him?": 223,
    "I'll give it you!": 226,
    "The coward!": 226,
    "He did not want to die. Life was good. The sun hot.": 226,
    "Only human beings": 226,
    "One of the triumphs of civilisation, Peter Walsh thought.": 229,
    "We are shockingly late, dear Mrs. Dalloway, we hardly dared to come in": 277,
    "the deferred effects of shell shock": 278,
    "Death was defiance. Death was an attempt to communicate": 280,
    "a great doctor yet to her obscurely evil": 281,
    "capable of some indescribable outrage—forcing your soul, that was it": 281,
    "they make life intolerable, men like that": 281,
    "She felt somehow very like him": 283,
    "She felt glad that he had done it; thrown it away.": 283,
};

function estimatePage(quote) {
    const src = SOURCE_PAGES[quote];
    if (!src) return null;
    const est = Math.max(1, Math.min(EDITION.pages, Math.round(src / EDITION.sourcePages * EDITION.pages)));
    return {
        page: est,
        from: Math.max(1, est - EDITION.spread),
        to: Math.min(EDITION.pages, est + EDITION.spread),
    };
}
