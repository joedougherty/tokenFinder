<?php
  require_once('classes.php');
  $dest_record = new DirectionsRecord($_GET['origin_lat'], $_GET['origin_lon'], $_GET['dest_lat'], $_GET['dest_lon']);
?>
<!DOCTYPE html>
<!--

  //////////             
 ////////// 
//////////               
\\\\\\\\\\\\\\\\\\       **************************************                
 \\\\\\\\  \\\\\\\\      *                                    *
  \\\\\\\\  \\\\\\\\     *  SEPTA Love.                       *            
   \\\\\\\\\\\\\\\\\\    *  A Code for Philadelphia project.  *
           //////////    *  codeforphilly.org                 *                 
          //////////     *                                    *
         //////////      **************************************
-->
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <title>tokenFinder</title>
    <link href="css/master.css" rel="stylesheet" type="text/css">
    <script type="text/javascript"
      src="http://maps.googleapis.com/maps/api/js?key=AIzaSyAI-LkWtWzN5Dp2BAgSd6V8cy1XBBE_Wa0&amp;sensor=true">
    </script>
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.css" />
    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.js"></script> 
    <script type="text/javascript" src="js/septaMaps.js"></script> 
    <script type="text/javascript" src="js/behavior.js"></script>    
    <script type="text/javascript" src="js/libs/geo-min.js"></script> 
    <script type="text/javascript" src="js/location.js"></script>
  </head>
  
<body class="location-page">
  
  <div class="coords-container">
    <div id="origin_lat"><?php print $dest_record->origin_lat; ?></div>
    <div id="origin_lon"><?php print $dest_record->origin_lon; ?></div>
    <div id="destination_lat"><?php print $dest_record->destination_lat; ?></div>
    <div id="destination_lon"><?php print $dest_record->destination_lon; ?></div>
  </div>

  <div class="outer_wrapper">
    <div id="fade">
     <div id="fade_loading_img">
       <img src="img/loading.gif" alt="Loading..." />
     </div> 
    </div>
    
    <div class="inner_wrapper">
        <div id="map_canvas"></div>
        <div id="directionsPanel"></div>
    </div>
  </div>
  <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36550069-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  </script>
</body>
</html>
   
