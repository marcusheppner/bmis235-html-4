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
**I made:** the teaching plan and site structure (Guide, Podcast, Scenarios, My Gallery, Quiz);
`gallery.html` by hand in the pencil editor (my own images, jump links, videos and map); and the
`styles.css` look (Gonzaga navy #041E42 and red #C8102E, header glow, fonts, rounded corners).

**AI made:** the HTML, CSS and JavaScript for the Guide, Podcast, Scenarios, Quiz and My Gallery
pages, the podcast scripts, scenarios and quiz questions, and the code for the bug fixes I
requested (Claude Code).

**I checked it by:** testing the Podcast, Scenarios and Quiz myself on the live site, on my laptop and my phone; having my
brother test them as a classmate; and retesting after each bug fix (podcast skips moving only
7–8 seconds, and the scenario jump link opening the home page).
