import Reveal from 'reveal.js';
import Highlight from 'reveal.js/dist/plugin/highlight.esm.js';
import Markdown from 'reveal.js/dist/plugin/markdown.esm.js';
import Zoom from 'reveal.js/dist/plugin/zoom.esm.js';

export default () => {

	let deck = new Reveal( document.querySelector( '.reveal' ), {
		hash: true,
		plugins: [ Markdown, Highlight, Zoom ]
	});
	deck.initialize();

}