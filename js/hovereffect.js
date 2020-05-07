/**
 * Directional hover effect copied from https://hakim.se.
 */

let lastMouseX = 0,
	lastMouseY = 0;

let pointerDirectionX = 0,
	pointerDirectionY = 0;

let trackMouseMovement = () => {

	document.addEventListener( 'mousemove', () => {

		if( this.lastMouseX && this.lastMouseY ) {
			let ox = event.pageX - this.lastMouseX;
			let oy = event.pageY - this.lastMouseY;

			let longestMovement = Math.max( Math.abs( ox ), Math.abs( oy ) );

			let sx = ox/longestMovement;
			let sy = oy/longestMovement;

			this.pointerDirectionX = sx;
			this.pointerDirectionY = sy;
		}

		this.lastMouseX = event.pageX;
		this.lastMouseY = event.pageY;

		this.lastScreenX = event.screenX;
		this.lastScreenY = event.screenY;

	} );

	document.addEventListener( 'scroll', event => {
		this.lastMouseX = null;
		this.lastMouseY = null;

		this.pointerDirectionX = 0;
		this.pointerDirectionY = 0;
	} );

}

let translate = ( element, x, y ) => {
	element.style.transform = 'translate('+x+'px,'+y+'px)';
}

let bindDirectionalHovers = ( element, childSelector ) => {

	let children = Array.from( element.querySelectorAll( childSelector ) );

	element.addEventListener( 'mouseenter', function( event ) {

		// Move the children into their start positions
		children.forEach( childElement => {
			childElement.classList.add( 'no-transition' );
			translate( childElement, -15 * this.pointerDirectionX, -15 * this.pointerDirectionY );
		}, this );

		// Wait until the next cycle and trigger the hover effect
		setTimeout( () => {

			element.classList.add( 'hover' );

			children.forEach( childElement => {
				childElement.classList.remove( 'no-transition' );
				translate( childElement, 0, 0 );
			}, this );

		}, 1 );

	}.bind( this ), false );

	element.addEventListener( 'mouseleave', function( event ) {

		// Remove the hover effect and move the child in the
		// direction of the mouse
		element.classList.remove( 'hover' );
		children.forEach( childElement => {
			translate( childElement, 15 * this.pointerDirectionX, 15 * this.pointerDirectionY );
		}, this );

	}.bind( this ), false );

}

if( !/ipad|iphone|ipod|android|windows\sphone/gi.test( navigator.userAgent ) ) {

	// Wrap anchors in the markup we need for hover effects
	Array.from( document.querySelectorAll( '.header-nav a, .sidebar a:not(.selected)' ) ).forEach( element => {
		element.classList.add( 'r-anchor' );
		element.innerHTML = '<span class="r-anchor-label">' + element.innerHTML + '</span><span class="r-anchor-background"></span>';
	} );

	Array.from( document.querySelectorAll( '.r-anchor' ) ).forEach( element => {
		bindDirectionalHovers( element, '.r-anchor-background' );
	}, this );

	trackMouseMovement();

}
