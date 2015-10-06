function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.533791, lng: -0.024848},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styledArray
  }) 
  setMarkers(map);
}

var locations = [
    ['Battle of Cable Street', 51.519184, -0.058872], 
    ['Suffragettes in the EastEnd', 51.5144, 0.0586], 
    ['The Blind Beggar', 51.519184, -0.058872], 
    ['Bow Road Police Station', 51.533791, -0.024848]
];

function setMarkers(map) {
  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    var marker = new google.maps.Marker({
      position: {lat: location[1], lng: location[2]},
      map: map,
      title: location[0]
    });

    marker.addListener('click', function() {
        var placeName = $(this)
        $('#info-box').animate({width: 'toggle'})
            var title = placeName[0].title
            $('.title').append(title);
    })
  }
}


var styledArray = [
    {
        "stylers": [
            {
                "hue": "#ff1a00"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
            },
            {
                "lightness": 33
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2D333C"
            }
        ]
    }
]


