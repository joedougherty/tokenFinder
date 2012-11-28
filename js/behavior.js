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

  var selectMenu = '';
  var val;

  for (var x=2; x<11; x++) {
    val = x/2;
    selectMenu += '<option value="'+val+'">'+val+ ' miles' +'</option>';
  }

  $( "select.radius_select" ).append( selectMenu );

  $('#findatoken').click(function() {
    $("#map_overlay").css({ 'z-index' : '0' });
    $("#loading_img").show();
    $("#scroll_message").hide(); 

    initialize();
    gmapsGeolocate();
  });

  $( ".test_button" ).click(function() { 
    $( "#dialog-form" ).dialog( "open" );
  });

  // Dialog form
  $( "#dialog-form" ).dialog({
            autoOpen: false,
            height: 250,
            width: 280,
            modal: true,
            buttons: {
                "Search": function() {
                    console.log( "new radius has been submitted." );
                    $( this ).dialog( "close" );
                },
                Cancel: function() {
                    $( this ).dialog( "close" );
                }
            },
            close: function() {
                /* hide #dialog-form */
            }
        });

});