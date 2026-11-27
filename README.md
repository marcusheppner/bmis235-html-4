# Embedding 101: Images, Video & Live Dashboards

**Name:** Marcus Heppner
**GU username:** marcusheppner
**Course:** BMIS 235 · Final

Live site (Cloudflare): https://bmis235-html-4-html-2-guide.pages.dev/

Backup (GitHub Pages): https://marcusheppner.github.io/bmis235-html-4/

## What it teaches
How to bring images, videos and interactive tools (like a Google Map) into a web page,
who controls each piece (owned, linked, embedded, built), and how to find and fix the
mistakes that break them. Based on the BMIS 235 HTML-2 assignment, "Embedding: Mind, Body, Craft."

**The problem it solves:** in HTML-2, a page has pictures, links and videos that look almost
identical in the code, but some are broken by a single wrong letter. This site teaches each kind
of embed, then gives practice finding those errors, with feedback.

**End goal:** a classmate can add an image, a jump link, a YouTube video and a map with correct
syntax; explain who controls each; and find and fix errors in the pencil editor.

## Pages
- `index.html` — **Guide**: why embed, owned/linked/embedded/built, live examples (image, video,
  map, script), and five step-by-step guides with tips for spotting errors.
- `podcast.html` + `podcast.js` — **Podcast**: six audio lessons read by the browser, with a
  transcript, timestamps, speed control and skip buttons.
- `scenarios.html` + `scenarios.js` + `scenarios-data.js` — **Scenarios**: seven real-world
  situations with broken code to fix in a live editor, with checks, hints and a fix to compare.
- `quiz.html` + `quiz.js` + `quiz-data.js` — **Quiz**: correct syntax, spot the error, and
  progress (including scenarios).
- `gallery.html` — my own embed page, built by hand in the pencil editor.
- `my-gallery.html` — **My Gallery**: shows `gallery.html` inside the site (with the site menu) using an iframe; `gallery.html` itself is unchanged.
- `styles.css` — shared styles. `images/` — the site's own (owned) images.

## My path
Path 2: Full build

## Built for how I learn
I learn best by doing, with something to listen to alongside it. So the site has three ways in:
- **Step-by-step guides** (Guide page), each with a "spotting errors" checklist for the pencil editor.
- **Audio lessons** (Podcast page), so I can listen and follow along with the transcript.
- **Hands-on practice** (Scenarios page): I fix real broken code, update the preview to see what changed, then check my work. Hints come one at a time before the answer, and a "How to use this page" box explains every button.
- **A quiz with progress tracking** that points back to the guide section for anything I miss.

## Classmate test + one fix
**Who tested it:** my brother tried the Podcast, Scenarios and Quiz on the live site.

**What he found:** in the jump-link scenario ("The menu that won't jump"), clicking the picture in
the preview opened a second copy of the Embedding 101 home page in a new tab instead of jumping
to the cooking video. His link was missing the `#`, so the preview treated it as a link to a
different page.

**The fix:** the preview now stays put and explains the mistake: a link without `#` gets a note
saying it points to another page and that jump links start with `#`; a link whose id doesn't
match gets a "nothing to jump to" note; and a correct link scrolls to the video inside the preview
box only, without scrolling the whole page.
(Commits: "Scenario preview: explain broken jump links instead of opening a new tab" and
"Scenario preview: jump links scroll only inside the preview".)

**Another bug I found myself:** the podcast's skip ±15 seconds buttons only moved about 7–8
seconds. Now they skip to the right spot.

## By hand vs by AI
**I made:**
- The teaching plan: which HTML-2 skills to teach, in what order, and for whom.
- The site structure (Guide, Podcast, Scenarios, My Gallery, Quiz) and what each part should do,
  plus the decisions about what to cut or change while building. For example, I put My Gallery
  before the Quiz in the menu and asked for "How to use this page" directions on the Scenarios page.
- `gallery.html`, my example embed page, written by hand in the GitHub pencil editor with my own
  images (`burrow.jpeg`, `lamb.jpg`), jump links, YouTube videos and a Google Map.
- The site's look: I edited `styles.css` myself to use Gonzaga navy and red (#041E42, #C8102E),
  a navy glow in the page header, new fonts (Montserrat and Source Sans 3) and rounder corners.
- The testing, and every bug report and change request (see "I checked it by").

**AI made:** the HTML, CSS and JavaScript for the Guide, Podcast, Scenarios, Quiz and My Gallery
pages; the podcast scripts, scenarios and quiz questions; and the code for the bug fixes I asked
for (Claude, via Claude Code).

**I checked it by:**
- Going through the Podcast (playing episodes, using skip, speed and the transcript), the
  Scenarios (fixing them and using the check, hint and reset buttons) and the Quiz myself on the
  live site.
- Having my brother test the same three pages as a classmate would.
- Reporting the bugs we found (podcast skips moving only 7–8 seconds, and the scenario jump link
  opening the home page), then retesting after each fix to confirm it worked.
