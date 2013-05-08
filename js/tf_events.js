$(document).ready(function() {  

  $('div').on('pageshow',function(event, ui){
    google.maps.event.trigger(map, 'resize');
    $('.fade').hide();
  });

});
