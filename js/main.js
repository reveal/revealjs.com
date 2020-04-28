import Reveal from "../node_modules/reveal.js/dist/reveal.js";
import Highlight from "../node_modules/reveal.js/plugin/highlight/highlight.js";
import Markdown from "../node_modules/reveal.js/plugin/markdown/markdown.js";

var demo = new Reveal( document.querySelector( '.reveal-demo .reveal' ), {
	embedded: true,
	plugins: [ Markdown, Highlight ]
});
demo.initialize();