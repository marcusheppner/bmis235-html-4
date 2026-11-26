/*
  Author: Marcus Heppner
  Course: BMIS 235 - Final
  Quiz questions. "topic" links each question to a guide on the Home page.
  "code" (optional) is shown above the options.
*/

const TOPICS = {
    image:  { name: "Images",           guide: "guide-image" },
    jump:   { name: "Jump links",       guide: "guide-jump" },
    video:  { name: "YouTube videos",   guide: "guide-video" },
    map:    { name: "Maps & dashboards", guide: "guide-map" },
    script: { name: "Scripts",          guide: "guide-script" },
    kinds:  { name: "Owned, linked, embedded, built", guide: null },
};

const SYNTAX = [
    { id: "sy-01", topic: "image", q: "Which line correctly shows an image file named logo.png that is in your repo's images folder?",
      options: ['<img src="images/logo.png" alt="Club logo">', '<img href="images/logo.png" alt="Club logo">', '<image src="images/logo.png" alt="Club logo">', '<img src="logo.png" folder="images" alt="Club logo">'], answer: 0 },
    { id: "sy-02", topic: "video", q: "A video's ID is 4L98ssI5Vxw. Which src plays it inside an iframe?",
      options: ["https://www.youtube.com/watch?v=4L98ssI5Vxw", "https://www.youtube.com/embed/4L98ssI5Vxw", "https://youtu.be/4L98ssI5Vxw", "https://www.youtube.com/shorts/4L98ssI5Vxw"], answer: 1 },
    { id: "sy-03", topic: "jump", q: "Which pair makes a picture jump to the menu section?",
      options: ['href="menu" ... id="#menu"', 'href="#Menu" ... id="menu"', 'href="#menu" ... id="menu"', 'href="#menu" ... id="menu-section"'], answer: 2 },
    { id: "sy-04", topic: "map", q: "Where do you get the code to embed a Google Map?",
      options: ["Copy the address from the browser bar", "Take a screenshot of the map", "Share → Send a link → Copy link", "Share → Embed a map → Copy HTML"], answer: 3 },
    { id: "sy-05", topic: "map", q: "Correct embed code from Google Maps or YouTube always...",
      options: ["starts with <iframe and ends with </iframe>", "starts with <a href and ends with </a>", "starts with <img and has no closing tag", "starts with <embed and ends with </embed>"], answer: 0 },
    { id: "sy-06", topic: "kinds", q: "Which image is LINKED (someone else controls it)?",
      options: ['<img src="images/team.jpg" alt="Team">', '<img src="https://example.com/photos/team.jpg" alt="Team">', '<img src="team.jpg" alt="Team">', '<img src="./images/team.jpg" alt="Team">'], answer: 1 },
    { id: "sy-07", topic: "script", q: "Which button runs a function called toggleDark when clicked?",
      options: ['<button href="toggleDark()">Dark mode</button>', '<button click="toggleDark()">Dark mode</button>', '<button onclick="toggleDark()">Dark mode</button>', '<button onclick="toggleDark">Dark mode</button>'], answer: 2 },
    { id: "sy-08", topic: "script", q: "What does document.getElementById(\"embed-block\") find?",
      options: ["Any section on the page", "The element with class=\"embed-block\"", "The first iframe on the page", "The element with id=\"embed-block\""], answer: 3 },
    { id: "sy-09", topic: "kinds", q: "A Google Map you can zoom and drag on your page is...",
      options: ["embedded and interactive", "owned and static", "linked and two-way", "built and static"], answer: 0 },
    { id: "sy-10", topic: "kinds", q: "The dark mode button's script, written in your own page, is...",
      options: ["embedded", "built", "linked", "owned but not code"], answer: 1 },
];

const SPOT = [
    { id: "sp-01", topic: "image", q: "Goal: show logo.png, which is in the images folder. The page shows a broken-image icon. What's wrong?",
      code: '<img src="images/Logo.png" width="200" height="200" alt="Logo">',
      options: ["The alt text is too short", "Capital L: the file is logo.png", "width and height are missing quotes", "Images can't be in folders"], answer: 1 },
    { id: "sp-02", topic: "image", q: "Goal: show photo.png from the repo. The image is broken. What's wrong?",
      code: '<img src="photo.jpg" alt="Our team">',
      options: ["The extension: the file is .png, not .jpg", "It needs a width", "alt should come first", "It should be a linked image"], answer: 0 },
    { id: "sp-03", topic: "jump", q: "Goal: clicking the hiking picture jumps to the hiking video. Nothing happens. Why?",
      code: '<a href="#hikingVideo"><img src="hike.jpg" alt="Hiking"></a>\n...\n<a id="hiking-video"></a>',
      options: ["The image needs a width", "The <a id> must come after the video", "The names don't match: hikingVideo vs hiking-video", "Jump links only work with text"], answer: 2 },
    { id: "sp-04", topic: "jump", q: "Goal: a \"tour\" jump link. It doesn't move the page. What's wrong?",
      code: '<a href="#tour">Take the tour</a>\n...\n<a id="#tour"></a>',
      options: ["The href is missing a #", "The link text is wrong", "Ids can't be short", "The id shouldn't contain a #"], answer: 3 },
    { id: "sp-05", topic: "video", q: "Goal: play a video in the page. The box says it refused to connect. What's wrong?",
      code: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=4L98ssI5Vxw"></iframe>',
      options: ["It's a watch link; it should be /embed/4L98ssI5Vxw", "The width is too big", "iframes can't show YouTube", "It needs allowfullscreen to load"], answer: 0 },
    { id: "sp-06", topic: "map", q: "Goal: an interactive map in the embed block. Visitors only see blue text. What's wrong?",
      code: '<section id="embed-block">\n<h2>Where we meet</h2>\n<a href="https://maps.google.com/?q=Gonzaga">Gonzaga on Google Maps</a>\n</section>',
      options: ["The heading is too short", "It's a link, not embed code; it needs the <iframe> from Share → Embed a map", "The section needs a class", "Maps only work at the top of a page"], answer: 1 },
    { id: "sp-07", topic: "map", q: "After pasting a map, everything below it disappeared. What's the most likely cause?",
      code: '<iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450">\n<p>Built by Jane Student</p>',
      options: ["The map is too tall", "Footers can't follow maps", "The closing </iframe> tag is missing", "The src should start with http, not https"], answer: 2 },
    { id: "sp-08", topic: "script", q: "Goal: the button switches dark mode. Clicking does nothing. What's wrong?",
      code: '<button onclick="toggleDark()">Dark mode</button>\n...\nfunction toggledark() {\n  dark = !dark;\n  paint();\n}',
      options: ["dark = !dark is backwards", "paint() should come first", "Buttons can't run functions", "The names don't match: toggleDark vs toggledark"], answer: 3 },
    { id: "sp-09", topic: "script", q: "The button works, but nothing visibly changes. What's the problem?",
      code: 'var lightColor = "#FFFFFF";\nvar darkColor  = "#FAFAFA";',
      options: ["The two colors are almost the same; darkColor should be dark", "Colors can't use #", "lightColor must come second", "The colors need to be in single quotes"], answer: 0 },
    { id: "sp-10", topic: "video", q: "This iframe has two widths. How wide will it be?",
      code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4L98ssI5Vxw" width="600"></iframe>',
      options: ["600, the last one wins", "560, the browser uses the first one", "1160, they add together", "It won't show at all"], answer: 1 },
];
