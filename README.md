# Embedding 101: Images, Video & Live Dashboards

**Name:** Marcus Heppner
**GU username:** marcusheppner
**Course:** BMIS 235 · Final

Live site: https://marcusheppner.github.io/bmis235-html-4/

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

## By hand vs by AI
**I made:** the teaching plan (which HTML-2 skills to teach, in what order, and for whom); the
site structure (guide, podcasts, scenarios, quiz, progress) and what each part should do; the
decisions about what to cut or change while building; and `gallery.html`, which I wrote by hand
in the pencil editor with my own images, videos and map. <!-- update once your gallery is done -->

**AI made:** the HTML, CSS and JavaScript for the Guide, Podcast, Scenarios and Quiz pages, the
podcast scripts, the scenarios and the quiz questions (Claude, via Claude Code).

**I checked it by:** <!-- only list what you actually do -->
comparing every code example against my working HTML-2 page; completing every scenario and
quiz question myself; playing each podcast; testing every embed and the dark mode demo on the
live site; and testing on my phone and laptop.
