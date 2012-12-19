# tokenFinder #
## Find Septa tokens when you're on the go ##

tokenFinder is a mobile-friendly site that does precisely one thing: tells you where you can find Septa tokens (within a mile).

A functional prototype can be found at [http://tokenfinder.contextdevel.com] (http://tokenfinder.contextdevel.com). Hosting graciously provided by my employer, [Context, LLC] (http://www.contextllc.com).

Septa token locations are pulled from the excellent [Septa API] (http://www3.septa.org/hackathon/).

In the event that you want to manually enter an address, geolocation is handled by [Google Maps] (https://developers.google.com/maps/documentation/javascript/reference). Otherwise, automatic geolocation is handled by the [geo-location-javascript library] (http://code.google.com/p/geo-location-javascript/). 

Feel free to send feedback to mashematician [at] gmail dot com.

## Known Issues
Automatic geolocation does not appear to cooperate with GPS Location on Android 2.2 (Froyo).

## TODO:
* Implement responsive design.
* Remove cruft from codebase.
