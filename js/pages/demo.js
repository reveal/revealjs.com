import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';

export default () => {

	let deck = new Reveal( document.querySelector( '.reveal' ), {
		hash: true,
		plugins: [ Markdown, Highlight, Zoom ]
	});
	deck.initialize();

}