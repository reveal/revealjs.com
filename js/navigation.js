
let sidebar = document.querySelector( '.sidebar' );
if( sidebar ) {

	// Update the selected item in the navigation to
	// match the current URL & hash.
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


	// Toggle the mobile nav.
	document.querySelector( '.menu-toggle' ).addEventListener( 'click', () => {
		sidebar.classList.toggle( 'hidden' );
	} )

}