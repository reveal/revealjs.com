import lunr from 'lunr';
import debounce from 'lodash/debounce';

// Based on:
// https://www.raymondcamden.com/2019/10/20/adding-search-to-your-eleventy-static-site-with-lunr

export default async () => {

	let result;
	let docs;
	let index;

	async function loadSearchData() {
		searchResults.dataset.state = 'loading';
		setStatusText( 'Loading...' );

		result = await fetch( '/api/search.json' );
		docs = await result.json();

		index = lunr( function() {
			this.ref('id');
			this.field('title');
			this.field('content');

			docs.forEach( ( doc, index ) => {
				doc.id = index;
				this.add( doc );
			} );
		});
	}

	function search( term ) {
		// Make sure we're loaded
		if( docs ) {
			let results = index.search( term );

			results.forEach(r => {
				r.title = docs[r.ref].title;
				r.url = docs[r.ref].url;
			});

			return results;
		}
	}

	function setStatusText( value ) {
		searchResults.innerHTML = `<span class="text-gray-500">${value}</span>`;
	}

	function show() {
		if( !isVisible() ) {
			searchResults.classList.add( 'show' );
			document.addEventListener( 'mousedown', onDocumentMouseDown );

			// Lazy-load the first time the search field is shown
			if( !docs ) {
				loadSearchData().then(
					() => {
						let searchTerm = searchInput.value.trim();
						if( searchTerm && isVisible() ) {
							search();
						}
					},
					() => {
						searchResults.dataset.state = 'loading-error';
						setStatusText( 'Failed to load search data 😭' );
					}
				);
			}
		}
	}

	function hide() {
		if( isVisible() ) {
			searchResults.classList.remove( 'show' );
			document.removeEventListener( 'mousedown', onDocumentMouseDown );
		}
	}

	function isVisible() {
		return searchResults.classList.contains( 'show' );
	}

	let searchInput = document.querySelector( '.search-input' );
	let searchResults = document.querySelector( '.search-results' );

	searchInput.addEventListener( 'input', debounce( event => {

		let searchTerm = searchInput.value.trim();
		if( searchTerm ) {

			let results = search( searchTerm );
			if( results.length ) {
				searchResults.innerHTML = results.map( result => {
					return `
						<a href="${result.url}" class="search-result block m-0 p-2 outline-none rounded focus:bg-yellow-400 hover:bg-yellow-400">
							<p>${result.title}</p>
						</a>
						<div class="divider border-t border-gray-200 my-2"></div>
					`;
				} ).join('');
				searchResults.dataset.state = 'has-results';
			}
			else {
				searchResults.dataset.state = 'no-results';
				setStatusText( `No results for "${searchTerm}"` );
			}

		}
		else {
			searchResults.dataset.state = 'no-term';
			setStatusText( `Enter a search term` );
		}

	}, 300 ) );

	searchInput.addEventListener( 'focus', show );

	document.addEventListener( 'keyup', event => {
		if( event.key === '/' ) {
			searchInput.focus();
			searchInput.select();
		}
		else if( event.key === 'Escape' ) {
			searchInput.blur();
			hide();
		}
	} );

	function onDocumentMouseDown( event ) {
		if( !event.target.closest( '.search' ) ) {
			searchResults.classList.remove( 'show' );
		}
	}

}