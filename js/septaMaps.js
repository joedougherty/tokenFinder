function success_callback(p) {
  latitude  = p.coords.latitude.toFixed(2);
  longitude = p.coords.longitude.toFixed(2);

  initialize([latitude, longitude]);
  codeAddress(latitude, longitude);
}
      
function error_callback(p) {
  alert("Sorry - we weren't able to find you!\n\nAre you sure you have location tracking enabled on your device?");
  $("#loading_img").hide();
}   

var geocoder;
var map;

function initialize(coordArray, targetDiv) {
  if (arguments[0] == undefined || arguments[0] == '') {
    var coords = [39.95, -75.16];
  } else {
    var coords = coordArray;
  }

  var targetDiv = targetDiv || "map_canvas";

  geocoder = new google.maps.Geocoder;
  
  var latlng = new google.maps.LatLng(coords[0], coords[1]);
  var myOptions = {
    zoom: 18,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
    
  map = new google.maps.Map(document.getElementById( targetDiv ), myOptions);

  var myLatlng = new google.maps.LatLng(coords[0], coords[1]);
    
  var marker = new google.maps.Marker({
      map: map,
      position: myLatlng,
  });
}

function gmapsGeolocate() {
  var address = $("#address").val();
  
  // Tack on the city just in case
  // the user doesn't specify
  address = address + " philadelphia, pa";
  
  geocoder.geocode({'address': address}, function(results, status) {
  
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);

      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });

      var coordinates = [];

      coordinates[0] = results[0].geometry.location.lat();
      coordinates[1] = results[0].geometry.location.lng();

      codeAddress(coordinates[0], coordinates[1]);
    }

 });

}

function directions_calcRoute(origin, destination, targetMapDiv, targetDirectionsPanel) {
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var walking = google.maps.TravelMode.WALKING;

  directionsDisplay = new google.maps.DirectionsRenderer();
  var origin = new google.maps.LatLng(origin[0], origin[1]);
  var destination = new google.maps.LatLng(destination[0], destination[1]);

  var request = {
    origin: origin,
    destination: destination,
    travelMode: walking
  };

  var mapOptions = {
    zoom: 22,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: origin
  };

  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });

  map = new google.maps.Map(document.getElementById( targetMapDiv ), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById( targetDirectionsPanel ));
}

function showFade() {
  var windowHeight = $(window).height();
  var loading_img_div = $('.fade_loading_img');

  loading_img_div.css("top", windowHeight/2 - 100);  
  $('.fade').show();  
}

function hideFade() {
  $('.fade').hide();
}

function codeAddress(lat, lon) {
  showFade();
  $('div#search_results').empty();  

  /* Cache these vals just in case the user refreshes the results  */
  $('#cached_lat').val( lat );
  $('#cached_lon').val( lon );

  var radius = $("select.radius_select").val();
  
  $.ajax({
    url: "http://www3.septa.org/hackathon/locations/get_locations.php?lon=" + lon + "&lat=" + lat + "&type=sales_locations&radius=" + radius + "&callback=?",
    dataType: "jsonp",
    success: function(data) {
      if (data.length == 0) {
        alert('Could not find any tokens within a mile.');
      } else {
       
        var recordctr = 0;

        $.each(data, function(i, item) {

          var resultsDiv;
          var zebra;

          if (item.location_data != null) {

            dist_to_loc = item.distance.replace(/"/g, '');
            dist_to_loc = parseFloat( dist_to_loc );
            dist_to_loc = dist_to_loc.toFixed(3);

            if (recordctr % 2 == 0) {
                zebra = '';
            } else {
                zebra = ' zebra';
            }

            resultsDiv = '<div class="list_loc'+ zebra +'">';
            resultsDiv += '<a href="#page_two" data-transition="slide">';
            resultsDiv += '<span class="loc_name spanblock">' + item.location_name.replace(/"/g, '') + '</span>';
            resultsDiv += '<span class="loc_address spanblock">' + item.location_data.address1.replace(/"/g, '') + '</span>';
            resultsDiv += '<span class="loc_hours spanblock">' + item.location_data.hours.replace(/"/g, '') + '</span>';
            resultsDiv += '<span class="loc_distance spanblock"> Distance: ' + dist_to_loc  + ' miles</span>';
            resultsDiv += '</a>';
            resultsDiv += '<input type="hidden" class="loc_lat" value="'+ item.location_lat +'" />';
            resultsDiv += '<input type="hidden" class="loc_lon" value="'+ item.location_lon +'" />';
            resultsDiv += '<div class="toDirections">&gt;';
            resultsDiv += '</div>';

            recordctr++;

          }

          $('#search_results').append(resultsDiv);

        });

          $('#search_results').prepend( "<div class='locations_found'><p>" + data.length + " locations found.</p></div>" );
          $('#map_overlay').css({ 'z-index' : '0' });
          $('#search_results_wrapper').show();
          $('#scroll_message').show();
      }
    
    },
    complete: function(data) {
      hideFade();
    }

  });

} // End of codeAddress()
