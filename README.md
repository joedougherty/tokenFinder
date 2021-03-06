# tokenFinder #
## Find Septa tokens when you're on the go ##

tokenFinder is a mobile-friendly site that does precisely one thing: tells you where you can find Septa tokens (within a mile).

Live version can be found at [http://tokenfinder.org] (http://www.tokenfinder.org).

Septa token locations are pulled from the excellent [Septa API] (http://www3.septa.org/hackathon/).

In the event that you want to manually enter an address, geolocation is handled by [Google Maps] (https://developers.google.com/maps/documentation/javascript/reference). Otherwise, automatic geolocation is handled by the [geo-location-javascript library] (http://code.google.com/p/geo-location-javascript/). 

Feel free to send feedback to mashematician [at] gmail dot com.

## Known Issues
Automatic geolocation does not appear to cooperate with GPS Location on Android 2.2 (Froyo).

## TODO:
* Implement responsive design. [DONE]
* Remove cruft from codebase.  [DONE]
* Implement saved locations/favorites?
