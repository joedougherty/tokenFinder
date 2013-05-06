$(document).ready( function() { 

  var $origin_lat = $('#origin_lat').html();
  var $origin_lon = $('#origin_lon').html();
  var $destination_lat = $('#destination_lat').html();
  var $destination_lon = $('#destination_lon').html();

  initialize([$origin_lat, $origin_lon]);
  directions_calcRoute([$origin_lat, $origin_lon], [$destination_lat, $destination_lon]);

});
