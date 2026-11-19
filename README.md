# Reading Mrs. Dalloway: a study tool

**Name:** Marcus Heppner
**GU username:** marcusheppner
**Course:** BMIS 235 · HTML-4

An interactive study tool for Virginia Woolf's *Mrs. Dalloway* (1925), built for an English class on disability in literature.

Live site (once GitHub Pages is on): https://marcusheppner.github.io/bmis235-html-4/

## Pages

- `index.html`: Home. Synopsis, how to read stream of consciousness, historical context, themes, characters as literary devices, and Virginia Woolf's life.
- `scenes.html`: Key scenes. A map of 19 key moments in order (breakdowns coming later).
- `podcast.html` + `podcast.js`: Two hosts debate a question about the novel (read aloud by the browser), then you record or write your own take.
- `notes.html` + `notes.js`: Class notes chat. Send in notes from class and get them linked to themes, characters, scenes, and your earlier notes.
- `styles.css`: Shared styles for every page.

## Notes

- The notes chat matches keywords against a built-in guide to the novel. It is not an AI model. To teach it something new, add a topic or keywords in `notes.js`.
- Notes and written podcast takes are saved in your browser (localStorage), so they don't sync between devices. Use "Download notes" to keep a copy.
- To add a podcast episode, copy one object in the `EPISODES` list in `podcast.js`.
