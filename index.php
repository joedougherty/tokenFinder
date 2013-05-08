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
  </head>
  
<body class="home-page">

    <!-- Begin page_one -->
    <div data-role="page" id="page_one">
      <div class="outer_wrapper">
        <div id="fade">
         <div id="fade_loading_img">
           <img src="img/loading.gif" alt="Loading..." />
         </div> 
        </div>
        <div class="inner_wrapper">
     
          <div id="where_you_at">
            <h1>Find Tokens!</h1>
          </div>

          <input id="address" type="text" class="rounded default-value" value="Enter Address Here">
          
          <div class="buttonholder">
            <input type="button" id="findatoken" value="Use This Address">
          </div>

          <div class="autotrack">
              <p><em>or</em></p>
              <p><button>Find my location</button></p>
          </div>

          <div id="map_overlay">
            <div id="scroll_message">Scroll below map to see locations.</div>
            <div id="map_canvas"></div>
          </div>
          
          <div id="directionsPanel"></div>

          <div id="search_results_wrapper">
            <div>
                <div class="within">
                    <span>within</span>
                </div>
                <select class="radius_select">
                  <option value="1" selected>1 mile</option>
                  <option value="1.5">1.5 miles</option>
                  <option value="2">2 miles</option>
                </select>
                <button class="refresh_list">Refresh</button> 
            </div>
            <div id="search_results"></div>

            <div>
                <input type="hidden" id="cached_lat" />
                <input type="hidden" id="cached_lon" />
            </div>

          </div>

        </div>
      </div>
    </div>
    <!-- End page_one -->

    <!-- Begin page two -->
    <div data-role="page" id="page_two">
       <div id="locationMap"></div>
       <div id="locationDirectionsPanel"></div> 
    </div>
    <!-- End page_two -->

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
