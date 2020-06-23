<!DOCTYPE html>
<html>
    <head>
        <title>Introduction to Google Maps Javascript API</title>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
        <meta charset="utf-8">
        <style>
            html,body{
                height: 100%;
            }
            #map{
                height: 60%;
            }
        </style>
    </head>
    <body>
        <div id="map"></div>
        
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyALFnVkXZpzKYsE6pMMkLuubUKiPT0WnpY"> 
//            key of developer site(udemy) : AIzaSyCwJ2Vepe9L2Miuh7QH87SR_RItIXHlX6Q
//            mine google map api key : AIzaSyALFnVkXZpzKYsE6pMMkLuubUKiPT0WnpY
        </script>
        <script>
            //set map options
            var myLatLng ={
                lat : 51.5,
                lng: -0.1
            }
            var mapOptions = {
                center : myLatLng,
                zoom: 7,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            };
            //create map
            var map=new google.maps.Map(document.getElementById('map'),mapOptions);
            
            //setting the maptypeId upon construction
            map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        
        </script>
        
    </body>

</html>