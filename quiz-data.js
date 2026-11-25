/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Quiz content. Three kinds:
    READING_CHECK  multiple choice about what literally happens (answer key)
    WHO_SPEAKS     whose voice/mind a quote comes from (answer key)
    DRILLS         close-reading prompts with NO answer key; a checklist checks whether
                   your answer engages with specific features of the passage, never what
                   you conclude. Every quote is checked against the 1925 Harcourt text.

  To add a question, copy one entry and edit it. "review" is the breakdown id to revisit.
*/

const READING_CHECK = [
    { id: "rc-01", review: "scene-01", q: "What frightens Septimus on Bond Street in the morning?",
      options: ["A car backfiring", "An airplane overhead", "Big Ben striking", "A street fight"], answer: 0 },
    { id: "rc-02", review: "scene-02", q: "What has Dr. Holmes told Rezia to do?",
      options: ["Keep Septimus in bed", "Get Septimus to take an interest in things outside himself",
                "Take Septimus back to Italy", "Stop Septimus from reading"], answer: 1 },
    { id: "rc-03", review: "scene-03", q: "Where has Clarissa slept since her illness?",
      options: ["In a hospital", "At Bourton", "Alone in an attic room", "In Elizabeth's room"], answer: 2 },
    { id: "rc-04", review: "scene-04", q: "What does Septimus write down in Regent's Park?",
      options: ["A letter to Evans", "A poem for Rezia", "Questions for Bradshaw", "Messages he believes the world needs"], answer: 3 },
    { id: "rc-05", review: "scene-05", q: "How did Septimus first react when Evans was killed?",
      options: ["He felt very little, and was pleased with himself for it", "He broke down immediately",
                "He deserted the army", "He wrote to Evans's family"], answer: 0 },
    { id: "rc-06", review: "scene-05", q: "What is Dr. Holmes's view of Septimus's condition?",
      options: ["It is shell shock and needs a specialist", "Nothing whatever is the matter",
                "It is a heart condition", "It is caused by Rezia"], answer: 1 },
    { id: "rc-07", review: "scene-06", q: "What does Bradshaw call Septimus's illness instead of \"madness\"?",
      options: ["Nerves", "Hysteria", "Not having a sense of proportion", "Shell shock"], answer: 2 },
    { id: "rc-08", review: "scene-06", q: "Where does Bradshaw arrange for Septimus to go?",
      options: ["A London hospital, with Rezia", "Back to the army", "Italy, with Rezia's family", "A home in the country, away from Rezia"], answer: 3 },
    { id: "rc-09", review: "mono-03", q: "In the narrator's passage, what is the name of Proportion's \"sister\"?",
      options: ["Conversion", "Discipline", "Restraint", "Obedience"], answer: 0 },
    { id: "rc-10", review: "scene-08", q: "What are Septimus and Rezia doing together in the late afternoon?",
      options: ["Walking in the park", "Trimming a hat", "Writing letters", "Packing his things"], answer: 1 },
    { id: "rc-11", review: "scene-09", q: "Who comes to take Septimus away in the evening?",
      options: ["Sir William Bradshaw", "Peter Walsh", "Dr. Holmes", "A policeman"], answer: 2 },
    { id: "rc-12", review: "scene-09", q: "What does Holmes call Septimus after he dies?",
      options: ["A poor soul", "A patient", "A madman", "A coward"], answer: 3 },
    { id: "rc-13", review: "scene-10", q: "What does Peter Walsh think when he hears the ambulance?",
      options: ["That it is one of the triumphs of civilisation", "That someone has been hurt in the war",
                "That it is too noisy", "That it is carrying Clarissa"], answer: 0 },
    { id: "rc-14", review: "scene-11", q: "What is Sir William discussing with Richard Dalloway at the party?",
      options: ["Septimus's case", "A Bill about the deferred effects of shell shock", "Lady Bruton's emigration scheme", "The Prime Minister's health"], answer: 1 },
    { id: "rc-15", review: "scene-11", q: "Who tells Clarissa about the young man's death?",
      options: ["Sir William", "Peter Walsh", "Lady Bradshaw", "Richard"], answer: 2 },
];

const SPEAKERS = ["Septimus", "Clarissa", "Rezia", "Dr. Holmes", "Sir William Bradshaw",
                  "Lady Bradshaw", "Miss Kilman", "Peter Walsh", "The narrator"];

const WHO_SPEAKS = [
    { id: "ws-01", review: "scene-01", quote: "People must notice; people must see.", speaker: "Rezia" },
    { id: "ws-02", review: "scene-03", quote: "Narrower and narrower would her bed be.", speaker: "Clarissa" },
    { id: "ws-03", review: "mono-01", quote: "Men must not cut down trees. There is a God.", speaker: "Septimus" },
    { id: "ws-04", review: "mono-06", quote: "I am alone; I am alone!", speaker: "Rezia" },
    { id: "ws-05", review: "scene-05", quote: "health is largely a matter in our own control.", speaker: "Dr. Holmes" },
    { id: "ws-06", review: "mono-03", quote: "Conversion is her name and she feasts on the wills of the weakly", speaker: "The narrator" },
    { id: "ws-07", review: "mono-04", quote: "If she could have felled her it would have eased her.", speaker: "Miss Kilman" },
    { id: "ws-08", review: "mono-05", quote: "He did not want to die. Life was good. The sun hot.", speaker: "Septimus" },
    { id: "ws-09", review: "scene-11", quote: "We are shockingly late, dear Mrs. Dalloway, we hardly dared to come in", speaker: "Lady Bradshaw" },
    { id: "ws-10", review: "mono-07", quote: "Death was defiance. Death was an attempt to communicate", speaker: "Clarissa" },
    { id: "ws-11", review: "scene-06", quote: "We have been arranging that you should go into a home", speaker: "Sir William Bradshaw" },
    { id: "ws-12", review: "scene-10", quote: "One of the triumphs of civilisation", speaker: "Peter Walsh" },
    { id: "ws-13", review: "mono-04", quote: "Don't quite forget me", speaker: "Miss Kilman" },
    { id: "ws-14", review: "scene-09", quote: "The coward!", speaker: "Dr. Holmes" },
];

/*
  CLOSE-READING DRILLS
  Each check looks for evidence that your answer engages with a feature of the passage.
    any:      at least one of these words/phrases appears (lower case; word starts)
    anyOf2:   at least two different items from this list appear
  Every drill also gets the general checks in quiz.js (quoting the text, length,
  more than one reading, going beyond restating, linking to the theme).
*/
const DRILLS = [
    {
        id: "dr-proportion", review: "scene-06",
        title: "Proportion instead of madness",
        quote: "Sir William said he never spoke of \"madness\"; he called it not having a sense of proportion.",
        prompt: "Close-read Bradshaw's choice of words. What happens when \"proportion\" replaces \"madness\"?",
        checks: [
            { label: "You discuss the word \"madness\" itself.", any: ["madness", "mad"],
              hint: "Look at the word he refuses to use. What does it carry?" },
            { label: "You consider what \"proportion\" means in everyday use.", any: ["balance", "restraint", "moderation", "measure", "everyday", "ordinary", "outside medicine", "usually means", "normally means", "in general"],
              hint: "What does \"proportion\" mean when you're not talking about illness?" },
            { label: "You think about who is choosing the words.", any: ["bradshaw", "sir william", "doctor", "specialist", "physician"],
              hint: "Whose vocabulary is this, and what is his position?" },
            { label: "You notice the word \"never.\"", any: ["never"],
              hint: "He *never* says it. Does that word matter?" },
        ],
    },
    {
        id: "dr-we", review: "scene-06",
        title: "\"We have been arranging\"",
        quote: "We have been arranging that you should go into a home",
        prompt: "Close-read the grammar of this sentence. Who acts, who is acted upon, and when was it decided?",
        checks: [
            { label: "You discuss the pronoun \"we.\"", any: ["\"we\"", "'we'", "the word we", "pronoun", "plural", "who is we", "who \"we\"", "collective"],
              hint: "Who could \"we\" include? Who is left out of it?" },
            { label: "You look at the tense \"have been arranging.\"", any: ["tense", "have been", "already", "before", "in advance", "ongoing", "past"],
              hint: "When did the arranging start, relative to this conversation?" },
            { label: "You consider \"you\" and Septimus's position.", any: ["\"you\"", "'you'", "septimus", "patient", "consult", "ask", "consent", "choice"],
              hint: "Was Septimus part of the decision?" },
            { label: "You notice the word \"home.\"", any: ["home"],
              hint: "\"Home\" usually means something else. What does it mean here?" },
        ],
    },
    {
        id: "dr-control", review: "scene-05",
        title: "Holmes on control",
        quote: "health is largely a matter in our own control.",
        prompt: "Close-read Dr. Holmes's sentence. What does it assume about illness, and about the person who is ill?",
        checks: [
            { label: "You discuss the word \"control.\"", any: ["control"],
              hint: "What does it mean for health to be \"in our control\"?" },
            { label: "You notice the qualifier \"largely.\"", any: ["largely", "mostly", "qualif", "hedge"],
              hint: "Not entirely, but \"largely.\" Does the softening change anything?" },
            { label: "You think about \"our.\"", any: ["\"our\"", "'our'", "the word our", "whose control", "pronoun"],
              hint: "Whose control? Does \"our\" include the doctor?" },
            { label: "You consider what this implies for someone who stays ill.", any: ["responsib", "blame", "fault", "choice", "choose", "will", "willpower", "effort"],
              hint: "If health is in your control, what does staying ill suggest?" },
        ],
    },
    {
        id: "dr-list", review: "mono-03",
        title: "The narrator's list",
        quote: "secluded her lunatics, forbade childbirth, penalised despair, made it impossible for the unfit to propagate their views",
        prompt: "Close-read the list of what \"Proportion\" did for England. Look at the verbs, the objects, and the tone.",
        checks: [
            { label: "You look closely at at least two of the verbs.", anyOf2: ["secluded", "forbade", "penalised", "penalized", "made it impossible", "impossible"],
              hint: "Secluded, forbade, penalised, made impossible: what kind of actions are these?" },
            { label: "You consider \"her\" (England).", any: ["england", "nation", "country", "her lunatics", "national"],
              hint: "\"Her\" refers back to England. Why might that matter?" },
            { label: "You think about the narrator's tone.", any: ["tone", "satir", "iron", "mock", "sarcas", "serious", "sincere", "approv", "critic", "neutral"],
              hint: "How does the narrator sound here? Admiring, mocking, matter-of-fact?" },
            { label: "You place it in historical context.", any: ["eugenic", "unfit", "1920", "1913", "history", "historical", "period", "at the time"],
              hint: "See the Eugenics card on the Home page." },
        ],
    },
    {
        id: "dr-fall", review: "mono-02",
        title: "\"Holmes and Bradshaw are on you\"",
        quote: "Once you fall, Septimus repeated to himself, human nature is on you. Holmes and Bradshaw are on you.",
        prompt: "Close-read Septimus's thought. What does he mean by \"human nature,\" and how much weight should a reader give it?",
        checks: [
            { label: "You discuss \"human nature.\"", any: ["human nature"],
              hint: "What is \"human nature\" to Septimus here?" },
            { label: "You look at \"fall.\"", any: ["fall"],
              hint: "What does it mean to \"fall\" in this sentence?" },
            { label: "You notice the repetition (\"is on you\" / \"are on you\").", any: ["repeat", "repetition", "twice", "parallel", "on you", "echo"],
              hint: "The sentence repeats a structure. What does repeating it do?" },
            { label: "You consider whose perspective this is and how reliable it is.", any: ["symptom", "paranoi", "illness", "insight", "accurate", "true", "reliab", "perspective", "point of view"],
              hint: "Is this only a symptom, or could it also be accurate? Or both?" },
        ],
    },
    {
        id: "dr-window", review: "mono-05",
        title: "At the window",
        quote: "He did not want to die. Life was good. The sun hot.",
        prompt: "Close-read the style of these three sentences. What do their form and content suggest at this moment?",
        checks: [
            { label: "You comment on the sentence length or structure.", any: ["short", "sentence", "rhythm", "simple", "fragment", "verb", "syntax", "brief"],
              hint: "Count the words. \"The sun hot\" has no verb. Why might that matter?" },
            { label: "You discuss \"did not want to die.\"", any: ["want to die", "did not want", "didn't want", "not want"],
              hint: "What does this line do to assumptions a reader might have?" },
            { label: "You look at the images of life and sun.", any: ["sun", "life was good", "warmth", "hot"],
              hint: "Why the sun, here?" },
            { label: "You connect it to what comes next (\"Only human beings\").", any: ["human", "people", "holmes", "doctor"],
              hint: "Read on a line. What is he contrasting life with?" },
        ],
    },
    {
        id: "dr-defiance", review: "scene-12",
        title: "\"Death was defiance\"",
        quote: "Death was defiance. Death was an attempt to communicate",
        prompt: "Close-read Clarissa's two sentences. What do the key words and the repetition do?",
        checks: [
            { label: "You discuss \"defiance.\"", any: ["defian", "defy"],
              hint: "Defiance of what, or of whom?" },
            { label: "You discuss \"communicate.\"", any: ["communicat", "message", "reach"],
              hint: "Communicate what, and to whom?" },
            { label: "You notice the repeated \"Death was.\"", any: ["repeat", "repetition", "twice", "parallel", "death was", "anaphora"],
              hint: "Both sentences start the same way. What does that do?" },
            { label: "You think about whose interpretation this is.", any: ["clarissa", "her view", "her reading", "party", "hostess", "she"],
              hint: "This is Clarissa's reading of a stranger's death. Does that matter?" },
        ],
    },
    {
        id: "dr-under", review: "mono-03",
        title: "\"Gone under\"",
        quote: "Fifteen years ago she had gone under.",
        prompt: "Close-read this short sentence about Lady Bradshaw and where it sits in the passage.",
        checks: [
            { label: "You discuss the phrase \"gone under.\"", any: ["gone under", "go under", "under", "sink", "drown", "submerg"],
              hint: "What images does \"gone under\" suggest?" },
            { label: "You consider the time marker \"fifteen years.\"", any: ["fifteen", "years", "time", "long ago", "past"],
              hint: "Why tell us how long ago?" },
            { label: "You identify who \"she\" is.", any: ["lady bradshaw", "wife", "his wife", "bradshaw's wife"],
              hint: "Who is \"she\"? Check the surrounding sentences." },
            { label: "You connect it to the passage around it.", any: ["conversion", "will", "proportion", "passage", "context", "sister"],
              hint: "This line sits inside the Proportion and Conversion passage. Why there?" },
        ],
    },
];
