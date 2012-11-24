$(document).ready( function() {

  $('.default-value').each(function() {
    var default_value = this.value;
    $(this).focus(function() {
        if(this.value == default_value) {
            this.value = '';
        }
    });
    $(this).blur(function() {
        if(this.value == '') {
            this.value = default_value;
        }
    });
  });

  $('.autotrack button').click(function() {
    if ( confirm("Mind if we try to determine your location?") ) {
    
      if (geo_position_js.init() ) {
          geo_position_js.getCurrentPosition(success_callback, error_callback, {enableHighAccuracy:true});
      } else {
          alert("Sorry - functionality not available.");
      }
    }

  });

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
    $("#map_overlay").css({ 'z-index' : '0' });
    $("#loading_img").show();
  	
    initialize();
    gmapsGeolocate();
  });

});