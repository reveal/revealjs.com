import lunr from 'lunr';
import debounce from 'lodash/debounce';

// Based on:
// https://www.raymondcamden.com/2019/10/20/adding-search-to-your-eleventy-static-site-with-lunr

export default async () => {

	let searchInput = document.querySelector( '.search-input' );
	let searchResults = document.querySelector( '.search-results' );

	let result;
	let docs;
	let index;

	async function load() {

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
			return index.search( term ).map( r => {
				return docs[r.ref];
			} ).slice(0, 3);
		}

	}

	function renderSearchResult( searchTerm, result ) {

		let content = '';
		let contentMatches = result.content.matchAll( new RegExp( searchTerm.split(' ').join('|'), 'gi' ) );
		let i = 0;

		for( let match of contentMatches ) {
			let start = match.index;
			let end = start + match[0].length;
			let value = result.content.slice( start - 20, end + 140 )
				.replace( new RegExp( match[0], 'gi' ), '<mark>$&</mark>' );

			if( value ) {
				content += '<p class="excerpt mt-2">...' + value + '...</p>';
			}

			// Only one excerpt for now
			if( ++i === 1 ) break;
		}

		let title = result.title;
		let titleMatch = title.match( new RegExp( searchTerm, 'i' ) );
		if( titleMatch && titleMatch.length === 1 ) {
			title = title.slice( 0, titleMatch.index ) + '<mark>' + titleMatch[0] + '</mark>' + title.slice(  titleMatch.index + titleMatch[0].length );
		}

		return `
			<a href="${result.url}" class="search-result block m-0 p-2 outline-none border-2 border-transparent rounded focus:border-blue-400 hover:bg-gray-200">
				<p class="font-semibold text-base">${title}</p>
				${content}
			</a>
			<div class="divider border-t border-gray-200 my-2"></div>
		`;

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
				load().then(
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

	searchInput.addEventListener( 'focus', show );
	searchInput.addEventListener( 'input', debounce( event => {

		let searchTerm = searchInput.value.trim();
		if( searchTerm ) {

			let results = search( searchTerm );
			if( results.length ) {
				searchResults.innerHTML = results.map( renderSearchResult.bind( this, searchTerm ) ).join('');
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

	}, 150 ) );

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