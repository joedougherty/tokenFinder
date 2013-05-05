$(document).ready(function() {

  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var walking = google.maps.TravelMode.WALKING;
  
  function directions_calcRoute(origin, destination) {
    directionsDisplay = new google.maps.DirectionsRenderer();
    
    var origin = new google.maps.LatLng(origin[0], origin[1]);
    var destination = new google.maps.LatLng(destination[0], destination[1]);

  	var request = {
  		origin: origin,
  		destination: destination,
  		travelMode: walking
  	};

  	directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
      	directionsDisplay.setDirections(result);
      }
  	});

  	directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
  
  }
  
});
