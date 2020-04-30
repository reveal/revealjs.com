import AnchorJS from 'anchor-js';
import Sidebar from 'sidebar.js';
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.js';

// Set up link anchors
const anchors = new AnchorJS();
anchors.options = { placement: 'left', icon: '#', class: 'text-gray-400' };
anchors.add( '.main h1, .main h2, .main h3, .main h4' );

const PAGE_ID = document.body.dataset.pageId;

if( PAGE_ID === 'home' ) {

	let demo = new Reveal( document.querySelector( '.reveal-demo .reveal' ), {
		embedded: true,
		hash: true,
		plugins: [ Markdown, Highlight ]
	});
	demo.initialize();

}