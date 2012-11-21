function success_callback(p) {
  latitude  = p.coords.latitude.toFixed(2);
  longitude = p.coords.longitude.toFixed(2);

  codeAddress(latitude, longitude);
}
      
function error_callback(p) {
  alert('error='+p.code);
}   

var geocoder;
var map;

function initialize() {

  geocoder = new google.maps.Geocoder;
  var illadelph = [39.95, -75.16];
  var latlng = new google.maps.LatLng(illadelph[0], illadelph[1]);
  var myOptions = {
    zoom: 18,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

}

function gmapsGeolocate() {

  
}

function codeAddress(lat, lon) {

  console.log(arguments[0]);
  console.log(arguments[1]);

  var radius = '1';
  
  $.ajax({
    url: "http://www3.septa.org/hackathon/locations/get_locations.php?lon=" + lon + "&lat=" + lat + "&type=sales_locations&radius=" + radius + "&callback=?",
    dataType: "jsonp",
    
    success: function(data) {
   
      $.each(data, function(i, item) {

        var resultsDiv;

        if (item.location_data != null) {

          dist_to_loc = item.distance.replace(/"/g, '');
          dist_to_loc = parseFloat( dist_to_loc );
          dist_to_loc = dist_to_loc.toFixed(3);

          resultsDiv = '<div class="list_loc">';
          resultsDiv += '<p class="loc_name">' + item.location_name.replace(/"/g, '') + '</p>';
          resultsDiv += '<p>' + item.location_data.address1.replace(/"/g, '') + '</p>';
          resultsDiv += '<p>' + dist_to_loc  + ' miles</p>';
          resultsDiv += '<p>' + item.location_data.hours.replace(/"/g, '') + '</p>';
          resultsDiv += '</div>';

        }

        $('div#search_results').append(resultsDiv);

      });

        $('div#map_overlay').css({ 'z-index' : '0' });
        $('div#search_results').show();        
    
    }

  });

} // End of codeAddress()