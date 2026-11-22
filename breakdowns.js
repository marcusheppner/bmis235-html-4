/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Content for every scene (scene-01 ... scene-19) and monologue (mono-01 ... mono-17)
  breakdown. breakdown.html?id=scene-05 shows one of them.

  Each entry:
    title, who, where   - shown at the top
    happens             - what happens / develops / is conveyed (plain English)
    matters             - why it matters for the novel's themes
    themes              - tags
    quotes              - [ quote, underlying meaning ]  (you close-read these yourself)
    links               - related scene/monologue ids
*/

const BREAKDOWNS = {

/* ======================= SCENES ======================= */

"scene-01": {
    title: "\"Mrs. Dalloway said she would buy the flowers herself\"",
    who: "Clarissa", where: "Westminster to Bond Street, morning",
    happens: [
        "Clarissa steps out of her house in Westminster on a fine June morning to buy flowers for her party. The fresh air instantly carries her back more than thirty years to Bourton, her family's country house, and to Peter Walsh, the man she didn't marry.",
        "She crosses Victoria Street, Big Ben strikes, and she loves the noise and bustle of London. She bumps into Hugh Whitbread, an old friend, and feels slightly underdressed next to him. Walking through the park she thinks about Peter, about death, about the war being over, and finally arrives at Miss Pym's flower shop.",
    ],
    matters: "The opening teaches you how to read the whole book: present action (a walk) constantly interrupted by memory (Bourton), with Big Ben marking time. It also introduces Clarissa's love of life alongside her quiet awareness of death and of the war's grief under the surface.",
    themes: ["Time & memory", "Death", "War & its aftermath"],
    quotes: [
        ["Mrs. Dalloway said she would buy the flowers herself.",
         "A tiny, ordinary decision opens a major novel. It signals that this book finds meaning in everyday acts, and that Clarissa is first introduced by her married name, not her own."],
        ["What a lark! What a plunge!",
         "Joy and risk in one breath. \"Plunge\" also hints at a fall or dive, an early, quiet echo of Septimus's ending."],
        ["The leaden circles dissolved in the air.",
         "Big Ben's strokes spread out like ripples. \"Leaden\" makes time heavy and unavoidable even on a light, happy morning."],
        ["The War was over, except for some one like Mrs. Foxcroft",
         "The war is \"over\" officially, but not for the grieving. The sentence's own \"except\" shows how much grief the city is trying to look past."],
    ],
    links: ["mono-01", "mono-02", "mono-03", "mono-04"],
},

"scene-02": {
    title: "The motor car on Bond Street",
    who: "The crowd, Clarissa, Septimus", where: "Bond Street, late morning",
    happens: [
        "A loud bang, a car backfiring, makes Clarissa jump in the flower shop. A grand car with drawn blinds stops in traffic, and everyone in the street speculates about who is inside: the Queen? the Prime Minister?",
        "The narration hops from person to person in the crowd and lands on Septimus Warren Smith, a young veteran, standing with his wife Rezia. For him the moment is terrifying: the world seems to tremble and burst into flames, and he thinks he is the one blocking the way. Rezia, embarrassed, wants to get him home.",
    ],
    matters: "This is the first link between Clarissa and Septimus: two strangers hearing the same sound. It shows Woolf's method of moving between minds through shared experience, and it sets the respectable crowd's curiosity next to Septimus's private terror.",
    themes: ["Isolation & connection", "Septimus as double", "Stream of consciousness & style"],
    quotes: [
        ["Septimus Warren Smith, aged about thirty, pale-faced, beak-nosed",
         "We meet Septimus as a description from the outside, the way a stranger would see him, before we hear his thoughts. The flat, almost police-report tone makes him easy to overlook."],
        ["It is I who am blocking the way, he thought.",
         "Septimus turns a public event into a personal accusation. It shows guilt and paranoia, but also how alone he feels inside a crowd."],
        ["People must notice; people must see.",
         "Rezia's fear of being seen. The caregiver feels the social shame of mental illness as sharply as the patient feels the illness."],
    ],
    links: ["scene-03", "mono-08"],
},

"scene-03": {
    title: "The skywriting airplane",
    who: "Septimus, Rezia, the crowd", where: "The Mall and Regent's Park, late morning",
    happens: [
        "An airplane writes letters in smoke across the sky, an advertisement (the crowd tries to read \"Glaxo,\" \"Kreemo,\" \"toffee\"). Everyone looks up and guesses.",
        "Septimus believes the letters are a message being sent to him personally, and he is overwhelmed by the beauty of the world. Rezia, following Dr. Holmes's advice to make him take an interest in things outside himself, tries to get him to look, while privately suffering.",
    ],
    matters: "The same image means something different in every mind: commerce for some, wonder for others, a personal revelation for Septimus. It also introduces Dr. Holmes's dismissive view of his illness before we ever meet him.",
    themes: ["Isolation & connection", "Disability & medicine"],
    quotes: [
        ["So, thought Septimus, looking up, they are signalling to me.",
         "A classic sign of his illness (everything is about him), but also a sincere longing for meaning and communication that the \"healthy\" crowd doesn't feel."],
        ["Dr. Holmes had told her to make her husband (who had nothing whatever seriously the matter with him but was a little out of sorts) take an interest in things outside himself.",
         "The parentheses carry the doctor's voice into Rezia's thoughts, and the novel's irony: the doctor's breezy diagnosis is clearly wrong."],
    ],
    links: ["scene-02", "scene-07"],
},

"scene-04": {
    title: "Clarissa's attic room & the memory of Sally",
    who: "Clarissa", where: "Her house, late morning",
    happens: [
        "Clarissa comes home and learns that Lady Bruton has invited Richard to lunch without her, and the small snub hurts. She goes upstairs to her attic bedroom, where she has slept alone since her illness.",
        "She thinks about her coldness, her failures with Richard, and the moments when she felt what men feel for women. That leads to Sally Seton at Bourton: Sally's daring, and the night Sally kissed her on the terrace, which she remembers as the best moment of her life. Peter interrupted it.",
    ],
    matters: "This is the emotional core of Clarissa's inner life: aging, illness, a marriage without passion, and a desire for a woman that her world has no space for. Her narrow bed becomes a symbol of a narrowing life.",
    themes: ["Love, desire & queerness", "Time & memory", "Disability & medicine"],
    quotes: [
        ["Like a nun withdrawing, or a child exploring a tower, she went upstairs",
         "Two images of retreat: religious withdrawal and childish curiosity. Clarissa's privacy is both a refuge and a kind of self-denial."],
        ["Narrower and narrower would her bed be.",
         "Her single bed stands for aging, illness and a shrinking life, and even suggests a coffin."],
        ["there was an emptiness about the heart of life; an attic room.",
         "She names her own emptiness directly and locates it in a physical space, so the room and her heart become the same thing."],
        ["Sally stopped; picked a flower; kissed her on the lips.",
         "Short, separated clauses slow the moment down like a memory replayed. Flowers link this kiss back to the novel's first line."],
    ],
    links: ["mono-05", "scene-06"],
},

"scene-05": {
    title: "Peter's visit: the knife and the green dress",
    who: "Clarissa, Peter", where: "Clarissa's drawing room, late morning",
    happens: [
        "Clarissa is mending her green party dress when Peter Walsh, just back from India, arrives unannounced. Each silently judges the other: Peter keeps opening and closing his pocket-knife; Clarissa holds her needle and scissors.",
        "Peter tells her he is in love with a married woman in India. Then he suddenly bursts into tears. Clarissa comforts him and, for a moment, imagines what life with him would have been. Elizabeth walks in, the spell breaks, and Peter leaves as Clarissa calls after him to remember her party.",
    ],
    matters: "The book's central \"road not taken.\" The props (knife versus needle) turn their old relationship into a quiet duel, and the scene shows how much feeling both of them keep under polite surfaces.",
    themes: ["Love, desire & queerness", "Time & memory"],
    quotes: [
        ["If I had married him, this gaiety would have been mine all day!",
         "Clarissa admits what she gave up, while the exclamation mark hints she may be romanticizing it."],
        ["Take me with you, Clarissa thought impulsively",
         "A sudden wish to escape her life entirely. It stays a thought; she never says it."],
        ["Remember my party to-night!",
         "Her parting line returns to the safe social world. The party is her answer to every emotional crisis."],
    ],
    links: ["scene-06", "mono-07"],
},

"scene-06": {
    title: "Peter in Regent's Park: dream & memories of Bourton",
    who: "Peter", where: "Trafalgar Square to Regent's Park, midday",
    happens: [
        "Peter walks off his emotion, follows an attractive young woman through the streets in a little fantasy, then sits in Regent's Park and falls asleep. He half-dreams of a \"solitary traveller\" who meets a vast, comforting female figure.",
        "He wakes remembering Bourton: Clarissa's judgments, his jealousy of Richard, and the scene by the fountain where she refused to marry him. He remembers mocking her as \"the perfect hostess\" back then, and how much it hurt her.",
    ],
    matters: "Peter gives us an outside view of Clarissa, but a biased, wounded one. The scene also shows how memory and fantasy blur together.",
    themes: ["Time & memory", "Love, desire & queerness", "Class & empire"],
    quotes: [
        ["the solitary traveller",
         "Peter imagines himself as a lone wanderer seeking comfort, which tells us how he sees his own life."],
        ["The death of the soul.",
         "He wakes with this phrase. It is his verdict on what Clarissa's social world does to people, and maybe on what happened to their love."],
        ["'The perfect hostess,' he said to her, whereupon she winced all over.",
         "Praise used as an insult. He reduces Clarissa to her social role, and she feels it physically. It is the same reduction she fears in \"Mrs. Richard Dalloway.\""],
    ],
    links: ["mono-06", "mono-07", "scene-05"],
},

"scene-07": {
    title: "Septimus in the park: Evans and the birds",
    who: "Septimus, Rezia", where: "Regent's Park, midday",
    happens: [
        "Septimus and Rezia sit in Regent's Park waiting for their appointment with Sir William Bradshaw. Septimus experiences the world as overwhelming and alive: trees seem connected to his body, sparrows sing to him in Greek, and he sees his dead friend Evans coming toward him.",
        "He feels he has a message for humanity and scribbles revelations. Rezia, lonely and homesick for Italy, walks to the fountain and cries out that she is alone. Peter Walsh walks past them without understanding what he is seeing.",
    ],
    matters: "This is our deepest look inside Septimus's mind. Woolf writes his visions with real beauty, so the reader can't simply dismiss him as \"mad.\" Rezia's despair shows the cost to the person caring for him.",
    themes: ["Disability & medicine", "War & its aftermath", "Isolation & connection"],
    quotes: [
        ["Men must not cut down trees. There is a God.",
         "His \"messages\" sound like nonsense and like prophecy at once. Notice that they are about care, life and meaning, things the war destroyed."],
        ["No one kills from hatred.",
         "A strange, almost hopeful line from a man who watched killing. The war's violence, he suggests, came from something other than hate, perhaps from obedience or indifference."],
        ["I am alone; I am alone!",
         "Rezia's cry. In a book full of isolated minds, the caregiver's loneliness is one of the rawest."],
    ],
    links: ["mono-08", "mono-10", "scene-08"],
},

"scene-08": {
    title: "Septimus's backstory: the war and Dr. Holmes",
    who: "Septimus (narrated history)", where: "Flashback inside the park scene",
    happens: [
        "The narrator tells Septimus's history: a young clerk with literary dreams who fell in love with Shakespeare and with his teacher, Miss Isabel Pole. He volunteered early for the war, was praised as a soldier, and became close to his officer, Evans.",
        "When Evans was killed just before the Armistice, Septimus felt almost nothing, and that numbness terrified him. In Milan he got engaged to Rezia. Back in London he broke down. Dr. Holmes insisted there was nothing wrong and prescribed porridge, hobbies and willpower.",
    ],
    matters: "This explains the trauma behind Septimus's symptoms and shows the first doctor's response: denial. It is a key passage for discussing shell shock and how society treated it.",
    themes: ["War & its aftermath", "Disability & medicine"],
    quotes: [
        ["He went to France to save an England which consisted almost entirely of Shakespeare's plays and Miss Isabel Pole in a green dress walking in a square.",
         "The England he fought for was a romantic, literary dream. The gap between that dream and the real war is part of what breaks him."],
        ["congratulated himself upon feeling very little and very reasonably.",
         "Numbness disguised as strength, exactly what the culture praised in soldiers. Woolf shows that \"manly\" control as a symptom."],
        ["he could not feel.",
         "The core of his illness in four words. For Septimus, not feeling is the horror."],
    ],
    links: ["mono-09", "scene-09"],
},

"scene-09": {
    title: "Sir William Bradshaw: \"Proportion\" and \"Conversion\"",
    who: "Septimus, Rezia, Sir William Bradshaw", where: "Harley Street, noon",
    happens: [
        "At exactly noon, Septimus and Rezia see Sir William Bradshaw, a famous specialist. In a short appointment, Bradshaw decides that Septimus must be sent to a home in the country, separated from his wife, to rest and learn a \"sense of proportion.\"",
        "Then the narrator steps back and attacks Bradshaw directly: his goddess Proportion, her crueler sister Conversion, and the way he uses them to shut away people who don't fit and to crush his own wife's will.",
    ],
    matters: "The novel's sharpest critique of medical power, and the central passage for a disability-studies reading. Bradshaw never even says \"madness\"; he simply redefines it as a lack of proportion, a moral failure.",
    themes: ["Disability & medicine", "Class & empire"],
    quotes: [
        ["Proportion, divine proportion, Sir William's goddess",
         "\"Normal\" behavior is turned into a religion. Calling it a goddess shows how unquestioned, and how demanding, that standard is."],
        ["Conversion is her name and she feasts on the wills of the weakly",
         "Conversion means forcing others to become like you. \"Feasts\" makes it predatory: it consumes the people it claims to help."],
        ["secluded her lunatics, forbade childbirth, penalised despair",
         "A chilling list of what \"Proportion\" does to a nation. Woolf links Bradshaw's medicine to wider social control, including eugenic ideas."],
    ],
    links: ["mono-11", "scene-15"],
},

"scene-10": {
    title: "Lunch at Lady Bruton's",
    who: "Richard, Hugh Whitbread, Lady Bruton", where: "Brook Street, early afternoon",
    happens: [
        "Richard Dalloway and Hugh Whitbread lunch with Lady Bruton, a powerful aristocrat. She mentions that Peter Walsh is back in town, which stirs Richard's memories.",
        "The real purpose is a letter to The Times about her pet project: emigrating young English people to Canada. Hugh, the polished courtier, drafts it, and the men flatter her.",
    ],
    matters: "A portrait of the establishment at work: powerful, confident and slightly absurd. Lady Bruton's emigration scheme is another version of \"Proportion\": deciding what is good for other people's lives.",
    themes: ["Class & empire"],
    quotes: [
        ["that project for emigrating young people of both sexes born of respectable parents",
         "Social engineering in polite language. \"Respectable parents\" shows the class assumptions behind it."],
    ],
    links: ["scene-11"],
},

"scene-11": {
    title: "Richard's roses",
    who: "Richard, Clarissa", where: "Westminster, afternoon",
    happens: [
        "Stirred by talk of Peter, Richard buys Clarissa a big bunch of red and white roses and walks home planning to tell her, in so many words, that he loves her. When he arrives, he hands her the flowers but can't say it.",
        "After he leaves, Clarissa reflects on the dignity of keeping some distance even in marriage, and on what her parties mean to her: an offering, a way of bringing people together.",
    ],
    matters: "A tender, almost comic study of emotional reserve. It also contains Clarissa's own defense of her parties against Peter's criticism.",
    themes: ["Love, desire & queerness", "Isolation & connection"],
    quotes: [
        ["There is a dignity in people; a solitude; even between husband and wife a gulf",
         "Clarissa defends privacy as something precious, even in marriage. Is it wisdom, or a justification for distance?"],
        ["it was an offering; to combine, to create",
         "Her parties as a creative act, almost an art form. This is her answer to Peter's sneer about the \"perfect hostess.\""],
    ],
    links: ["scene-17", "mono-13"],
},

"scene-12": {
    title: "Miss Kilman at the Army & Navy Stores",
    who: "Miss Kilman, Elizabeth (and Clarissa before)", where: "Victoria Street, afternoon",
    happens: [
        "Miss Kilman, Elizabeth's tutor, arrives to take Elizabeth shopping. She and Clarissa despise each other; Clarissa thinks love and religion both destroy people. Watching the old lady in the house opposite, Clarissa reflects on the privacy of each soul.",
        "At the Army & Navy Stores, Miss Kilman, poor, bitter, and lonely, eats greedily and tries desperately to keep hold of Elizabeth. Elizabeth politely leaves, and Miss Kilman is left humiliated, stumbling into Westminster Cathedral to pray.",
    ],
    matters: "Miss Kilman is both a threat (a \"converter\" like Bradshaw) and a victim: she lost her job in the war because of her German name. Her body, her hunger and her poverty make her one of the book's outsiders.",
    themes: ["Class & empire", "Isolation & connection", "Disability & medicine"],
    quotes: [
        ["If she could have felled her it would have eased her.",
         "Kilman's rage toward Clarissa is physical. It shows how class resentment can turn into a wish to dominate."],
        ["Love and religion! thought Clarissa",
         "Clarissa lumps them together as forces that try to possess other people, an idea that shapes her whole worldview."],
        ["here was one room; there another.",
         "The old lady's window across the street becomes Clarissa's image for the separateness of every person."],
    ],
    links: ["mono-12", "mono-13", "scene-13"],
},

"scene-13": {
    title: "Elizabeth on the omnibus",
    who: "Elizabeth", where: "Victoria Street up the Strand, afternoon",
    happens: [
        "Free of Miss Kilman, Elizabeth gets on an omnibus and rides up the Strand alone, a small adventure. The bus charges forward like a pirate ship.",
        "Surrounded by the busy, working city, she imagines having a profession: maybe a doctor, a farmer, or even going into Parliament. Then she remembers the party and heads home.",
    ],
    matters: "A brief glimpse of the next generation of women and the possibilities opening for them after the war, in contrast to Clarissa's limited choices.",
    themes: ["Class & empire", "Time & memory"],
    quotes: [
        ["She would become a doctor, a farmer, possibly go into Parliament",
         "A young woman imagining public, working lives. The careers listed were mostly closed to Clarissa's generation."],
    ],
    links: ["scene-12"],
},

"scene-14": {
    title: "Making the hat",
    who: "Septimus, Rezia", where: "Their lodgings, early evening",
    happens: [
        "At home, Rezia trims a hat for a client. Septimus, calmer, starts helping and joking about the design. For a while they are simply a happy young couple, laughing together.",
        "The peace is fragile: Rezia remembers that he will be taken away, and Septimus's fears creep back. They promise each other nothing will separate them.",
    ],
    matters: "A crucial moment of clarity and tenderness that shows who Septimus is beyond his illness. It makes what comes next more painful.",
    themes: ["Disability & medicine", "Isolation & connection"],
    quotes: [
        ["Never had he done anything which made him feel so proud.",
         "Creative, shared work gives him the pride and connection the doctors never offer. A quiet argument for a different kind of care."],
    ],
    links: ["scene-15"],
},

"scene-15": {
    title: "Septimus's death",
    who: "Septimus, Rezia, Dr. Holmes", where: "Their lodgings, evening",
    happens: [
        "Dr. Holmes arrives to take Septimus away. Rezia tries to stop him on the stairs. Septimus, alone in the room, considers ways to die and doesn't want to. Then, as Holmes comes up, he jumps from the window onto the railings below.",
        "Holmes calls him a coward. Rezia is given a sedative, and in her drugged half-sleep she feels peaceful and remembers happy things.",
    ],
    matters: "The climax of Septimus's story. Woolf frames his death as a refusal of the doctors' power as much as an act of despair, which is why Clarissa later calls it \"defiance.\"",
    themes: ["Death", "Disability & medicine"],
    quotes: [
        ["He did not want to die. Life was good. The sun hot.",
         "He loves life even now. His death is not about wanting to die, which complicates any simple reading of it."],
        ["Only human beings",
         "The problem, for Septimus, is other people, specifically the people with power over him."],
        ["The coward!",
         "Holmes's verdict. It repeats the era's view of shell-shocked soldiers as cowards, and shows the doctor learned nothing."],
    ],
    links: ["mono-15", "scene-16", "scene-18"],
},

"scene-16": {
    title: "The ambulance: \"one of the triumphs of civilisation\"",
    who: "Peter", where: "Near Peter's hotel, evening",
    happens: [
        "Walking to his hotel, Peter hears an ambulance bell racing through the streets and admires how efficient and organized London is. He doesn't know it carries Septimus.",
        "He reflects on his life and feelings, then reads a letter from Clarissa at the hotel and decides to go to her party after all.",
    ],
    matters: "Dramatic irony: Peter praises the system that has just failed Septimus. It's the closest the two plotlines come before the party.",
    themes: ["Class & empire", "Isolation & connection"],
    quotes: [
        ["One of the triumphs of civilisation, Peter Walsh thought.",
         "Bitter irony: the \"civilisation\" he praises is the same system that drove Septimus to his death."],
    ],
    links: ["scene-15", "scene-17"],
},

"scene-17": {
    title: "The party: old friends return",
    who: "Clarissa, Peter, Sally, the Prime Minister and guests", where: "The Dalloways' house, night",
    happens: [
        "The party begins badly; Clarissa fears it will be a failure. Then the rooms fill, the Prime Minister arrives, and she is swept up in hosting.",
        "Sally Seton, now Lady Rosseter with five boys, appears unexpectedly. She and Peter sit together and look back on Bourton and on Clarissa, judging what has happened to everyone.",
    ],
    matters: "Every thread meets here: class, the past, love and social performance. The party is both Clarissa's triumph and the place where her deepest private moment happens.",
    themes: ["Class & empire", "Time & memory", "Isolation & connection"],
    quotes: [
        ["it was going to be a failure; a complete failure",
         "Even the perfect hostess is anxious. Her social confidence is fragile."],
        ["What does the brain matter",
         "Sally, older now, values feeling over intellect. It's her mature version of the wild girl from Bourton."],
    ],
    links: ["scene-18", "scene-19"],
},

"scene-18": {
    title: "The little room: Clarissa hears of the death",
    who: "Clarissa", where: "A small room off the party, night",
    happens: [
        "Lady Bradshaw mentions that a young man, a patient of Sir William's, has killed himself. Clarissa is shocked that death has entered her party, and she slips into a small empty room.",
        "Imagining his fall, she thinks of death as defiance and an attempt to communicate. She suspects Bradshaw made his life unbearable. She feels very like this stranger, and glad he did it. Watching the old lady across the way go to bed, she returns to her guests.",
    ],
    matters: "The moment the two halves of the novel meet. Readers debate whether it's real empathy or Clarissa turning a stranger's death into her own private revelation.",
    themes: ["Septimus as double", "Death", "Isolation & connection"],
    quotes: [
        ["in the middle of my party, here's death",
         "Death intrudes on her carefully built world, exactly what the party was designed to keep out."],
        ["Death was defiance. Death was an attempt to communicate",
         "Clarissa reinterprets suicide as a message, possibly the communication Septimus couldn't achieve in life."],
        ["She felt somehow very like him",
         "The explicit link between the doubles. \"Somehow\" admits she can't fully explain it."],
        ["The old lady had put out her light!",
         "A small, ordinary image of another separate life, and of quiet endings, that calms Clarissa enough to return."],
    ],
    links: ["mono-16", "scene-15", "scene-19"],
},

"scene-19": {
    title: "\"For there she was\"",
    who: "Peter, Sally", where: "The party, end of the night",
    happens: [
        "Sally gets up to say goodbye to Richard. Peter sits a moment longer and feels a sudden, overwhelming excitement, then sees Clarissa coming toward him.",
        "The novel ends on that sight, not on Clarissa's thoughts but on her presence.",
    ],
    matters: "An open, almost mystical ending. After a day spent inside people's heads, the book closes on the simple fact of someone being there.",
    themes: ["Isolation & connection", "Love, desire & queerness"],
    quotes: [
        ["What is this terror? what is this ecstasy?",
         "Fear and joy together, the same mixture Clarissa felt at the very start."],
        ["For there she was.",
         "The last line affirms Clarissa's presence. After all the interior narration, she is seen whole from outside."],
    ],
    links: ["mono-17", "scene-18"],
},

/* ======================= MONOLOGUES ======================= */

"mono-01": {
    title: "\"What a lark! What a plunge!\"",
    who: "Clarissa", where: "Opening, Westminster",
    happens: [
        "As Clarissa steps out, the morning air sends her mind back to being eighteen at Bourton, bursting through the French windows into the fresh air. She remembers feeling both thrilled and certain that something awful was about to happen, and Peter teasing her as she stood among the vegetables.",
    ],
    matters: "The first stream-of-consciousness passage. It sets up the pattern of present and past layered together, and the double feeling of joy and dread that defines Clarissa.",
    themes: ["Time & memory", "Stream of consciousness & style"],
    quotes: [
        ["What a lark! What a plunge!",
         "Joy and risk, and an early echo of a fall."],
        ["something awful was about to happen",
         "Even her happiest memory holds dread. Clarissa's joy is never simple."],
        ["Musing among the vegetables?",
         "Peter's teasing line, remembered word for word. He is already in her head before he arrives."],
    ],
    links: ["scene-01"],
},

"mono-02": {
    title: "\"She sliced like a knife through everything\"",
    who: "Clarissa", where: "Walking through the park toward Bond Street",
    happens: [
        "Clarissa reflects that she won't sum up anyone anymore, not even herself. She feels both deeply involved in life and somehow outside it, watching, and that living even one day is dangerous.",
    ],
    matters: "Her clearest statement of her split, watchful self, and of the isolation that links her to Septimus.",
    themes: ["Isolation & connection", "Stream of consciousness & style"],
    quotes: [
        ["She sliced like a knife through everything; at the same time was outside, looking on.",
         "Sharp engagement and cool detachment at once. The knife image also echoes Peter's pocket-knife."],
        ["She would not say of any one in the world now that they were this or were that.",
         "A refusal to label people, in a book full of characters labeling each other."],
        ["it was very, very dangerous to live even one day.",
         "Ordinary life as a risk. Clarissa understands fragility in a way that connects her to Septimus."],
    ],
    links: ["scene-01"],
},

"mono-03": {
    title: "\"Mrs. Richard Dalloway\"",
    who: "Clarissa", where: "Bond Street",
    happens: [
        "Walking up Bond Street, Clarissa suddenly feels invisible: past marrying and having children, she is no longer Clarissa but simply Richard's wife.",
    ],
    matters: "A key passage about identity, gender and aging. It's the private fear behind her public confidence.",
    themes: ["Class & empire", "Love, desire & queerness"],
    quotes: [
        ["She had the oddest sense of being herself invisible; unseen; unknown",
         "The semicolons pile up her disappearance step by step."],
        ["this being Mrs. Richard Dalloway.",
         "Her identity is swallowed by her husband's name. Compare it to the novel's own title."],
    ],
    links: ["scene-01"],
},

"mono-04": {
    title: "\"Fear no more the heat o' the sun\"",
    who: "Clarissa", where: "Hatchards' bookshop window",
    happens: [
        "Clarissa sees a book open in a shop window to a song from Shakespeare's Cymbeline. It leads her to wonder whether it matters that she will die. She finds comfort in the idea that she will survive in the streets, the trees and the people she knows.",
    ],
    matters: "The first appearance of the line that links her to Septimus, and her personal answer to death: survival through connection.",
    themes: ["Death", "Septimus as double"],
    quotes: [
        ["Fear no more the heat o' the sun",
         "A funeral song about release from life's hardships. Clarissa and Septimus both return to it."],
        ["did it matter that she must inevitably cease completely",
         "A calm, direct question about mortality, asked while shopping."],
        ["laid out like a mist between the people she knew best",
         "Her idea of surviving death: spread thinly through other people, not in heaven."],
    ],
    links: ["scene-01", "scene-18"],
},

"mono-05": {
    title: "The attic room & Sally",
    who: "Clarissa", where: "Her attic bedroom",
    happens: [
        "Alone in her narrow bed, Clarissa confronts her coldness and remembers moments of desire for women, above all Sally Seton's kiss at Bourton.",
    ],
    matters: "The most direct expression of Clarissa's queer desire and her sense of a life narrowed by illness and convention.",
    themes: ["Love, desire & queerness", "Disability & medicine"],
    quotes: [
        ["Narrower and narrower would her bed be.",
         "Illness and age shrink her world."],
        ["she did undoubtedly then feel what men felt.",
         "Clarissa reaches for words her society doesn't give her to name her desire for women."],
        ["The whole world might have turned upside down!",
         "Her memory of the kiss: one moment that could have changed everything."],
    ],
    links: ["scene-04"],
},

"mono-06": {
    title: "The solitary traveller",
    who: "Peter", where: "Asleep in Regent's Park",
    happens: [
        "As Peter dozes, the narration drifts into a dreamlike vision of a solitary traveller who meets a giant female figure, part nature and part mother, offering comfort and release.",
    ],
    matters: "One of the hardest passages in the book. Read it as Peter's longing for comfort and his loneliness after India.",
    themes: ["Isolation & connection", "Stream of consciousness & style"],
    quotes: [
        ["the solitary traveller",
         "Peter's self-image: a wanderer without a home."],
        ["Such are the visions which ceaselessly float up",
         "The narrator steps back to comment on dreams in general, showing how fantasy layers over \"the actual thing.\""],
    ],
    links: ["scene-06"],
},

"mono-07": {
    title: "\"The death of the soul\"",
    who: "Peter", where: "Waking in Regent's Park",
    happens: [
        "Peter wakes with the phrase \"the death of the soul\" and connects it to a scene at Bourton: Clarissa primly judging a neighbor who had a baby before marriage. He relives his jealousy of Richard and the fountain scene where she refused him.",
    ],
    matters: "Peter's harshest judgment of Clarissa: that her world kills something alive in people. Is he right, or bitter?",
    themes: ["Class & empire", "Love, desire & queerness", "Time & memory"],
    quotes: [
        ["The death of the soul.",
         "Peter's verdict on conformity, and maybe on Clarissa."],
        ["'The perfect hostess,' he said to her, whereupon she winced all over.",
         "A compliment used as an attack, and Clarissa still remembers the sting (in the opening she recalls that \"the perfect hostess he called her\" and that she cried over it)."],
    ],
    links: ["scene-06", "scene-05"],
},

"mono-08": {
    title: "Septimus's messages",
    who: "Septimus", where: "Regent's Park",
    happens: [
        "Septimus experiences a kind of revelation: everything is connected, the trees are alive, the dead walk, and he must tell the world. He writes down his messages while Rezia sits beside him, desperate.",
    ],
    matters: "Madness and prophecy at once. Woolf writes it beautifully enough that we can't simply dismiss it.",
    themes: ["Disability & medicine", "War & its aftermath"],
    quotes: [
        ["Men must not cut down trees. There is a God.",
         "Care for living things, and a demand for meaning."],
        ["No one kills from hatred.",
         "A veteran's strange insight into the war's violence."],
    ],
    links: ["scene-07"],
},

"mono-09": {
    title: "\"Human nature, in short, was on him\"",
    who: "Septimus", where: "Memory of his breakdown",
    happens: [
        "After the war Septimus rereads Shakespeare and decides that Shakespeare loathed humanity. He comes to see people as brutes, and the doctors who keep visiting as the worst of them.",
    ],
    matters: "His trauma turns into a judgment of the whole human world, and of the medical system in particular.",
    themes: ["Disability & medicine", "War & its aftermath"],
    quotes: [
        ["How Shakespeare loathed humanity",
         "The literature he went to war for now reads, to him, as disgust with people."],
        ["Human nature, in short, was on him",
         "\"Human nature\" becomes a predator, and in the next breath he names Holmes."],
    ],
    links: ["scene-08"],
},

"mono-10": {
    title: "\"I am alone; I am alone!\"",
    who: "Rezia", where: "By the fountain in Regent's Park",
    happens: [
        "Rezia walks away from Septimus, overwhelmed. She thinks of Italy, of her sisters making hats in Milan, of how far she is from home, and cries out that she is alone.",
    ],
    matters: "The caregiver's inner life. Easy to skip, and important for disability readings.",
    themes: ["Isolation & connection", "Disability & medicine"],
    quotes: [
        ["I am alone; I am alone!",
         "The repetition makes it a cry, not a statement."],
    ],
    links: ["scene-07"],
},

"mono-11": {
    title: "Proportion & Conversion",
    who: "The narrator", where: "After Bradshaw's appointment",
    happens: [
        "The narrator steps out of the characters' heads to describe and condemn Bradshaw's philosophy: worshipping Proportion and her sister Conversion, shutting away people who don't conform, and slowly crushing his own wife's will.",
    ],
    matters: "The novel's most openly angry passage, and the central one for discussing medical power and disability.",
    themes: ["Disability & medicine", "Class & empire"],
    quotes: [
        ["Proportion, divine proportion, Sir William's goddess",
         "\"Normal\" as a religion."],
        ["Conversion is her name and she feasts on the wills of the weakly",
         "Forcing conformity is predatory."],
        ["secluded her lunatics, forbade childbirth, penalised despair",
         "Medicine as national social control."],
    ],
    links: ["scene-09"],
},

"mono-12": {
    title: "Miss Kilman and the flesh",
    who: "Miss Kilman", where: "Army & Navy Stores",
    happens: [
        "Inside Miss Kilman's mind: her poverty, her religious struggle to master her body and her hatred, her desire to possess Elizabeth, and her humiliation when Elizabeth leaves.",
    ],
    matters: "A painful portrait of an outsider. Woolf makes her both unpleasant and pitiable.",
    themes: ["Class & empire", "Isolation & connection"],
    quotes: [
        ["If she could have felled her it would have eased her.",
         "Resentment as a physical urge."],
        ["Don't quite forget me",
         "Her pathetic plea to Elizabeth. The \"converter\" is herself desperately lonely."],
    ],
    links: ["scene-12"],
},

"mono-13": {
    title: "\"The privacy of the soul\"",
    who: "Clarissa", where: "After Miss Kilman leaves",
    happens: [
        "Clarissa thinks that love and religion are the cruelest forces because they try to take over another person. Watching the old lady opposite move about her room, she sees a mystery: each person separate, in their own room.",
    ],
    matters: "Clarissa's deepest belief, and it explains both her coldness and her respect for others.",
    themes: ["Isolation & connection", "Love, desire & queerness"],
    quotes: [
        ["Love and religion! thought Clarissa",
         "Two forces she distrusts because both try to possess people."],
        ["here was one room; there another.",
         "Separateness as the basic fact of human life."],
    ],
    links: ["scene-12", "scene-18"],
},

"mono-14": {
    title: "Elizabeth's future",
    who: "Elizabeth", where: "On the omnibus",
    happens: [
        "Riding up the Strand alone, Elizabeth imagines a working life, a profession, inspired by the busy city around her.",
    ],
    matters: "A hopeful counterpoint: the next generation of women has options Clarissa never had.",
    themes: ["Class & empire"],
    quotes: [
        ["She would become a doctor, a farmer, possibly go into Parliament",
         "Imagined independence."],
    ],
    links: ["scene-13"],
},

"mono-15": {
    title: "\"He did not want to die\"",
    who: "Septimus", where: "At the window",
    happens: [
        "Alone as Holmes climbs the stairs, Septimus considers his options. He loves life, the sun, but cannot bear what people will do to him. He jumps.",
    ],
    matters: "His death is not a wish for death. It is a refusal, and that is what Clarissa understands later.",
    themes: ["Death", "Disability & medicine"],
    quotes: [
        ["He did not want to die. Life was good. The sun hot.",
         "Short sentences of plain love for life."],
        ["Only human beings",
         "The threat is people, not life itself."],
        ["I'll give it you!",
         "His last words, thrown at Holmes. Defiance, even sarcasm, rather than surrender."],
    ],
    links: ["scene-15"],
},

"mono-16": {
    title: "\"Death was defiance\"",
    who: "Clarissa", where: "The little room at the party",
    happens: [
        "Clarissa imagines the young man's death, thinks of it as a defiant act that preserved something she has lost, blames Bradshaw, and feels very like him, then returns to her party.",
    ],
    matters: "The novel's emotional and structural climax. Ask: empathy or appropriation?",
    themes: ["Septimus as double", "Death"],
    quotes: [
        ["Death was defiance. Death was an attempt to communicate",
         "Suicide reread as a message."],
        ["A thing there was that mattered",
         "Clarissa senses that she has let something essential slip away in her own life, and that he kept it."],
        ["She felt glad that he had done it; thrown it away.",
         "A shocking, uncomfortable line. Discuss what \"glad\" means here."],
    ],
    links: ["scene-18"],
},

"mono-17": {
    title: "\"What is this terror? what is this ecstasy?\"",
    who: "Peter", where: "The end of the party",
    happens: [
        "Peter feels a rush of overwhelming emotion as Clarissa approaches, and the book ends with her presence.",
    ],
    matters: "An ending that refuses to explain. It simply affirms that she is there.",
    themes: ["Love, desire & queerness", "Isolation & connection"],
    quotes: [
        ["What is this terror? what is this ecstasy?",
         "The same mix of dread and joy as the opening."],
        ["It is Clarissa, he said.",
         "Peter finally names what he feels. The answer to his question is a person."],
        ["For there she was.",
         "Presence over explanation."],
    ],
    links: ["scene-19"],
},

};
