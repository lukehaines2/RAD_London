var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var Place = require('../models/place');


//GET /
function home(req, res){
  res.render('index.ejs');
};


//GET /places
function getPlaces(req, res){
  res.render('places.ejs');
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