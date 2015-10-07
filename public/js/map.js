function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.533746, lng: -0.024878},
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


var marker; 

function setMarkers(map) {
  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    marker = new google.maps.Marker({
      position: {lat: location[1], lng: location[2]},
      map: map,
      title: location[0]
    });
    markerClick();
  }
}

function markerClick() {
marker.addListener('click', function() {
        var placeName = $(this)
        $('#info-box').animate({width: 'toggle'})
            var data = $('#place-name').attr('data-attribute');
            $('#place-name').append(data)
            var dataContent = $('#place-content').attr('data-attribute');
            $('#place-content').append(dataContent);

            var image = $('#image').attr('data-attribute');
            $('#image').append("<img src='" + image + "'/>");
            var title = placeName[0].title
            $('.title').append(title);
            closeBar();
    })
}

//function called when info-box has been toggled above
//close-bar links to the p class of x included in the place.ejs, with event listener animating toggle function to 0 
//with that event listener closes the box
function closeBar() {
    $('#close-bar').one('click', function() {
        debugger;
        $('#info-box').animate({width: 'toggle'})
         console.log("Animation complete!")
         $('.title').empty();
         $('#image').empty();
         $('#place-name').empty();
         $('#place-content').empty();
        })
    };


//     });
//   }
// }

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


