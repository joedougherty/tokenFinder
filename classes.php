<?php

class DirectionsRecord {
  
  var $origin_lat;
  var $origin_lon;
  var $desination_lat;
  var $destination_lon;

  function __construct($origin_lat, $origin_lon, $destination_lat, $destination_lon) {
    $this->origin_lat = $origin_lat;
    $this->origin_lon = $origin_lon;
    $this->destination_lat = $destination_lat;
    $this->destination_lon = $destination_lon;
  }

}

?>
