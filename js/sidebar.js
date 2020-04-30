
/**
 * Update the selected item in the navigation to
 * match the current URL & hash.
 */
let updateSelection = () => {

	let currentURL = window.location.pathname.replace( /\/$/, '' ) + window.location.hash;
	let newSelection = document.querySelector( '.sidebar .nav-link[href="'+ currentURL +'"]' )

	if( newSelection ) {
		let selectedItem = document.querySelector( '.sidebar .nav-link.selected' );
		if( selectedItem ) selectedItem.classList.remove( 'selected' );
		newSelection.classList.add( 'selected' )
	}

}

updateSelection();

window.addEventListener( 'hashchange', updateSelection );