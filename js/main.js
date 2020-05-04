import AnchorJS from 'anchor-js';
import Sidebar from 'sidebar.js';
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/dist/plugin/highlight.esm.js';
import Markdown from 'reveal.js/dist/plugin/markdown.esm.js';

// Set up link anchors
const anchors = new AnchorJS();
anchors.options = { placement: 'left', icon: '#' };
anchors.add( '.main h2, .main h3, .main h4' );

const PAGE_ID = document.body.dataset.pageId;

if( PAGE_ID === 'home' ) {

	let demo = new Reveal( document.querySelector( '.reveal-demo .reveal' ), {
		embedded: true,
		hash: true,
		margin: 0.1,
		plugins: [ Markdown, Highlight ]
	});
	demo.initialize();

}
else {

	// Initialize inline decks in the documentation
	Array.from( document.querySelectorAll( '.example-deck' ) ).forEach( deckElement => {

		// If this deck is paired with an input code block,
		// wrap them both in a shared container
		let code = deckElement.previousSibling;
		if( code.matches( 'pre' ) ) {
			let wrapper = document.createElement( 'div' );
			wrapper.className = 'example-deck-wrapper';
			code.parentNode.insertBefore( wrapper, code );
			wrapper.appendChild( code );
			wrapper.appendChild( deckElement );
		}

		let deck = new Reveal( deckElement, {
			width: 900,
			height: 500,
			embedded: true,
			keyboard: false,
			progress: false,
			controlsTutorial: false,
			plugins: [ Markdown, Highlight ]
		} );
		deck.initialize();

	} );

}