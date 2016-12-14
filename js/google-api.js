(function($){

	'use strick';

  
   function customGoogleMap(){
      
       var map;
       var mapDiv = document.getElementById("google-mapID");
       var gLatLng = new google.maps.LatLng(24.741387,88.968138);
       map = new google.maps.Map(mapDiv,{

       	    center                 : gLatLng,
       	    zoom                   : 8,
       	    zoomControl            : false,
       	    streetViewControl      : false,
       	    scrollwheel            : false,
       	    draggable              : true,
       	    disableDoubleClickZoom : true
       });

       marker = new google.maps.Marker({

       	      position : gLatLng,
       	      map      : map,
       	      title    : "Custom Google Map Title",
       	      icon     : "images/birds.png",
       	      animation:google.maps.Animation.BOUNCE
       });

       // marker.addListener('click', toggleBounce);


      customMapStyle = new google.maps.StyledMapType([

              {stylers : [ { hue : "#ddd"}] },

               {
		          featureType: "administrative.neighborhood",
		          elementType: "labels.text.stroke",
		          stylers: [
		          { color: "#fff" },
		          {weight: 1}
		          ]
            }
      	]);

      var customid = "map2id";

      map.setMapTypeId(customid);
      map.mapTypes.set(customid,customMapStyle);
   }

customGoogleMap();

}(jQuery));