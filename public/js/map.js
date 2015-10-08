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
   // var id = $(place).find('.place-id')[0].innerHTML;
   var placeId = $(place).find('.real-place-id')[0].innerHTML;
   // debugger;

//sorry about this but lat is actually long in seed data and visa versa :simple_smile:
   marker = new google.maps.Marker({
     position: {lat: lng, lng: lat},
     map: map,
     title: name,
     content: content,
     image: image,
     animation: google.maps.Animation.DROP,
     // id: id,
     placeId: placeId
   });
   marker.addListener('click', toggleBounce);
   
 };
};

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    markerClick();
  }
}

var actualPlaceId = {};

function markerClick() {
 marker.addListener('click', function() {
   var placeName = $(this)
     $('#info-box').animate({width: 'toggle'})
     if($('.title').is(':empty')){
       $('#image-tag').attr('src', placeName[0].image)
       $('.title').append(placeName[0].title);
       $('.place-information').append(placeName[0].content);
       // $('.location-id').append(placeName[0].id);

       actualPlaceId = placeName[0].placeId;

       $('.actual-place-id').append(placeName[0].placeId);
       //'.actual-place-id').append(placeName[0].placeId))
       // debugger;
       closeBar();
     } else {
        $('.title').empty();
        $('.place-information').empty();
        $('#image-tag').empty();
     };
     likeClick();
 });
};

function closeBar() {
 $('#close-bar').one('click', function() {
     $('#info-box').animate({width: 'toggle'})
      //omplete!")
      $('.title').empty();
      $('.place-information').empty();
      $('#image-tag').empty();
 })

};
var count = 0;

var gettingPlace = [];

function getIdOfPlace() {
  var actualNameOfPlace = $('.actual-place-id').text();
  var nameOfUser = $('.user-id').text();
  gettingPlace.push(actualNameOfPlace);
};

function likeClick() {
  $('#like').on('click', function(){
    getIdOfPlace();
   d);
    $.ajax({
      method: 'PUT',
      url: '/places',
      data: {places: actualPlaceId}
    }).done(function(){
         })
    $('.title').append($('.twitter-pic')[0])
  })
}

//function called when info-box has been toggled above
//close-bar links to the p class of x included in the place.ejs, with event listener animating toggle function to 0 
//with that event listener closes the box
function closeBar() {
  $('#close-bar').one('click', function() {
      $('#info-box').animate({width: 'toggle'})
       //omplete!")
       $('.title').empty();
       $('.place-information').empty();
       $('#image-tag').empty();
  })

};

var styledArray = [
   {
       "stylers": [
           {
               "hue": "#ff1a00 "
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
               "color": "#2D333C "
           }
       ]
   }
]