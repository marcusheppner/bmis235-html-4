/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  All scene and monologue breakdowns, focused on medicine as a way of enforcing social norms.
  scenes.html lists them (grouped by part of the day); breakdown.html?id=scene-05 shows one.

  Each entry:
    kind        "scene" or "mono"
    part        morning | midday | afternoon | evening
    title, who, where, summary (one line for the list)
    happens     what happens / develops / is conveyed (plain English)
    lens        what this passage shows about medicine and norms
    angle       a question to take into your assignment
    themes      tags
    quotes      [ quote, underlying meaning ]  (quotes checked against the 1925 Harcourt text)
    links       related ids
*/

const BREAKDOWNS = {

/* ============================ MORNING ============================ */

"scene-01": {
    kind: "scene", part: "morning",
    title: "First sight of Septimus on Bond Street",
    who: "Septimus, Rezia, the crowd", where: "Bond Street, morning",
    summary: "A car backfires; Septimus feels the world is about to burst into flames, and Rezia is terrified people will notice.",
    happens: [
        "A car backfires in Bond Street and a crowd gathers to guess which important person is inside. Among them stands Septimus Warren Smith, a young veteran. For him the moment is terrifying: the world seems to tremble and threaten to burst into flames, and he thinks he is the one blocking the way.",
        "His wife Rezia, embarrassed and frightened, wants to get him away before anyone notices.",
    ],
    lens: "Before any doctor appears, we see the social pressure behind the medical plot: illness must not be seen. Rezia has absorbed the norm. Her first instinct is shame, not care. The crowd's fascination with the hidden VIP is set against its indifference to the suffering man in the street.",
    angle: "Where does the pressure to hide Septimus's illness come from, before medicine gets involved?",
    themes: ["Visibility & shame", "Shell shock & masculinity"],
    quotes: [
        ["Septimus Warren Smith, aged about thirty, pale-faced, beak-nosed",
         "He is introduced like a case file or a police description. The outside world sees a type, not a person."],
        ["It is I who am blocking the way, he thought.",
         "He blames himself for the city's disorder. He has already taken in the idea that he is the problem."],
        ["People must notice; people must see.",
         "Rezia's fear is social, not medical. Shame, not treatment, drives the first response to his illness."],
    ],
    links: ["scene-02", "mono-01"],
},

"scene-02": {
    kind: "scene", part: "morning",
    title: "The skywriting airplane & Dr. Holmes's advice",
    who: "Septimus, Rezia", where: "The Mall and Regent's Park, morning",
    summary: "Septimus thinks the plane's smoke letters are a message for him; Rezia follows the doctor's orders to make him 'take an interest.'",
    happens: [
        "A plane writes an advertisement in smoke over London. Everyone tries to read it. Septimus believes the letters are signals meant for him and is overwhelmed by beauty.",
        "Rezia, following Dr. Holmes's instructions, keeps urging him to look at things outside himself.",
    ],
    lens: "We hear the doctor's diagnosis secondhand, through Rezia's mind, in parentheses: \"nothing whatever seriously the matter.\" The caregiver becomes the doctor's enforcer at home, applying a prescription that clearly doesn't fit what we see in Septimus.",
    angle: "How does Holmes's authority reach into the marriage even when he isn't there?",
    themes: ["Denial (Holmes)", "Care vs. cure"],
    quotes: [
        ["So, thought Septimus, looking up, they are signalling to me.",
         "A symptom, but also a longing to be addressed and understood, which no doctor offers him."],
        ["Dr. Holmes had told her to make her husband (who had nothing whatever seriously the matter with him but was a little out of sorts) take an interest in things outside himself.",
         "The parentheses carry the doctor's voice into Rezia's head. The minimizing (\"a little out of sorts\") is ironic because the reader can see it's false."],
    ],
    links: ["scene-01", "scene-04"],
},

"scene-03": {
    kind: "scene", part: "morning",
    title: "Clarissa's attic room: the convalescent",
    who: "Clarissa", where: "Her house, late morning",
    summary: "Recovering from illness, Clarissa retreats to her narrow attic bed and the memory of Sally.",
    happens: [
        "Clarissa returns home and goes up to the attic room where she has slept alone since her illness, which weakened her heart. She reflects on her coldness, her marriage, and her age.",
        "Her mind turns to Sally Seton, and the kiss at Bourton she remembers as the best moment of her life.",
    ],
    lens: "Clarissa is also a patient, but a respectable one. Her illness is managed quietly through rest, separate rooms, and withdrawal, and she never questions it. Her narrowing bed shows the quieter, socially accepted version of the confinement Bradshaw imposes on Septimus. Her desire for Sally is another feeling that has no place in her world.",
    angle: "Is Clarissa's convalescence a gentler form of the same medical-social control applied to Septimus?",
    themes: ["Clarissa's illness", "Rest cure & isolation", "Gender"],
    quotes: [
        ["Like a nun withdrawing, or a child exploring a tower, she went upstairs",
         "Withdrawal is framed as virtue (the nun). The sickroom becomes a kind of cloister."],
        ["Narrower and narrower would her bed be.",
         "Illness and age shrink her world, and even suggest a coffin."],
        ["there was an emptiness about the heart of life; an attic room.",
         "Her literal weak heart and an emotional emptiness merge into one image."],
    ],
    links: ["scene-11", "mono-07"],
},

/* ============================ MIDDAY ============================ */

"scene-04": {
    kind: "scene", part: "midday",
    title: "Septimus and Rezia in Regent's Park",
    who: "Septimus, Rezia", where: "Regent's Park, before noon",
    summary: "Waiting for the specialist, Septimus has visions and messages; Rezia breaks down alone by the fountain.",
    happens: [
        "Waiting for their noon appointment with Sir William Bradshaw, Septimus sees his dead friend Evans, hears birds sing in Greek, and writes down messages for the world.",
        "Rezia, exhausted and homesick, walks off and cries out that she is alone.",
    ],
    lens: "This is the patient's experience from inside, just before the medical verdict. Woolf writes his visions with real beauty and moral seriousness, so the reader can't simply accept the doctors' view of him. Rezia shows the hidden cost to caregivers, whom the medical system ignores.",
    angle: "Does the novel invite us to take Septimus's visions seriously, and what does that do to the doctors' authority?",
    themes: ["The patient's view", "Care vs. cure"],
    quotes: [
        ["Men must not cut down trees. There is a God.",
         "His \"messages\" mix madness and moral vision. They are about care for living things."],
        ["I am alone; I am alone!",
         "The caregiver's isolation, which no doctor treats."],
    ],
    links: ["mono-01", "mono-06", "scene-05"],
},

"scene-05": {
    kind: "scene", part: "midday",
    title: "Septimus's history: the war and Dr. Holmes",
    who: "Septimus (narrated history), Dr. Holmes", where: "Flashback",
    summary: "The war, Evans's death, the numbness that follows, and Holmes's verdict: nothing whatever the matter.",
    happens: [
        "Septimus volunteered early, fought well, and was praised. When his close friend Evans was killed, he felt almost nothing, and he was proud of that until the numbness turned into horror.",
        "Back in London he breaks down. Dr. Holmes visits repeatedly, insisting nothing is wrong and prescribing outside interests, hobbies, and willpower.",
    ],
    lens: "Two norms collide. The military norm of manly self-control taught Septimus to feel nothing, and the medical norm (Holmes) tells him his suffering isn't real and is his own responsibility. Holmes's \"health is largely a matter in our own control\" turns illness into a failure of will.",
    angle: "How does Holmes's denial reinforce the same masculine ideal that helped break Septimus?",
    themes: ["Shell shock & masculinity", "Denial (Holmes)"],
    quotes: [
        ["congratulated himself upon feeling very little and very reasonably.",
         "The ideal soldier's emotional control, shown here as a symptom."],
        ["There was nothing whatever the matter, said Dr. Holmes.",
         "Flat, total denial. The doctor's authority defines what counts as real."],
        ["health is largely a matter in our own control.",
         "Responsibility shifts from illness to the patient's character. If you're sick, it's your fault."],
    ],
    links: ["mono-02", "scene-06"],
},

"scene-06": {
    kind: "scene", part: "midday",
    title: "The appointment with Sir William Bradshaw",
    who: "Septimus, Rezia, Sir William Bradshaw", where: "Harley Street, noon",
    summary: "In under an hour the great specialist decides Septimus must be sent to a home in the country.",
    happens: [
        "At noon exactly, the Smiths see Sir William Bradshaw. He questions Septimus briefly, decides his case is serious, and announces that arrangements have been made for him to go to a home in the country, apart from his wife, to rest.",
        "Rezia leaves feeling abandoned; later that evening Septimus will ask himself what power Bradshaw has over him.",
    ],
    lens: "This is the central scene for your theme. Bradshaw renames madness as \"not having a sense of proportion,\" turning illness into a failure of balance and self-control, so treatment becomes correction. The decision is made for Septimus, not with him (\"We have been arranging\"), and it removes him from society.",
    angle: "What is gained, for Bradshaw and for society, by calling it \"proportion\" instead of \"madness\"?",
    themes: ["Proportion & normality", "Rest cure & isolation", "Class & medical authority"],
    quotes: [
        ["Sir William said he never spoke of \"madness\"; he called it not having a sense of proportion.",
         "A change of words that changes the meaning: illness becomes a moral or social failing."],
        ["We have been arranging that you should go into a home",
         "The passive, collective \"we\" hides who decided. The patient is managed, not consulted."],
    ],
    links: ["mono-03", "scene-05", "scene-11"],
},

/* ============================ AFTERNOON ============================ */

"scene-07": {
    kind: "scene", part: "afternoon",
    title: "Miss Kilman: conversion outside medicine",
    who: "Miss Kilman, Clarissa, Elizabeth", where: "The Dalloways' house and the Army & Navy Stores",
    summary: "A religious tutor tries to possess Elizabeth's soul; Clarissa condemns love and religion as forces that take people over.",
    happens: [
        "Miss Kilman, Elizabeth's tutor, arrives. She and Clarissa despise each other. Clarissa thinks that love and religion both destroy the privacy of the soul.",
        "At the Stores, Miss Kilman eats greedily, clings to Elizabeth, and is left humiliated when Elizabeth leaves.",
    ],
    lens: "Woolf shows that \"Conversion\" isn't only medical. Kilman's religious urge to remake Elizabeth mirrors Bradshaw's, and it suggests the will to normalize runs through the whole society. Kilman is also a casualty of the war's norms: she lost her job because of her German ancestry.",
    angle: "Does Kilman make Bradshaw's \"Conversion\" look like a general human urge, or a uniquely medical abuse?",
    themes: ["Conversion & control"],
    quotes: [
        ["Love and religion! thought Clarissa",
         "Clarissa groups them together as forces that try to possess other people, like Bradshaw's Conversion."],
        ["If she could have felled her it would have eased her.",
         "Kilman's will to dominate, felt in the body."],
    ],
    links: ["mono-04", "mono-03"],
},

"scene-08": {
    kind: "scene", part: "afternoon",
    title: "Making the hat: care without cure",
    who: "Septimus, Rezia", where: "Their lodgings, late afternoon",
    summary: "The couple's one calm, happy hour: Septimus helps Rezia trim a hat.",
    happens: [
        "At home, Rezia trims a hat for a client. Septimus starts helping and joking about the design. For a while he is clear-minded and they are simply happy together.",
        "Then Rezia remembers he will be taken away, and they promise nothing will separate them.",
    ],
    lens: "The scene offers an alternative to the medical model: no doctor, no diagnosis, just shared and creative work that treats Septimus as a person. It's the healthiest he is all day, and it's exactly what the prescribed separation will destroy.",
    angle: "Does the hat scene suggest what real care would look like, in contrast to the doctors' \"cure\"?",
    themes: ["Care vs. cure"],
    quotes: [
        ["Never had he done anything which made him feel so proud.",
         "Pride and connection come from shared work, not treatment."],
    ],
    links: ["scene-09", "scene-04"],
},

/* ============================ EVENING ============================ */

"scene-09": {
    kind: "scene", part: "evening",
    title: "Holmes arrives; Septimus jumps",
    who: "Septimus, Rezia, Dr. Holmes", where: "Their lodgings, evening",
    summary: "Holmes pushes past Rezia to take Septimus away; Septimus throws himself from the window.",
    happens: [
        "Waiting for the doctors, Septimus asks himself why he \"must\" go and what power Bradshaw has over him. Dr. Holmes comes to take Septimus to the home. Rezia tries to block him on the stairs. Alone, Septimus doesn't want to die, but as Holmes comes up he jumps from the window onto the railings below.",
        "Holmes calls him a coward. Rezia is sedated.",
    ],
    lens: "The medical system's final intervention ends in death, and its last word is a moral judgment (\"coward\"), not a diagnosis. Holmes's force on the stairs shows the physical power behind polite medical authority.",
    angle: "Is Septimus's death presented as a symptom of illness, or as a refusal of medical control?",
    themes: ["Death as resistance", "Shell shock & masculinity", "Denial (Holmes)"],
    quotes: [
        ["\"Must,\" \"must,\" why \"must\"? What power had Bradshaw over him?",
         "Just before Holmes arrives, Septimus names the real issue: power, not health."],
        ["I'll give it you!",
         "His last words are flung at Holmes. Defiance, not surrender."],
        ["The coward!",
         "Holmes's verdict repeats the wartime view of shell-shocked men as cowards. The doctor learns nothing."],
    ],
    links: ["mono-05", "scene-10", "scene-12"],
},

"scene-10": {
    kind: "scene", part: "evening",
    title: "The ambulance: \"one of the triumphs of civilisation\"",
    who: "Peter Walsh", where: "Near his hotel, evening",
    summary: "Peter hears the ambulance carrying Septimus and admires London's efficiency.",
    happens: [
        "Peter hears an ambulance bell and thinks how admirably organized and efficient London is. He doesn't know it is carrying Septimus.",
    ],
    lens: "This is how the system looks from the outside: efficient, humane, reassuring. The irony exposes how the institutions that failed Septimus present themselves as progress.",
    angle: "What does the ambulance passage say about how society sees its own medical institutions?",
    themes: ["Class & medical authority", "Visibility & shame"],
    quotes: [
        ["One of the triumphs of civilisation, Peter Walsh thought.",
         "Dramatic irony: \"civilisation\" praised at the moment it has destroyed someone."],
    ],
    links: ["scene-09"],
},

"scene-11": {
    kind: "scene", part: "evening",
    title: "The Bradshaws at the party",
    who: "Clarissa, Sir William and Lady Bradshaw, Richard", where: "The Dalloways' party, night",
    summary: "The great doctor arrives late, discusses 'shell shock' legislation, and brings news of a suicide.",
    happens: [
        "The Bradshaws arrive late; Lady Bradshaw apologizes. Sir William talks with Richard Dalloway about a Bill concerning the deferred effects of shell shock.",
        "Lady Bradshaw lowers her voice to tell Clarissa that a young man, one of Sir William's patients, has killed himself.",
    ],
    lens: "Medicine and the governing class literally share a room. Bradshaw shapes legislation about the very condition he mishandled, among the Prime Minister and MPs. Clarissa privately judges him \"obscurely evil.\" This is where the novel's medical critique and its social critique merge.",
    angle: "What does it mean that Bradshaw is welcome at the party, and helping write the law?",
    themes: ["Class & medical authority", "Shell shock & masculinity"],
    quotes: [
        ["We are shockingly late, dear Mrs. Dalloway, we hardly dared to come in",
         "Polished social manners from Lady Bradshaw, the \"converted\" wife, minutes before she reports a death."],
        ["the deferred effects of shell shock",
         "The doctor turns trauma into policy talk at a party, abstract and far from Septimus."],
        ["a great doctor yet to her obscurely evil",
         "Clarissa's instinctive judgment: authority and evil in the same person."],
    ],
    links: ["scene-12", "scene-06", "mono-03"],
},

"scene-12": {
    kind: "scene", part: "evening",
    title: "The little room: Clarissa understands",
    who: "Clarissa", where: "A small room off the party, night",
    summary: "Alone, Clarissa imagines the young man's death and decides men like Bradshaw make life intolerable.",
    happens: [
        "Clarissa withdraws to a small empty room. She imagines the young man's fall and decides that death was defiance, an attempt to communicate.",
        "She suspects he went to Bradshaw, imagines him thinking that men like that make life intolerable, and feels very like him. Then she returns to her guests.",
    ],
    lens: "The novel's verdict on medical power, given through the conforming double. Clarissa identifies exactly what Bradshaw does: \"forcing your soul.\" She reads the suicide as resistance, and the passage turns a medical event into a moral and political one.",
    angle: "Is Clarissa's reading of the death insight, or is she turning Septimus into a symbol for her own needs?",
    themes: ["Death as resistance", "Conversion & control", "Proportion & normality"],
    quotes: [
        ["capable of some indescribable outrage—forcing your soul, that was it",
         "The deepest charge against Bradshaw: medicine as violation of the self."],
        ["they make life intolerable, men like that",
         "Clarissa imagines the patient's verdict on his doctor."],
        ["Death was defiance. Death was an attempt to communicate",
         "Suicide reread as resistance and as a message."],
        ["She felt somehow very like him",
         "The conforming woman recognizes herself in the man the system destroyed."],
    ],
    links: ["mono-07", "scene-11", "scene-09"],
},

/* ============================ MONOLOGUES ============================ */

"mono-01": {
    kind: "mono", part: "midday",
    title: "Septimus's messages",
    who: "Septimus", where: "Regent's Park",
    summary: "Trees are alive, there is no crime, men must not cut down trees: the patient's vision from inside.",
    happens: [
        "Sitting in the park, Septimus feels everything is connected and alive, and he must tell the world. He writes his messages down while Rezia sits beside him in despair.",
    ],
    lens: "The longest look inside the patient's mind. Woolf gives his \"madness\" coherence and moral force, which undermines the doctors' assumption that he has nothing worth hearing.",
    angle: "What would it mean to read Septimus as a speaker with something to say, not only a case?",
    themes: ["The patient's view"],
    quotes: [
        ["Men must not cut down trees. There is a God.",
         "Prophecy or symptom? The novel won't let us decide easily."],
        ["No one kills from hatred.",
         "A veteran's insight: the war's killing came from obedience to norms, not passion."],
    ],
    links: ["scene-04"],
},

"mono-06": {
    kind: "mono", part: "midday",
    title: "Rezia: \"I am alone\"",
    who: "Rezia", where: "By the fountain in Regent's Park",
    summary: "The caregiver's private despair: homesick, unheard, and following orders she can't believe in.",
    happens: [
        "Rezia walks away from Septimus, overwhelmed. She thinks of Italy and her sisters, how far she is from home, and how no one can help her, and cries out that she is alone.",
    ],
    lens: "The medical system treats Rezia as an assistant, there to carry out Holmes's instructions. Her inner voice shows the caregiver as someone the system also fails.",
    angle: "What does Rezia's perspective add to a critique of medicine as social control?",
    themes: ["Care vs. cure"],
    quotes: [
        ["I am alone; I am alone!",
         "The repetition makes it a cry. No one in authority hears it."],
    ],
    links: ["scene-04"],
},

"mono-02": {
    kind: "mono", part: "midday",
    title: "\"Holmes and Bradshaw are on you\"",
    who: "Septimus", where: "His memories after the war",
    summary: "Septimus comes to see 'human nature,' meaning the doctors, as a brute hunting him.",
    happens: [
        "Septimus reflects on his breakdown. He decides Shakespeare loathed humanity, that human nature is a brute, and that once you fall, it, in the form of Holmes and Bradshaw, comes after you.",
    ],
    lens: "The patient's analysis of power. To Septimus, the doctors aren't healers but the agents of \"human nature,\" society's demand to conform, and their verdict on anyone who fails is death.",
    angle: "Is Septimus's paranoia also an accurate description of how the system treats him?",
    themes: ["The patient's view", "Proportion & normality"],
    quotes: [
        ["Once you fall, Septimus repeated to himself, human nature is on you. Holmes and Bradshaw are on you.",
         "The doctors are named as the enforcers of society's judgment."],
        ["The verdict of human nature on such a wretch was death.",
         "Society's sentence on those who fall. It foreshadows his end."],
    ],
    links: ["scene-05", "scene-06"],
},

"mono-03": {
    kind: "mono", part: "midday",
    title: "Proportion & Conversion: the narrator's attack",
    who: "The narrator", where: "After Bradshaw's appointment",
    summary: "The narrator steps out of every character's head to condemn Bradshaw's goddesses and what they do to England.",
    happens: [
        "After the appointment, the narration leaves the characters and describes Bradshaw's philosophy directly. He worships Proportion, which makes him prosper and makes England prosper by shutting away its lunatics, forbidding childbirth, and penalizing despair. Proportion's sister Conversion feeds on other people's wills, and has consumed his own wife's.",
    ],
    lens: "The most important passage for your topic. It explicitly links medicine to national ideals, eugenics, and the domination of women. This is Woolf's \"social system at work\" in its plainest form.",
    angle: "How does this passage connect medical treatment to national and class ideals of \"England\"?",
    themes: ["Proportion & normality", "Conversion & control", "Eugenics & the 'unfit'", "Gender"],
    quotes: [
        ["Proportion, divine proportion, Sir William's goddess",
         "Normality turned into a religion."],
        ["Worshipping proportion, Sir William not only prospered himself but made England prosper",
         "The doctor's success and the nation's are tied together. Medicine serves the national ideal."],
        ["secluded her lunatics, forbade childbirth, penalised despair, made it impossible for the unfit to propagate their views",
         "A list that reaches from confinement to eugenics to silencing dissent."],
        ["Conversion is her name and she feasts on the wills of the weakly",
         "Conformity imposed as a kind of predation."],
        ["Fifteen years ago she had gone under.",
         "Lady Bradshaw: Conversion worked on the doctor's own wife."],
    ],
    links: ["scene-06", "scene-11"],
},

"mono-04": {
    kind: "mono", part: "afternoon",
    title: "Miss Kilman's hunger",
    who: "Miss Kilman", where: "Army & Navy Stores",
    summary: "Inside the tutor's mind: poverty, religious struggle, and the need to possess Elizabeth.",
    happens: [
        "Inside Miss Kilman's mind we find her bitterness at being poor and unattractive, her religious struggle to control her body and her hatred, her desire to possess Elizabeth, and her humiliation when Elizabeth leaves.",
    ],
    lens: "A converter who is herself an outsider. Kilman shows how people damaged by social norms can turn into their enforcers.",
    angle: "Is Kilman a victim of norms, an enforcer of them, or both?",
    themes: ["Conversion & control"],
    quotes: [
        ["If she could have felled her it would have eased her.",
         "Domination as relief from humiliation."],
        ["Don't quite forget me",
         "The would-be converter is desperately lonely herself."],
    ],
    links: ["scene-07"],
},

"mono-05": {
    kind: "mono", part: "evening",
    title: "\"He did not want to die\"",
    who: "Septimus", where: "At the window",
    summary: "His final thoughts: life is good; only human beings are the problem.",
    happens: [
        "As Holmes climbs the stairs, Septimus considers the ways he could die, and realizes he doesn't want to. Life is good, the sun is hot. Only people, the ones coming for him, are unbearable.",
    ],
    lens: "Crucial for arguing that the death is not a wish to die but a refusal of the people with power over him. The problem is placed in \"human beings,\" not in Septimus.",
    angle: "How does this passage complicate reading his death as a symptom?",
    themes: ["Death as resistance", "The patient's view"],
    quotes: [
        ["He did not want to die. Life was good. The sun hot.",
         "Plain love of life, even at the end."],
        ["Only human beings",
         "The threat is people, specifically those with power over him."],
    ],
    links: ["scene-09"],
},

"mono-07": {
    kind: "mono", part: "evening",
    title: "\"Death was defiance\"",
    who: "Clarissa", where: "The little room at the party",
    summary: "Clarissa's meditation on the stranger's suicide and on the doctor who drove him to it.",
    happens: [
        "Alone, Clarissa imagines the young man's death and reads it as defiance and communication. She suspects Bradshaw made his life intolerable, feels very like him, and then goes back to her party.",
    ],
    lens: "The conforming double sees the system clearly for a moment, then returns to it. That is a powerful image of how norms survive even when people recognize their cost.",
    angle: "What does it mean that Clarissa understands Bradshaw, yet goes back to hosting him?",
    themes: ["Death as resistance", "Conversion & control"],
    quotes: [
        ["capable of some indescribable outrage—forcing your soul, that was it",
         "Her name for what medicine does at its worst."],
        ["Death was defiance. Death was an attempt to communicate",
         "Suicide as protest."],
        ["She felt glad that he had done it; thrown it away.",
         "Uncomfortable and central. Discuss what \"glad\" means here."],
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
