// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.50949, lng: -0.102654},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  
});

  // Create the search box and link it to the UI element.
  // var input = document.getElementById('pac-input');
  // var searchBox = new google.maps.places.SearchBox(input);
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // // Bias the SearchBox results towards current map's viewport.
  // map.addListener('bounds_changed', function() {
  //   searchBox.setBounds(map.getBounds());
  // });

  var markers = [
      ['Battle of Cable Street', 51.519184, -0.058872, 1], 
      ['Cerial Killer', 51.5108, 0.0556, 2], 
      ['The Blind Beggar', 51.519183, -0.058871, 3], 
      ['Sylvia Pankhurst sets up East London suffragette group', 51.519184, -0.058872, 4]
      ];

      for (i = 0; i < markers.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(markers[i][1], markers[i][2], markers[i][3], markers[i][4]), 
        map: map
      });

  // [START region_getplaces]
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  // searchBox.addListener('places_changed', function() {
    // var places = searchBox.getPlaces();

    // if (places.length == 0) {
    //   return;
    // }

    // Clear out the old markers.
    // markers.forEach(function(marker) {
    //   marker.setMap(markers);
    // });
    // markers.forEach(function() {

    // });
  

    var infowindow = new google.maps.InfoWindow();

    // var marker, i; 

    //   google.maps.event.addEventListener(marker, 'click', (function(marker, i) {
    //     return function() {
    //       infowindow.setContent(locations[i][0]);
    //       infowindow.open(map, marker);
    //     }
    //   }) (marker, i));
    // }

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      // markers.push(new google.maps.Marker({
      //   map: map,
      //   icon: icon,
      //   title: place.name,
      //   position: place.geometry.location
      // }));

    //   if (place.geometry.viewport) {
    //     // Only geocodes have viewport.
    //     bounds.union(place.geometry.viewport);
    //   } else {
    //     bounds.extend(place.geometry.location);
    //   }
    // });
    // map.fitBounds(bounds);
  // };
  // [END region_getplaces]
}

