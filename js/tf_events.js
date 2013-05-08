$(document).ready(function() {  

  $('div').on('pageshow',function(event, ui){
    $('#locationMap').hide();
    $('#locationMap').show();
    google.maps.event.trigger(map, 'resize');
  });

});
