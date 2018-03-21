// This example uses the autocomplete feature of the Google Places API.
// It allows the user to find places of interest in a given place, within a given
// city or region. It then displays markers for all the places of interests returned,

var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = {'country': 'us'};
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/');
var all_places_img = "places_icons/places.png";
var restuarant_img = "places_icons/restaurant.png";
var hotel_img = "places_icons/hotels.png";
var image = all_places_img;


//This function is to refine the search based on which radio is clicked.
function multiple_search(e){
  
    if(e != ""){
        clearResults();
        clearMarkers();   
        search(e);         
    }else{
        document.getElementById('autocomplete').placeholder =  "Please enter a city";   
    }
}

//this function is used to add restaurants or hotels as the user may chose
function changeFunc(e){

   if(e == "restaurant"){
      image = restuarant_img ; 
   }else if(e == "lodging"){
      image = hotel_img ;   
   }
//   onPlaceChanged();
   search(e);
}  
//get the coordinates for middle of the atlantic as the zoom position to use for initial zoom
var countries = {
  'atl': {
    center: {lat: 47.45, lng: -30.27},
    zoom: 3
  }
};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: countries['atl'].zoom,
    center: countries['atl'].center,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    streetViewControl: true
  });



  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });

  // Create the autocomplete object and associate it with the UI input control.
  // Restrict the search to the default country, and to place type "cities".
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */ (
    document.getElementById('autocomplete')), {
  		types: ['geocode']
    });
  	places = new google.maps.places.PlacesService(map);

    autocomplete.addListener('place_changed', onPlaceChanged);
    // Add a DOM event listener to react when the user selects a country.
    document.getElementById('country').addEventListener(
       'change', setAutocompleteCountry);
}

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
   var place = autocomplete.getPlace();
   if (place.geometry) {
   	 map.panTo(place.geometry.location);
     map.setZoom(14);
    // search();
    clearResults();
    clearMarkers();    
    search("natural_feature") ;
    document.getElementById("nature").checked = true;
    document.title = "Places Of Interest In " +  document.getElementById('autocomplete').value;
   } else {
      document.getElementById('autocomplete').placeholder = 'Enter a city';
   }
}
// Search for businesses in the selected city, within the viewport of the map.
function search(initial_value = "natural_feature") {
   var search = {
     bounds: map.getBounds(),
     types:  [initial_value] 
   };
	  
   places.nearbySearch(search, function(results, status) {
   	 if (status === google.maps.places.PlacesServiceStatus.OK) {
     //    clearResults();
    //    clearMarkers();
         // Create a marker for each place found, and
         // assign a letter of the alphabetic to each marker icon.
         // var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
         
        // var image = "places_icons/places.png";
  
         for (var i = 0; i < results.length; i++) {
            var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
            var markerIcon = MARKER_PATH + markerLetter + '.png';
            
            // Use marker animation to drop the icons incrementally on the map.
            markers[i] = new google.maps.Marker({
              position: results[i].geometry.location,
              animation: google.maps.Animation.DROP,
              icon: image //markerIcon
            });
           // If the user clicks a place marker, show the details of that place
           // in an info window.
           markers[i].placeResult = results[i];
           google.maps.event.addListener(markers[i], 'click', showInfoWindow);
           setTimeout(dropMarker(i), i * 100);
           addResult(results[i], i);
         }
       }
    });
}

function clearMarkers() {
   for (var i = 0; i < markers.length; i++) {
      if (markers[i]) {
         markers[i].setMap(null);
       }
   }
   markers = [];
}


// Set the country restriction based on user input.
// Also center and zoom the map on the given country.
function setAutocompleteCountry() {
    var country = "all";//document.getElementById('country').value;
    if (country == 'all') {
      autocomplete.setComponentRestrictions({'country': []});
      map.setCenter({lat: 15, lng: 0});
      map.setZoom(2);
     } else {
        autocomplete.setComponentRestrictions({'country': country});
        map.setCenter(countries[country].center);
        map.setZoom(countries[country].zoom);
     }
     clearResults();
     clearMarkers();
     document.getElementById('autocomplete').value = "";// set the textbox free for new typing
}

function dropMarker(i) {
   return function() {
      markers[i].setMap(map);
   };
}

function addResult(result, i) {

  var results = document.getElementById('results');
  var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
  var markerIcon = MARKER_PATH + markerLetter + '.png';

  var tr = document.createElement('tr');
  tr.style.backgroundColor = (i % 2 === 0 ? '#F2F9F0' : '#FFFFFF');
  tr.onclick = function() {
    google.maps.event.trigger(markers[i], 'click');
  };

  var iconTd = document.createElement('td');
  var nameTd = document.createElement('td');
  var icon = document.createElement('img');
  icon.src = markerIcon;
  icon.setAttribute('class', 'placeIcon');
  icon.setAttribute('className', 'placeIcon');
  var name = document.createTextNode(result.name);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
}

function clearResults() {
   var results = document.getElementById('results');
   while (results.childNodes[0]) {
      results.removeChild(results.childNodes[0]);
   }
}

// Get the place details for a place. Show the information in an info window,
// anchored on the marker for the place that the user selected.
function showInfoWindow() {
   var marker = this;
   places.getDetails({placeId: marker.placeResult.place_id},
   function(place, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
         return;
      }
      infoWindow.open(map, marker);
       buildIWContent(place);
   });
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
  document.getElementById('iw-icon').innerHTML = '<img class="placeIcon" ' +
      'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
      '">' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;

  if (place.formatted_phone_number) {
     document.getElementById('iw-phone-row').style.display = '';
     document.getElementById('iw-phone').textContent =
       place.formatted_phone_number;
  } else {
     document.getElementById('iw-phone-row').style.display = 'none';
  }

  // Assign a five-star rating to  hotels, using a black star ('&#10029;')
  // to indicate the rating the hotel has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
     var ratingHtml = '';
     for (var i = 0; i < 5; i++) {
     if (place.rating < (i + 0.5)) {
        ratingHtml += '&#10025;';
     } else {
        ratingHtml += '&#10029;';
     }
     	document.getElementById('iw-rating-row').style.display = '';
      	document.getElementById('iw-rating').innerHTML = ratingHtml;
   	 }
   } else {
     document.getElementById('iw-rating-row').style.display = 'none';
   }

   // The regexp isolates the first part of the URL (domain plus subdomain)
   // to give a short URL for displaying in the info window.
   if (place.website) {
     var fullUrl = place.website;
     var website = hostnameRegexp.exec(place.website);
     if (website === null) {
        website = 'http://' + place.website + '/';
        fullUrl = website;
     }
       document.getElementById('iw-website-row').style.display = '';
       document.getElementById('iw-website').textContent = website;
     } else {
       document.getElementById('iw-website-row').style.display = 'none';
     }
     
    //show photo if available
  if (place.photos) {
     var photoUrl = place.photos[0].getUrl({maxWidth: 116, maxHeight: 116}); 
      document.getElementById('iw-photo-spot').src = photoUrl;
   } else {
     document.getElementById('iw-photo-row').style.display = 'none';
   }
}
