function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.533746, lng: -0.024878},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styledArray
  }) 
  setMarkers(map);
}


var marker;

function setMarkers(map) {
  var places = $('.place-container');
  for (var i = 0; i < places.length; i++) {
    var place = places[i];
    var name = $(place).find('.place-name')[0].innerHTML;
    var lat = parseFloat($(place).find('.lat')[0].innerHTML);
    var lng = parseFloat($(place).find('.long')[0].innerHTML);
    var content = $(place).find('.place-content')[0].innerHTML;
//sorry about this but lat is actually long in seed data and visa versa :)
    marker = new google.maps.Marker({
      position: {lat: lng, lng: lat},
      map: map,
      title: name
    });
    markerClick();
  };
};


function markerClick() {
  marker.addListener('click', function() {
    var placeName = $(this)
    console.log($(this))
    $('#info-box').animate({width: 'toggle'})
      console.log('INFOOO')
        // var data = $('#place-name').attr('data-attribute');
        // $('#place-name').append(data)
        // var dataContent = $('#place-content').attr('data-attribute');
        // $('#place-content').append(dataContent);

        // var image = $('#image').attr('data-attribute');
        // $('#image').append("<img src='" + image + "'/>");
        // var title = placeName[0].title
        // $('.title').append(title);
        // closeBar();
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


