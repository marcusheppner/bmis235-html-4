/*
  Author: Marcus Heppner
  Course: BMIS 235 - Final
  Scenarios: a short story, a goal, and broken code to fix in a live editor.
  Each check is a small function that looks at the code you wrote.
    doc  = your code, parsed into a page (use doc.querySelector, etc.)
    text = your code as plain text
*/

const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5373.911256350678!2d-117.40469022421398!3d47.665858383884476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e18ebbb7aeffb%3A0xdb160d1679b907e7!2sGonzaga%20University!5e0!3m2!1sen!2sus!4v1794508721841!5m2!1sen!2sus";

const SCENARIOS = [
    {
        id: "sc-image", type: "Image", guide: "guide-image",
        title: "The bakery's missing photo",
        story: "A local bakery asked you to put their sunset logo on their page. The file is already in the repo, in the images folder, named sunset.svg (all lower case). But the page shows a broken-image icon.",
        goal: "Make the image appear, with useful alt text.",
        broken:
`<h2>Sunset Bakery</h2>
<img src="images/Sunset.SVG" width="300" height="195" alt="">`,
        checks: [
            { label: "The src matches the real file name exactly (images/sunset.svg)",
              test: function (doc) { const i = doc.querySelector("img"); return !!i && i.getAttribute("src") === "images/sunset.svg"; } },
            { label: "The alt text describes the picture",
              test: function (doc) { const i = doc.querySelector("img"); return !!i && (i.getAttribute("alt") || "").trim().length >= 4; } },
        ],
        hints: [
            "Compare the src with the file name in the story, letter by letter.",
            "GitHub Pages treats capital and lower-case letters as different. Look at both the name and the extension.",
            "alt=\"\" is empty. Describe what the picture shows.",
        ],
        solution: `<h2>Sunset Bakery</h2>
<img src="images/sunset.svg" width="300" height="195" alt="Sunset Bakery logo: a sunset over hills">`,
        why: "The file is sunset.svg, but the code asked for Sunset.SVG. On GitHub Pages, capitals count, so the browser looked for a file that doesn't exist.",
    },
    {
        id: "sc-jump", type: "Jump link", guide: "guide-jump",
        title: "The menu that won't jump",
        story: "A podcast page has a picture menu at the top. Clicking the cooking picture should jump down to the cooking video, but nothing happens.",
        goal: "Make the picture link jump to the cooking section.",
        broken:
`<a href="#Cooking-Video"><img src="images/sunset.svg" width="200" height="130" alt="Cooking show"></a>

<p style="height:600px">(lots of other content...)</p>

<a id="cooking-video"></a>
<h2>Cooking video</h2>
<p>The video would be here.</p>`,
        checks: [
            { label: "The link's href points to #cooking-video",
              test: function (doc) { const a = doc.querySelector("a[href^='#']"); return !!a && a.getAttribute("href") === "#cooking-video"; } },
            { label: "There is exactly one element with id=\"cooking-video\"",
              test: function (doc) { return doc.querySelectorAll("#cooking-video").length === 1; } },
            { label: "The picture is still inside the link",
              test: function (doc) { return !!doc.querySelector("a[href^='#'] img"); } },
        ],
        hints: [
            "A jump link has two halves. Find the href and the id.",
            "Compare the text after # with the id, letter by letter. Watch the capital letters.",
        ],
        solution: `<a href="#cooking-video"><img src="images/sunset.svg" width="200" height="130" alt="Cooking show"></a>

<p style="height:600px">(lots of other content...)</p>

<a id="cooking-video"></a>
<h2>Cooking video</h2>
<p>The video would be here.</p>`,
        why: "The href said #Cooking-Video but the id was cooking-video. Ids are case-sensitive, so the browser couldn't find the destination.",
    },
    {
        id: "sc-video", type: "Video", guide: "guide-video",
        title: "The video that refuses to connect",
        story: "A coach wants a training video on the team page. Someone copied the link from the browser's address bar and put it in an iframe. The box shows an error instead of the video.",
        goal: "Make the video play inside the page.",
        broken:
`<h2>Training video</h2>
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=4L98ssI5Vxw" title="YouTube video player" allowfullscreen></iframe>`,
        checks: [
            { label: "The src uses the embed address (youtube.com/embed/...)",
              test: function (doc) { const f = doc.querySelector("iframe"); return !!f && /^https:\/\/www\.youtube\.com\/embed\/4L98ssI5Vxw/.test(f.getAttribute("src") || ""); } },
            { label: "It's still an iframe with the same video ID",
              test: function (doc, text) { return !!doc.querySelector("iframe") && text.indexOf("4L98ssI5Vxw") !== -1; } },
        ],
        hints: [
            "YouTube has two kinds of links. Which one is this?",
            "watch?v=VIDEO_ID is for watching on YouTube. Inside an iframe you need embed/VIDEO_ID.",
        ],
        solution: `<h2>Training video</h2>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4L98ssI5Vxw" title="YouTube video player" allowfullscreen></iframe>`,
        why: "A watch link opens YouTube's full page, which YouTube won't show inside another site. The embed link is the version made to go in an iframe.",
    },
    {
        id: "sc-shorts", type: "Video", guide: "guide-video",
        title: "A Short that won't show",
        story: "A club wants to feature a YouTube Short. The link someone pasted is a /shorts/ address, and the video won't load in the page.",
        goal: "Convert the Shorts link into an embed link.",
        broken:
`<h2>Club highlight</h2>
<iframe width="315" height="560" src="https://www.youtube.com/shorts/4L98ssI5Vxw" title="YouTube video player" allowfullscreen></iframe>`,
        checks: [
            { label: "The src uses youtube.com/embed/ with the same ID",
              test: function (doc) { const f = doc.querySelector("iframe"); return !!f && /youtube\.com\/embed\/4L98ssI5Vxw/.test(f.getAttribute("src") || ""); } },
            { label: "There's no /shorts/ left in the src",
              test: function (doc) { const f = doc.querySelector("iframe"); return !!f && (f.getAttribute("src") || "").indexOf("/shorts/") === -1; } },
        ],
        hints: [
            "Shorts work the same way as regular videos.",
            "/shorts/VIDEO_ID becomes /embed/VIDEO_ID.",
        ],
        solution: `<h2>Club highlight</h2>
<iframe width="315" height="560" src="https://www.youtube.com/embed/4L98ssI5Vxw" title="YouTube video player" allowfullscreen></iframe>`,
        why: "Like watch links, Shorts links are pages on YouTube, not embeddable players. Swapping /shorts/ for /embed/ fixes it.",
    },
    {
        id: "sc-map-link", type: "Map", guide: "guide-map",
        title: "A link where a map should be",
        story: "A campus club wants visitors to see where they meet. Someone pasted the address from the Maps page, so visitors only get a plain link. You clicked Share, then Embed a map, and Google gave you this src: " + MAP_SRC,
        goal: "Replace the link with an interactive map embed (an iframe) and a heading that says what it is.",
        broken:
`<section id="embed-block">
<h2>My embed</h2>
<a href="https://maps.google.com/?q=Gonzaga+University">Gonzaga University on Google Maps</a>
</section>`,
        checks: [
            { label: "There's an iframe whose src starts with https://www.google.com/maps/embed",
              test: function (doc) { const f = doc.querySelector("iframe"); return !!f && (f.getAttribute("src") || "").indexOf("https://www.google.com/maps/embed") === 0; } },
            { label: "The map is inside the embed-block section",
              test: function (doc) { return !!doc.querySelector("#embed-block iframe"); } },
            { label: "The heading no longer says \"My embed\"",
              test: function (doc) { const h = doc.querySelector("#embed-block h2"); return !!h && h.textContent.trim().toLowerCase() !== "my embed" && h.textContent.trim().length > 2; } },
        ],
        hints: [
            "A link takes you away to Google's site. An embed shows Google's map inside your page.",
            "Embed code starts with <iframe src=\"...\" and ends with </iframe>. Copy the src from the story.",
            "Give it a width and height, like width=\"600\" height=\"450\", and change the heading.",
        ],
        solution: `<section id="embed-block">
<h2>Where our club meets</h2>
<iframe src="${MAP_SRC}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
</section>`,
        why: "A link points away to another site (linked). The iframe opens a live, zoomable window into Google Maps inside your page (embedded).",
    },
    {
        id: "sc-map-broken", type: "Map", guide: "guide-map",
        title: "The map that swallowed the footer",
        story: "After pasting a map, the map looks strange and the footer has disappeared. Something in the pasted code got cut off.",
        goal: "Repair the iframe so the map shows and the footer comes back.",
        broken:
`<h2>Find us</h2>
<iframe src="${MAP_SRC}" width="600" height="450 style="border:0;" loading="lazy">

<p>Built by YOUR NAME &middot; BMIS 235</p>`,
        checks: [
            { label: "Every attribute value has its closing quote (height=\"450\")",
              test: function (doc) { const f = doc.querySelector("iframe"); return !!f && f.getAttribute("height") === "450"; } },
            { label: "The iframe has a closing </iframe> tag",
              test: function (doc, text) { return /<\/iframe>/i.test(text); } },
            { label: "The footer paragraph is back on the page (outside the iframe)",
              test: function (doc) { return Array.prototype.some.call(doc.querySelectorAll("p"), function (p) { return /BMIS 235/.test(p.textContent); }); } },
        ],
        hints: [
            "Look at the height value. Count the quote marks.",
            "Every <iframe> needs a matching </iframe>. Without it, the browser treats the rest of the page as part of the iframe.",
        ],
        solution: `<h2>Find us</h2>
<iframe src="${MAP_SRC}" width="600" height="450" style="border:0;" loading="lazy"></iframe>

<p>Built by YOUR NAME &middot; BMIS 235</p>`,
        why: "A missing quote made the browser read the rest of the tag as part of the height, and a missing </iframe> swallowed everything after it. Pasting the whole embed code, start to finish, avoids both.",
    },
    {
        id: "sc-script", type: "Script", guide: "guide-script",
        title: "The dark mode button that does nothing",
        story: "A student added the dark mode script, but clicking the button doesn't change anything. The browser console says it can't find something.",
        goal: "Make the button switch the colors, using a light color and a dark color that are clearly different.",
        broken:
`<p><button onclick="toggleDark()">Dark mode on / off</button></p>
<section id="embed-block" style="padding:20px">The embed block</section>

<script>
  var lightColor = "#FFFFFF";
  var darkColor  = "#FFFFFF";
  var dark = false;

  function paint() {
    document.body.style.backgroundColor = dark ? darkColor : lightColor;
    document.body.style.color = dark ? "white" : "black";
    var block = document.getElementById("embedblock");
    block.style.backgroundColor = dark ? lightColor : darkColor;
    block.style.color = dark ? "black" : "white";
  }

  function toggledark() {
    dark = !dark;
    paint();
  }

  paint();
</script>`,
        checks: [
            { label: "getElementById(...) asks for an id that exists (embed-block)",
              test: function (doc, text) { const m = text.match(/getElementById\(\s*["']([^"']+)["']\s*\)/); return !!m && !!doc.getElementById(m[1]); } },
            { label: "The function name matches the button's onclick (toggleDark)",
              test: function (doc, text) { return /function\s+toggleDark\s*\(/.test(text) && /onclick="toggleDark\(\)"/.test(text); } },
            { label: "lightColor and darkColor are different, one light and one dark",
              test: function (doc, text) {
                  function lum(hex) { hex = hex.replace("#", ""); if (hex.length === 3) hex = hex.split("").map(function (c) { return c + c; }).join(""); const n = parseInt(hex, 16); return ((n >> 16 & 255) * 0.299 + (n >> 8 & 255) * 0.587 + (n & 255) * 0.114); }
                  const l = text.match(/lightColor\s*=\s*["'](#[0-9a-fA-F]{3,6})["']/), d = text.match(/darkColor\s*=\s*["'](#[0-9a-fA-F]{3,6})["']/);
                  return !!l && !!d && lum(l[1]) - lum(d[1]) > 100; } },
        ],
        hints: [
            "Compare the text inside getElementById(\"...\") with the section's id.",
            "Compare the name in onclick=\"...\" with the function name. Capitals count.",
            "Both colors are #FFFFFF (white). Change darkColor to something dark, like #143A30.",
        ],
        solution: `<p><button onclick="toggleDark()">Dark mode on / off</button></p>
<section id="embed-block" style="padding:20px">The embed block</section>

<script>
  var lightColor = "#F4EDDC";
  var darkColor  = "#143A30";
  var dark = false;

  function paint() {
    document.body.style.backgroundColor = dark ? darkColor : lightColor;
    document.body.style.color = dark ? "white" : "black";
    var block = document.getElementById("embed-block");
    block.style.backgroundColor = dark ? lightColor : darkColor;
    block.style.color = dark ? "black" : "white";
  }

  function toggleDark() {
    dark = !dark;
    paint();
  }

  paint();
</script>`,
        why: "Three things were off: getElementById asked for \"embedblock\" (no hyphen), the function was named toggledark while the button called toggleDark, and both colors were white. Names in code must match exactly.",
    },
];
