/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Class discussion notes, organized. Used by discussion.html (the notes) and notes.html (the chat).

  Each section:
    id, title, date      the class session
    notes                the discussion points, written out from my class notes
    flow                 (optional) a chain of ideas drawn in the notes
    quotes               [ quote, in plain English ]  checked against the 1925 Harcourt text;
                         page estimates come from estimatePage() in breakdowns.js
    further              questions for taking the ideas further (no answers)
    links                related breakdown ids
    keys                 words the chat uses to find this section

  To add notes from another class, copy a section and edit it.
*/

const DISCUSSION = [
    {
        id: "holmes-human-nature", title: "Dr. Holmes as \"human nature\"", date: "11/19",
        notes: [
            "In class we connected Dr. Holmes with what Septimus calls \"human nature.\"",
            "The word \"brute\" came up, with these associations: violent, animal, strong, dull, forceful.",
            "Holmes invalidates Septimus: he dismisses what Septimus is experiencing.",
        ],
        quotes: [
            ["Human nature, in short, was on him—the repulsive brute, with the blood-red nostrils.",
             "Human nature had caught up with him: a disgusting beast with bloody nostrils."],
            ["Once you stumble, Septimus wrote on the back of a postcard, human nature is on you. Holmes is on you.",
             "Septimus writes that once you slip up, human nature comes after you, and so does Holmes."],
            ["seeing human nature, that is Dr. Holmes, enter the room",
             "Septimus sees human nature, which for him means Dr. Holmes, come into the room."],
            ["There was nothing whatever the matter, said Dr. Holmes.",
             "Holmes says nothing at all is wrong with Septimus."],
        ],
        further: [
            "Which of the brute's qualities (violent, animal, strong, dull, forceful) can you find in how Holmes actually behaves?",
            "How does Holmes \"invalidate\" Septimus? Look at specific words he uses.",
            "Why might Woolf have Septimus equate a doctor with human nature itself, rather than with one bad person?",
        ],
        links: ["scene-05", "mono-02", "scene-09"],
        keys: ["holmes", "human nature", "brute", "invalidat", "dismiss", "animal", "violent", "forceful", "nostril"],
    },
    {
        id: "human-nature", title: "What is \"human nature\"?", date: "11/19",
        notes: [
            "Human nature as a \"natural norm\": the standard of what people are supposed to be.",
            "Human nature as consciousness.",
            "The class brainstormed qualities of human nature: complicated, selfish (in both positive and negative ways), communal, curious, philosophical, empathetic, judgmental, cruel, creative, exploitative, arrogant, insecure.",
        ],
        quotes: [
            ["Once you fall, Septimus repeated to himself, human nature is on you. Holmes and Bradshaw are on you.",
             "Once you fall, human nature attacks you, and so do Holmes and Bradshaw."],
            ["The verdict of human nature on such a wretch was death.",
             "Human nature's judgment on a miserable person like him is death."],
        ],
        further: [
            "Which qualities from the class list does Septimus see in human nature? Which does he leave out?",
            "If human nature is a \"natural norm,\" what happens to someone who seems to fall outside it?",
            "Do any characters show the more positive qualities on the list (communal, empathetic, creative)? Where?",
        ],
        links: ["mono-02", "scene-08"],
        keys: ["human nature", "natural norm", "consciousness", "selfish", "communal", "empathy", "empathetic", "cruel", "creative", "exploit", "arrogan", "insecure", "judgment", "judgmental"],
    },
    {
        id: "mind-body", title: "Mind/body dualism", date: "11/19",
        notes: [
            "A general concept from class: mind/body dualism separates the mind from the body.",
            "In that separation, the mind is elevated as more important than the body.",
        ],
        quotes: [
            ["health is largely a matter in our own control.",
             "Holmes's view: being healthy is mostly up to us."],
            ["Why not try two tabloids of bromide dissolved in a glass of water at bedtime?",
             "Holmes suggests two bromide tablets (a sedative) dissolved in water before bed."],
        ],
        further: [
            "Does Holmes treat Septimus's illness as a problem of the mind, the body, or both? Look at what he recommends.",
            "Where does the novel describe Septimus's body rather than his thoughts? What do those moments show?",
            "How might mind/body dualism connect to the \"mechanist,\" fix-it view of the body?",
        ],
        links: ["scene-05"],
        keys: ["mind", "body", "dualism", "dualist", "descartes", "physical", "mental"],
    },
    {
        id: "doctors", title: "How the doctors see the body", date: "11/19",
        notes: [
            "A mechanist view of the body: the body as a machine to be fixed (\"fix-it\").",
            "Medical institutions create and reinforce norms, and they standardize the body.",
            "Those norms are backed by scientific processes, and they shape, and are supported by, authority.",
            "The result is social pressure to meet medicalized norms.",
        ],
        flow: ["Backed by scientific processes", "Norms", "Shape, and are supported by, authority"],
        quotes: [
            ["There was nothing whatever the matter, said Dr. Holmes.",
             "Holmes says nothing at all is wrong with Septimus."],
            ["We have been arranging that you should go into a home",
             "'We' have already started organizing for you to go to a care home."],
            ["Sir William said he never spoke of \"madness\"; he called it not having a sense of proportion.",
             "Bradshaw never uses the word 'madness'; he calls it lacking a sense of proportion."],
        ],
        further: [
            "Where do Holmes and Bradshaw treat Septimus like a machine to be repaired?",
            "What does a \"standardized\" body or mind look like in this novel? Who sets the standard?",
            "Where do you see the social pressure to meet medicalized norms acting on someone other than Septimus (for example Rezia or Clarissa)?",
        ],
        links: ["scene-05", "scene-06", "scene-01"],
        keys: ["mechanis", "machine", "fix", "institution", "standard", "norm", "norms", "authority", "science", "scientific", "pressure", "medicaliz"],
    },
    {
        id: "bradshaw", title: "Bradshaw and Proportion", date: "11/19",
        notes: [
            "Proportion as a \"norm\": an equal balance, a \"symmetry,\" between things.",
            "Bradshaw polices the health of the national body, not only individual patients.",
            "He \"fixes\" social problems, aiming at a proportionate society.",
            "Conversion and \"divine\" Proportion: he sees himself as doing God's work.",
        ],
        quotes: [
            ["Proportion, divine proportion, Sir William's goddess",
             "Proportion, described as Sir William's goddess."],
            ["Worshipping proportion, Sir William not only prospered himself but made England prosper",
             "By devoting himself to proportion, he became successful and helped England succeed."],
            ["secluded her lunatics, forbade childbirth, penalised despair, made it impossible for the unfit to propagate their views",
             "It shut away the mentally ill, stopped some people having children, punished despair, and silenced those judged 'unfit.'"],
        ],
        further: [
            "What does \"symmetry\" or balance look like in a person, according to Bradshaw? In a nation?",
            "Which items in the list after \"made England prosper\" are about individual bodies, and which are about the nation?",
            "How does religious language (goddess, worshipping, divine) change the way Bradshaw's medicine sounds?",
        ],
        links: ["scene-06", "mono-03", "scene-11"],
        keys: ["bradshaw", "proportion", "symmetry", "balance", "national", "nation", "england", "divine", "god", "goddess", "prosper", "society"],
    },
    {
        id: "conversion", title: "Conversion", date: "11/19",
        notes: [
            "Conversion means deep change: changing who someone is, not just what they do.",
            "The way the narrator describes Conversion feels colonial in its diction.",
        ],
        quotes: [
            ["Conversion is her name and she feasts on the wills of the weakly",
             "Proportion's 'sister' is called Conversion, and she feeds on weaker people's wills."],
            ["the heat and sands of India, the mud and swamp of Africa, the purlieus of London",
             "The places where Conversion works: India, Africa, and the poorer outskirts (\"purlieus\") of London."],
            ["Fifteen years ago she had gone under.",
             "Lady Bradshaw had 'gone under' fifteen years earlier."],
        ],
        further: [
            "Which specific words in the India/Africa/London list make the passage sound colonial?",
            "Why might the narrator place \"the purlieus of London\" in the same list as India and Africa?",
            "Who is \"converted\" in the novel: patients, Lady Bradshaw, Elizabeth (by Miss Kilman)? What do they have in common?",
        ],
        links: ["mono-03", "scene-07", "mono-04"],
        keys: ["conversion", "convert", "colonial", "colonialism", "empire", "india", "africa", "purlieus", "change", "missionar"],
    },
    {
        id: "communication", title: "\"Communication is health\"", date: "11/19",
        notes: [
            "Septimus's line \"Communication is health; communication is happiness.\"",
            "In class, a sleeping pill was discussed as a \"diagnosis\" in the novel, and as something that shuts down communication.",
        ],
        quotes: [
            ["Communication is health; communication is happiness",
             "Being able to communicate is what health and happiness are."],
            ["Why not try two tabloids of bromide dissolved in a glass of water at bedtime?",
             "Holmes suggests two bromide tablets (a sedative) before bed."],
            ["She must be brave and drink something",
             "After Septimus's death, Holmes tells Rezia to be brave and drink something; the drink isn't named."],
            ["Death was defiance. Death was an attempt to communicate",
             "Clarissa thinks of death as defiance and an attempt to reach others."],
        ],
        further: [
            "If communication is health, what does that suggest about a treatment that puts someone to sleep?",
            "Who in the novel listens to Septimus, and who doesn't? Who does he try to communicate with?",
            "How does Clarissa's idea that death is \"an attempt to communicate\" relate to Septimus's line?",
        ],
        links: ["scene-04", "scene-09", "scene-12", "mono-01"],
        keys: ["communicat", "health", "happiness", "sleep", "sleeping", "pill", "bromide", "sedat", "drug", "drink", "silence", "listen", "talk"],
    },
];
