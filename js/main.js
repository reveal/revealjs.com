import setupHome from 'pages/home.js';
import setupDemo from 'pages/demo.js';
import 'navigation.js';
import 'hovereffect.js';

import AnchorJS from 'anchor-js';

import Reveal from 'reveal.js';
import Highlight from 'reveal.js/dist/plugin/highlight.esm.js';
import Markdown from 'reveal.js/dist/plugin/markdown.esm.js';
import MathJax from 'reveal.js/dist/plugin/math.esm.js';
import Zoom from 'reveal.js/dist/plugin/zoom.esm.js';

const PAGE_ID = document.body.dataset.page;

setupAnchors();

if( document.readyState === 'complete' ) {
	setup();
}
else if( document.readyState === 'interactive' ) {
	document.onreadystatechange = function () {
		if( document.readyState == 'complete' ) {
			setup();
		}
	}
}


function setup() {

	setupInlineDecks();

	if( PAGE_ID === 'home' ) {
		setupHome();
	}
	else if( PAGE_ID === 'demo' ) {
		setupDemo();
	}

}

function setupAnchors() {

	// Set up link anchors
	const anchors = new AnchorJS();
	anchors.options = { placement: 'left', icon: '#' };
	anchors.add( '.article>h2, .article>h3, .article>h4' );

}

function setupInlineDecks() {

	// Inline example decks in the docs
	Array.from( document.querySelectorAll( '.reveal-example' ) ).forEach( deckElement => {

		// If this deck is paired with an input code block,
		// wrap them both in a shared container
		let code = deckElement.previousSibling;
		if( code.matches( 'pre' ) ) {
			let wrapper = document.createElement( 'div' );
			wrapper.className = 'reveal-example-wrapper';
			code.parentNode.insertBefore( wrapper, code );
			wrapper.appendChild( code );
			wrapper.appendChild( deckElement );
		}

		let config = {};

		if( deckElement.hasAttribute( 'data-config' ) ) {
			config = JSON.parse( deckElement.dataset.config );
		}

		let deck = new Reveal( deckElement, {
			width: 900,
			height: 500,
			hash: false,
			respondToHashChanges: false,
			embedded: true,
			progress: false,
			keyboardCondition: 'focused',
			controlsTutorial: false,
			math: {
			  config: 'TeX-AMS_HTML-full'
			},
			plugins: [ Markdown, Highlight, Zoom, MathJax ],
			... config
		} );
		deck.initialize();

	} );

}