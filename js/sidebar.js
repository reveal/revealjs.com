
let sidebar = document.querySelector( '.sidebar' );
let menuToggle = document.querySelector( '.menu-toggle' );

/**
 * Update the selected item in the navigation to
 * match the current URL & hash.
 */
let updateSelection = () => {

	let currentURL = window.location.pathname.replace( /\/$/, '' ) + window.location.hash;
	let newSelection = sidebar.querySelector( '.nav-link[href="'+ currentURL +'"]' )

	if( newSelection ) {
		let selectedItem = sidebar.querySelector( '.nav-link.selected' );
		if( selectedItem ) selectedItem.classList.remove( 'selected' );
		newSelection.classList.add( 'selected' )
	}

}

updateSelection();

window.addEventListener( 'hashchange', updateSelection );


menuToggle.addEventListener( 'click', () => {

	sidebar.classList.toggle( 'hidden' );

} )