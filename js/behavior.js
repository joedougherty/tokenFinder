$(document).ready( function() {

  $('input#address').keyup(function() {
    	
    if ( $('input#address').val().length > 0 ) {
     
      $('div.buttonholder').slideDown();
      $('div.buttonholder').fadeIn();	
	    
	  } else {
	     $('div.buttonholder').slideUp();
      $('div.buttonholder').fadeOut();
	  }

  });

  $('#findatoken').click(function() {
  	codeAddress();
    console.log('findatoken fired');
  });

});