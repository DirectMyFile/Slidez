Reveal.initialize({
    controls: true,
    transition: 'cube',
    dependencies: [{
        src: "lib/js/classList.js",
        condition: function () {
            return !document.body.classList;
        }
    }, {
        src: "plugin/markdown/marked.js",
        condition: function () {
            return !!document.querySelector("[data-markdown]");
        }
    }, {
        src: "plugin/markdown/markdown.js",
        condition: function () {
            return !!document.querySelector("[data-markdown]");
        }
    }, {
        src: "plugin/highlight/highlight.js",
        async: true,
        callback: function () {
            hljs.initHighlightingOnLoad();
        }
    }, {
        src: "plugin/zoom-js/zoom.js",
        async: true,
        condition: function () {
            return !!document.body.classList;
        }
    }, {
        src: "plugin/notes/notes.js",
        async: true,
        condition: function () {
            return !!document.body.classList;
        }
    }]
});