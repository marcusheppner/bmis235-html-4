# Prescribing the Normal: medicine in Mrs. Dalloway

**Name:** Marcus Heppner
**GU username:** marcusheppner
**Course:** BMIS 235 · HTML-4

Reference points for exploring how medicine in Virginia Woolf's *Mrs. Dalloway* (1925) relates to social expectations and norms. Built for an English class on disability in literature.

**Problem it solves:** *Mrs. Dalloway* is hard to read, and the assignment asks for close analysis of one theme. The site helps a student follow the medical storyline, find and cite key passages, practice close reading with feedback, connect the text to class discussion, and track progress, so they can develop their own argument. See "What this site is for" on the Home page.

**Approach:** the site helps with *reading* (plot summaries, plain-English versions of quotes, historical facts) and points toward things to notice, but leaves the interpretation and argument to the student. New content should follow the same rule: summaries, quotes and open questions, not finished analysis.

Live site (once GitHub Pages is on): https://marcusheppner.github.io/bmis235-html-4/

## Pages

- `index.html`: Home. The core idea, the story through the medical lens, historical context, key ideas, the medical cast, Woolf and her doctors, critical lenses, and thesis starting points.
- `scenes.html` + `scenes.js`: Key scenes (12) and monologues (7) about medicine and norms, built from `breakdowns.js`.
- `breakdown.html` + `breakdown.js` + `breakdowns.js`: One page that shows any breakdown (`breakdown.html?id=scene-05`, `?id=mono-03`). It covers what happens, why it matters, key quotes with their underlying meaning, a page-number finder (photograph your book page), and a box for your own close reading. All content lives in `breakdowns.js`.
- `ocr.js`: Shared photo-reading helpers (Tesseract.js) used by the page finder.
- `podcast.html` + `podcast.js`: Two hosts debate a question about the novel (read aloud by the browser), then you record or write your own take.
- `discussion.html` + `discussion-data.js`: Class Discussion. Class notes organized by topic, with related quotes, page estimates and questions for taking each idea further. Add new class sessions to `discussion-data.js`.
- `notes.html` + `notes.js`: Discussion Chat. Answers questions from the class discussion notes first, then the site's theme guide (keyword matching, not AI).
- `quiz.html` + `quiz.js` + `quiz-data.js`: Quiz. Reading check (with answers), close-reading drills with a passage-specific checklist (no answer key; feedback mode is set up so an AI option could be added later), and a progress tracker. Drill answers share storage with each breakdown's "My close reading" box.
- `styles.css`: Shared styles for every page.

## Notes

- The notes chat matches keywords against a built-in guide to the novel. It is not an AI model. To teach it something new, add a topic or keywords in `notes.js`.
- Photos are read with [Tesseract.js](https://tesseract.projectnaptha.com/), loaded from a CDN the first time you add a photo (so it needs an internet connection). You can edit the text it reads before saving.
- Notes, note photos (as small previews) and written podcast takes are saved in your browser (localStorage), so they don't sync between devices. Use "Download notes" to keep a copy.
- To add a podcast episode, copy one object in the `EPISODES` list in `podcast.js`.
