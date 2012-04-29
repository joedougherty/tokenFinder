$(document).ready( function() {

  $('input#address').keydown(function() {
    	
    if ( $('input#address').val().length > 0 ) {
     
      $('div.buttonholder').fadeIn();	
	  // $('div.buttonholder').slideDown();
	} else {
	  $('div.buttonholder').fadeOut();
	}

  });

  $('input#findatoken').click(function() {

  	$('div#map_canvas').show();

  });

});