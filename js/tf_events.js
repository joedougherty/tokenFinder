$(document).ready(function() {  
  
  $( 'div' ).on( 'pagebeforeshow',function(event, ui){
      //alert( 'This page was just hidden: '+ ui.prevPage);
      //alert( 'show loading');
      showFade();
  });

  // Redraw dom to fix gmaps

  $(document).on('pagechange', function(event){
    google.maps.event.trigger(map, 'resize');
    $('.fade').hide();
  });

});
