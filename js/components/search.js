import lunr from 'lunr';
import debounce from 'lodash/debounce';

// Based on:
// https://www.raymondcamden.com/2019/10/20/adding-search-to-your-eleventy-static-site-with-lunr

export default async () => {

	let result = await fetch( '/api/search.json' );
	let docs = await result.json();

	let index = lunr( function() {
		this.ref('id');
		this.field('title');
		this.field('content');

		docs.forEach( ( doc, index ) => {
			doc.id = index;
			this.add( doc );
		} );
	});

	let search = term => {
		let results = index.search( term );

		results.forEach(r => {
			r.title = docs[r.ref].title;
			r.url = docs[r.ref].url;
		});

		return results;
	}

	let show = () => {
		if( !searchResults.classList.contains( 'show' ) ) {
			searchResults.classList.add( 'show' );
			document.addEventListener( 'mousedown', onDocumentMouseDown );
		}
	}

	let hide = () => {
		if( searchResults.classList.contains( 'show' ) ) {
			searchResults.classList.remove( 'show' );
			document.removeEventListener( 'mousedown', onDocumentMouseDown );
		}
	}

	let searchInput = document.querySelector( '.search-input' );
	let searchResults = document.querySelector( '.search-results' );

	searchInput.addEventListener( 'input', debounce( event => {

		let searchTerm = searchInput.value.trim();
		if( searchTerm ) {

			let results = search( searchInput.value );
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
				searchResults.innerHTML = `<span class="text-gray-500">No results for "${searchTerm}"</span>`;
				searchResults.dataset.state = 'no-results';
			}

		}
		else {
			searchResults.innerHTML = '<span class="text-gray-500">Enter a search term</span>';
			searchResults.dataset.state = 'no-term';
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