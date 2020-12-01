import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';
import throttle from 'lodash/throttle';

export default () => {

	let deck = new Reveal( document.querySelector( '.reveal-demo .reveal' ), {
		embedded: true,
		hash: true,
		margin: 0.1,
		plugins: [ Markdown, Highlight, Zoom ]
	});
	deck.initialize().then( setupHeader );

	function setupHeader() {

		let demoLogo = document.querySelector( '.demo-logo' );
		if( demoLogo ) {

			let updateVisibility = () => {
				document.documentElement.classList.toggle( 'logo-visible', demoLogo.getBoundingClientRect().bottom < 0 );
			}

			updateVisibility();

			document.addEventListener( 'scroll', throttle( updateVisibility, 100 ) )

		}

	}

	function highlightDemo() {

		let scrollListener = () => {
			if( window.scrollY ) {
				document.documentElement.classList.remove( 'highlight-demo' );
				document.removeEventListener( 'scroll', scrollListener );
			}
		}

		document.documentElement.classList.add( 'highlight-demo' );
		document.addEventListener( 'scroll', scrollListener );

	}

	// There's a number of links to revealjs.com?print-pdf out
	// there to demonstrate the PDF export feature. This new
	// site no longer has a printable presentation on the home
	// page so we redirect those links to /demo?print-pdf.
	if( /print\-pdf/.test( location.search ) ) {
		window.location = '/demo' + window.location.search;
	}

	if( /demo/.test( location.search ) ) {
		highlightDemo();
	}

}