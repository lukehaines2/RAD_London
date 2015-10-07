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
    var image = $(place).find('.image')[0].innerHTML;
//sorry about this but lat is actually long in seed data and visa versa :)
    marker = new google.maps.Marker({
      position: {lat: lng, lng: lat},

var marker; 

function setMarkers(map) {
  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    marker = new google.maps.Marker({
      position: {lat: location[1], lng: location[2]},

      map: map,
      title: name,
      content: content,
      image: image
    });
    markerClick();
  };
  likeClick();
};


function markerClick() {
  marker.addListener('click', function() {
    var placeName = $(this)
    $('#info-box').animate({width: 'toggle'})
      if($('.title').is(':empty')){
          $('#image-tag').attr('src', placeName[0].image)
          $('.title').append(placeName[0].title);
          $('.place-information').append(placeName[0].content);
        closeBar();
      } else {
         $('.title').empty();
         $('.place-information').empty();
         $('#image-tag').empty();
         $('#like').empty()
         count = 0;
      };
  });
};

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
            markerClose();
    })
}


function closeBar() {

  $('#close-bar').one('click', function() {
      $('#info-box').animate({width: 'toggle'})
       // console.log("Animation complete!")
       $('.title').empty();
       $('.place-information').empty();
       $('#image-tag').empty();
       $('#like').empty();
  });
};

var count = 0;

function likeClick() {
  $('#like').on('click', function(){
    console.log("IS THIS WORKING?????")
    // $.post("/places", function(data){
    //   count ++
    //   console.log(count);
    //   $('#like').append("<i id='like' class='fa fa-thumbs-o-up'></i>");
    // })
  })
}

    $('#close-bar').one('click', function() {
        $('#info-box').animate({width: 'toggle'})
         console.log("Animation complete!")
         $('.title').empty();
         $('#image').empty();
         $('#place-name').empty();
         $('#place-content').empty();
        })
    };


function markerClose() {
     marker.addListener('click', function() {
        debugger;
        markerCloseBar();
    })
}

function markerCloseBar() {
    $('#info-box').animate({width: 'toggle'});
        console.log("Animation complete!")
        $('.title').empty();
        $('#image').empty();
        $('#place-name').empty();
        $('#place-content').empty();
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

