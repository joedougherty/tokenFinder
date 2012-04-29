/* 

Several locations have null sales_date objects for some reason.
EX: 69th St. Terminal (MFL) Booth (location_id: 0).

*/

var geocoder;
var map;

function initialize() {

  geocoder = new google.maps.Geocoder;
  var illadelph = [39.95, -75.16];
  var latlng = new google.maps.LatLng(illadelph[0], illadelph[1]);
  var myOptions = {
    zoom: 11,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function codeAddress() {
  
  var address = document.getElementById("address").value;
  geocoder.geocode( { 'address': address}, function(results, status) {
  
  if (status == google.maps.GeocoderStatus.OK) {
    map.setCenter(results[0].geometry.location);
    var marker = new google.maps.Marker({
      map: map,
      position: results[0].geometry.location
    });

  var lat = results[0].geometry.location.Za;
  var lon = results[0].geometry.location.$a;
        
  var radius = '1';
  
  $.ajax({
    url: "http://www3.septa.org/hackathon/locations/get_locations.php?lon=" + lon + "&lat=" + lat + "&type=sales_locations&radius=" + radius + "&callback=?",
    dataType: "jsonp",
    
    success: function(data) {
    
      $('div#searchResults').empty();
      $('div#searchResults').hide();
    
      // console.log( lat, lon );
      $.each(data, function(i, item) {
       
      if (item.sales_data != null) {
    
        resultsDiv = '<div class="list_loc">'        
        resultsDiv += '<p class="loc_name">' + item.location_name + '</p>';
        resultsDiv += '<p>' + item.sales_data.ADDRESS + '</p>';
        resultsDiv += '<p>' + item.sales_data.HOURS + '</p>';
        resultsDiv += '</div>';
      
        $('div#searchResults').append(resultsDiv);
        $('div#searchResults').fadeIn();
              
      }        
         
    });
    
      }
    
    });
        
      } else {
        // alert("Geocode was not successful for the following reason: " + status);
        alert("Something went wrong. Please enter you address again.");
      }

    });
}