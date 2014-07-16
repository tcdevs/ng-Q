/**
 * ng-Q.js
 * Copyright TCDevs http://github.com/tcdevs
 *
 * Handly AngularJs or Vanilla Javascript DOM selector for single or multiple targets.
 *
 * Usage with AngularJS standalone:
 * 	$('.par, .par1, #hdr').addClass('red').append( "<strong>Hello</strong>" );
 *	$( '#checkin' ).bind( "click", function() {
 *		alert( "User clicked on 'foo.'" );
 *	});
 *  $( "b" ).append( $( "b" ).clone().prepend(' - ') );
 *
 * Usage with AngularJS AND jQuery:
 * 	$$('.par, .par1, #hdr').addClass('red').append( "<strong>Hello</strong>" );
 *	$$( '#checkin' ).bind( "click", function() {
 *		alert( "User clicked on 'foo.'" );
 *	});
 *  $$( "b" ).append( $( "b" ).clone().prepend(' - ') );
 *
 * Usage with Vanilla Javascript:
 * 	$('.par').innerHTML ="HELLO WORLD FROM <b>MQUERY</b>!";
 * 	
 */
var ng$$ = function () {

	var d = document,
		w = window;

	// Check if we have argument(s) and it's a String otherwise exit out
	if (arguments.length == 0 || typeof arguments[0] !== 'string') {
		console.error('[ng$$] No valid targets!');
		return;
	}

	// Default javascript arguments object
	var args = arguments;
	// Convert it to a real Array
	var converted_args = Array.prototype.slice.call(args);
	// Array of single or multiple DOM target(s)
	var dom_target = args[0].split(',');
		 				
	// AngularJs mode
	if (typeof window.angular == 'object') {
		console.log('AngularJs mode!!!');
		// Single AngularJs DOM reference "div.class"
		if (dom_target.length == 1)
			return angular.element( d.querySelector(args[0]) );
		// Multiple AngularJs DOM reference ".note, #alert"
		if (dom_target.length > 1) 
			return angular.element( d.querySelectorAll(args[0]) ); 
	};

	// Vanilla Javascript mode!
	console.log('Vanilla Javascript mode!!!');
	// Single DOM reference "div.class"
	if (dom_target.length == 1) return d.querySelector(args[0]);
	// Multiple DOM reference "div.note, div.alert"
	if (dom_target.length > 1) return d.querySelectorAll(args[0]); 
}

/* Check if jQuery is around otherwise occupy the $ symbol */
if (typeof jQuery != 'undefined') {
	console.log('jQuery ' + jQuery().jquery + ' has been loaded!');
	// New names to call ng$$ because $ is used by jQuery
	var $$ = JQ = ng$$;
} else {
	console.log('jQuery NOT loaded!');
	var $ = $$ = ng$$;
};

/* test the $ symbol */
//console.log('$ symbol',$);
//console.log('$$ symbol',$$);