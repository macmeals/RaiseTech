jQuery( function( $ ) {
	$( ".is-hamburger" ).on( "click", function() {
		$( this ).toggleClass( "is-open" );
		// $( "p-global_menu" ).toggleClass( "is-open" );
		$( "body" ).toggleClass( "is-open" );
		$( ".Main-Nav" ).toggleClass( "is-open" );
	} );
} );