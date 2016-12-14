# Google Map Javascript API Simple Documentation

At First Create A Function For Example 

```javascript
function customGoogleMap(){

}
```

Create Three Variables, one for Main Map, One For Get HTML Map Container Div's Id.And Other For Location which Contain Lat And Lng Value. For Example ,

```javascript
 function customGoogleMap(){
      
       var map;
       var mapDiv = document.getElementById("google-mapID");
       var gLatLng = new google.maps.LatLng(24.741387,88.968138);
       
    }
```    
Now Applying Google Maps Map method,The Method Have Two Parameters First One For Map Container Id Other Parameter Take Maps Options
As Like As.......

```javascript
map = new google.maps.Map(mapDiv,{

       	    center                 : gLatLng,
       	    zoom                   : 10,
       	    zoomControl            : false,
       	    streetViewControl      : false,
       	    scrollwheel            : false,
       	    draggable              : true,
       	    disableDoubleClickZoom : true
       });
```       
**center :** That means Your Maps Latitude And Longitude.

**zoom :** Maps Zooming position, The Values Range Is 1 to 20. The Default Value Is 8.

**zoomControl :** maps bottom-right side showing + sigh , That Means Zoom option.There Are Two Option True or False. Default Value Is True.

**streetViewControl :** As Like As zoomcontrol option.Default Value Is True.

**scrollwhele :** True or False.If True Map Zooming When You Scroll Your Mouse Wheel.Default Value Is True.

**draggable :** Default Value Is True, Mouse Cursor Show as Hand and draggable the map.if false the cursor show pointer.

**disableDoubleClickZoom :** If You Double Click on Map The Map Is Zooming.But You Give The disableDoubleClickZoom as True, Prevent The Doubliclick zoomimg option

Get More Options From The Link [Google map javascript api options!] (https://developers.google.com/maps/documentation/javascript/reference)



##Google Map Marker

####what is Google map Marker ?
when we see any google map a location syamble or location indicator showing the Location. for example

![google map marker] (/images/lawn-garden.png)


it's very easy to create marker in your map.Google map have a Marker Method, We can use it to the the marker. so start now.......

```javascript
marker = new google.maps.Marker();
```

The Marker Method Takes Some Parameters.There Are position,map,title,icon etc. For Example .....


```javascript
marker = new google.maps.Marker({

       	      position : gLatLng,
       	      map      : map,
       	      title    : "Custom Google Map Title"

       });
```       

If You Type The Code You Can See Google Maps Default Marker.You Can Change The Marker As Your Custom Image Or logo.To doing that You Should Add Another Parameter That Called **icon** .

```javascript 
icon     : "images/birds.png"
```

We Can Found Different Google Maps Showing Animated Marker Or Location Indicators. How We can do this ?
not worry it's too easy, just adding the below line to the Market Method.

```javascript
animation:google.maps.Animation.BOUNCE
```
There Are Two Type of animation effects drop and bounce.
For Better Understing Given The Total Marker Method below.......

```javascript
marker = new google.maps.Marker({

       	      position : gLatLng,
       	      map      : map,
       	      title    : "Custom Google Map Title",
       	      icon     : "images/birds.png",
       	      animation:google.maps.Animation.BOUNCE
       });
 ```      




want to know more about marker ? Go here!# Google Map Javascript API Simple Documentation

At First Create A Function For Example

function customGoogleMap(){

}

Create Three Variables, one for Main Map, One For Get HTML Map Container Div's Id.And Other For Location which Contain Lat And Lng Value. For Example ,
 
 ```javascript
 function customGoogleMap(){

       var map;
       var mapDiv = document.getElementById("google-mapID");
       var gLatLng = new google.maps.LatLng(24.741387,88.968138);

    }
    
  ```  

Now Applying Google Maps Map method,The Method Have Two Parameters First One For Map Container Id Other Parameter Take Maps Options As Like As.......

```javascript
map = new google.maps.Map(mapDiv,{

            center                 : gLatLng,
            zoom                   : 10,
            zoomControl            : false,
            streetViewControl      : false,
            scrollwheel            : false,
            draggable              : true,
            disableDoubleClickZoom : true
       });
```

**center :** That means Your Maps Latitude And Longitude.

**zoom :** Maps Zooming position, The Values Range Is 1 to 20. The Default Value Is 8.

**zoomControl :** maps bottom-right side showing + sigh , That Means Zoom option.There Are Two Option True or False. Default Value Is True.

**streetViewControl :** As Like As zoomcontrol option.Default Value Is True.

**scrollwhele :** True or False.If True Map Zooming When You Scroll Your Mouse Wheel.Default Value Is True.

**draggable :** Default Value Is True, Mouse Cursor Show as Hand and draggable the map.if false the cursor show pointer.

**disableDoubleClickZoom :** If You Double Click on Map The Map Is Zooming.But You Give The disableDoubleClickZoom as True, Prevent The Doubliclick zoomimg option

Get More Options From The Link Google map javascript api options!
Google Map Marker
what is Google map Marker ?

when we see any google map a location syamble or location indicator showing the Location. for example

google map marker

it's very easy to create marker in your map.Google map have a Marker Method, We can use it to the the marker. so start now.......

```javascript
marker = new google.maps.Marker();

The Marker Method Takes Some Parameters.There Are position,map,title,icon etc. For Example .....

marker = new google.maps.Marker({

              position : gLatLng,
              map      : map,
              title    : "Custom Google Map Title"

       });
```

If You Type The Code You Can See Google Maps Default Marker.You Can Change The Marker As Your Custom Image Or logo.To doing that You Should Add Another Parameter That Called icon .

```javascript
icon     : "images/birds.png"
```
We Can Found Different Google Maps Showing Animated Marker Or Location Indicators. How We can do this ? not worry it's too easy, just adding the below line to the Market Method.

animation:google.maps.Animation.BOUNCE

There Are Two Type of animation effects drop and bounce. For Better Understing Given The Total Marker Method below.......

```javascript
marker = new google.maps.Marker({

              position : gLatLng,
              map      : map,
              title    : "Custom Google Map Title",
              icon     : "images/birds.png",
              animation:google.maps.Animation.BOUNCE
       });
```

want to know more about marker ? [Go here!] (https://developers.google.com/maps/documentation/javascript/markers)
