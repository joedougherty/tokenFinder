$(document).ready(function() {

  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;

  var origin = new google.maps.LatLng(39.954833, -75.183411); // 30th St Station
  var destination = new google.maps.LatLng(39.951069, -75.165609); // 15th & Chestnut
  var walking = google.maps.TravelMode.WALKING;

  function initialize() {
  	directionsDisplay = new google.maps.DirectionsRenderer();
  	
  	var mapOptions = {
      zoom: 22,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: origin
  	};

  	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  	directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
  }

  function calcRoute() {
  	
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

  }

  initialize();
  calcRoute();

});
