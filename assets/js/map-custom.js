/* ================================================
Template Name: ARCHEN - CREATIVE MULTIPURPOSE TEMPLATE
Description: A creative multipurpose website template
Version: 1.0
Author: Code & Square
Author URI: codeandsquare.com
================================================ */

$(document).ready(function() {
	'use strict';
    
//  GOOGLE MAP
    $(function(){

        var longitude = 59.327467;
        var latitude = 18.042724;
        var canvas = "gmap_canvas";

	
        function load_map(canvas, lan, lat){			
            var myLatlng = new google.maps.LatLng(lan,lat);
            var isDraggable = $(document).width() > 768 ? true : false;
            var myOptions = {
                zoom: 16,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                streetViewControl: false,
                zoomControl: false,
                panControl: false,
                draggable: isDraggable,
                disableDefaultUI: true
            }			
            var map = new google.maps.Map( document.getElementById(canvas), myOptions );
            var marker = new google.maps.Marker({
			    position : myLatlng,
			    map      : map,
			    icon     : "assets/img/point.png"
            });
        
            var styles = [
                {
                    featureType: "all",
                    stylers: [
                        { saturation: -90 }
                    ]
                },{
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [
                        { hue: "#00ffee" },
                        { saturation: 50 }
                    ]
                },{
                    featureType: "poi.business",
                    elementType: "labels",
                    stylers: [
                        { visibility: "off" }
                    ]
                }
            ];	
            var infowindow = new google.maps.InfoWindow({
                content:"<div class='map_adresse'><div class='map_address'><span class='address'>Address : </span>Kungsholmstorg 4, Stockholm, 112 21, Sweden</div> <div class='map_tel'><span class='tel'>Phone : </span>+00 123 456 789</div></div>"
            });	
			
            map.setOptions({styles: styles});

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });
	   }
        load_map(canvas, longitude, latitude);

    });
    
});