/*
  Author: Marcus Heppner
  Course: BMIS 235 - HTML-4
  Shared photo-reading helpers (Tesseract.js, loaded from a CDN the first time it is needed).
*/

const OCR = (function () {
    const URL_ = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    let loading = null;

    function loadTesseract() {
        if (window.Tesseract) return Promise.resolve(window.Tesseract);
        if (!loading) {
            loading = new Promise(function (resolve, reject) {
                const sc = document.createElement("script");
                sc.src = URL_;
                sc.onload = function () { resolve(window.Tesseract); };
                sc.onerror = function () { loading = null; reject(new Error("load failed")); };
                document.head.appendChild(sc);
            });
        }
        return loading;
    }

    function loadImage(file) {
        return new Promise(function (resolve, reject) {
            const img = new Image();
            img.onload = function () { resolve(img); };
            img.onerror = reject;
            img.src = URL.createObjectURL(file);
        });
    }

    // Shrink to maxSide and (for reading) convert to high-contrast grayscale.
    function toCanvas(img, maxSide, forOcr) {
        const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.round(img.width * scale);
        c.height = Math.round(img.height * scale);
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, c.width, c.height);
        if (forOcr) {
            const d = ctx.getImageData(0, 0, c.width, c.height);
            const px = d.data;
            for (let k = 0; k < px.length; k += 4) {
                const gray = 0.299 * px[k] + 0.587 * px[k + 1] + 0.114 * px[k + 2];
                const v = Math.max(0, Math.min(255, (gray - 128) * 1.6 + 140));
                px[k] = px[k + 1] = px[k + 2] = v;
            }
            ctx.putImageData(d, 0, 0);
        }
        return c;
    }

    // Read the text in a photo. onProgress(0..1) is optional.
    async function read(file, onProgress) {
        const img = await loadImage(file);
        const T = await loadTesseract();
        const worker = await T.createWorker("eng", 1, {
            logger: function (m) {
                if (m.status === "recognizing text" && onProgress) onProgress(m.progress);
            },
        });
        const result = await worker.recognize(toCanvas(img, 2200, true));
        await worker.terminate();
        return result.data.text || "";
    }

    function words(s) {
        return s.toLowerCase().replace(/[‘’]/g, "'").replace(/[^a-z0-9' ]+/g, " ")
            .replace(/'/g, "").split(/\s+/).filter(Boolean);
    }

    // Is the quote on this page? Allows for reading mistakes: most of the quote's words
    // must appear close together, in a window a little longer than the quote.
    function findQuote(pageText, quote) {
        const page = words(pageText);
        const q = words(quote);
        if (!q.length || !page.length) return false;
        const need = q.length <= 4 ? q.length : Math.ceil(q.length * 0.6);
        const win = q.length + 4;
        for (let i = 0; i < page.length; i++) {
            const slice = page.slice(i, i + win);
            let hits = 0;
            const used = {};
            q.forEach(function (w) {
                const idx = slice.findIndex(function (p, j) { return !used[j] && p === w; });
                if (idx !== -1) { used[idx] = true; hits++; }
            });
            if (hits >= need) return true;
        }
        return false;
    }

    // Page numbers usually sit alone at the top or bottom of the page.
    function findPageNumber(pageText) {
        const lines = pageText.split("\n").map(function (l) { return l.trim(); }).filter(Boolean);
        const edges = lines.slice(0, 3).concat(lines.slice(-3));
        for (const line of edges) {
            const tokens = line.replace(/[|\[\](){}.,:;'"]/g, " ").split(/\s+/);
            const nums = tokens.filter(function (t) { return /^\d{1,3}$/.test(t) && +t > 0; });
            // A line that is mostly a number (e.g. "47" or "MRS. DALLOWAY  47").
            if (nums.length === 1 && (tokens.length <= 4 || /^\d{1,3}$/.test(tokens[0]) || /^\d{1,3}$/.test(tokens[tokens.length - 1]))) {
                return nums[0];
            }
        }
        return null;
    }

    return { read: read, findQuote: findQuote, findPageNumber: findPageNumber };
})();
