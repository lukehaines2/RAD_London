var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var Histories = require('../models/history');
var Place = require('../models/place');
var User = require('../models/user');

//GET //
function home(req, res){
<<<<<<< HEAD
  res.render('index.ejs')
=======
  res.render('index.ejs');
>>>>>>> 6ace5c57ead2ce68db83f0c4640a5140528e764c
  // res.json
};


//GET /places
function getPlaces(req, res){
  Place.find({}, function(err, places){
    if(err) console.log(err)
    res.render('places.ejs', { places: places });

  });
};


//POST /places
function postPlaces(req, res){
  // res.render('place.ejs');

  var place = new Place(req.body);

  place.save(function(err, place) {
    if(err) res.send({message: 'Not available' + err});
    res.json(place)
  });
  //this needs to show the results of a users search
  //so grab the user data from the search bar, get the geocoded data and return the new page
};



module.exports = {
  home: home,
  getPlaces : getPlaces,
  postPlaces : postPlaces
};