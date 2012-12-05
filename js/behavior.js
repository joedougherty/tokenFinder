$(document).ready( function() {
  // Show "Enter your Address" message if input is empty
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
    $("#map_overlay").css({ 'z-index' : '0' });
    $("#loading_img").show();
    $("#scroll_message").hide();
    
    if ( confirm("Mind if we try to determine your location?") ) {
      if ( geo_position_js.init() ) {
          geo_position_js.getCurrentPosition(success_callback, error_callback, {enableHighAccuracy:true});
      } else {
          alert("Sorry - functionality not available.");
      }
    } else {
        $("#loading_img").hide();
    }

  });

  $('input#address').keyup(function() {
    // If there's > 0 char in the input, show the submit button
    // otherwise keep it hidden	
    if ( $('input#address').val().length > 0 ) {
     
      $('div.buttonholder').slideDown();
      $('div.buttonholder').fadeIn();	
	    
	  } else {
	    $('div.buttonholder').slideUp();
      $('div.buttonholder').fadeOut();
	  }

  });

  /**
   * Generate the drop-down menu 
   * for the user to select a radius
   * greater than 1 mile
   */

  var selectMenu = '';

  for (var x=2; x<11; x++) {
    var val = x/2;
    var m = (x == 2) ? "mile" : "miles";
    selectMenu += '<option value="'+ val +'">'+ val +' '+ m +'</option>';
  }

  $('select.radius_select').append( selectMenu );

  /**
   * Set the selected radius value in the DOM so we can
   * retrieve it in codeAddress() if need be
   */

  $('.refresh_list').click(function() {
    // Get miles val
    var miles_radius = $('.radius_select').val();
    console.log( miles_radius );

    /**
     * codeAddress() stores lat/lon vals 
     * here every time it's run  
     */
    
    // Pull these cached vals from DOM
    var lat = $('#cached_lat').val(); 
    var lon = $('#cached_lon').val();

    $('#search_results').hide();
    
    codeAddress( lat, lon );
    
    $('#search_results').show();
 
    /* Prevent page from reloading */
    preventDefault();
    return false;
  
  });
   
  $('#findatoken').click(function() {
    $("#map_overlay").css({ 'z-index' : '0' });
    $("#loading_img").show();
    $("#scroll_message").hide(); 

    initialize();
    gmapsGeolocate();
  });

});
