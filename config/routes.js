var express = require('express');
var router = express.Router();
//PARSES INFO FROM POST
var bodyParser = require('body-parser');
//USED TO MANIPULATE POST METHODS


var methodOverride = require('method-override');

var mongoose = require('mongoose');

var Histories = require('../models/history');
var Place = require('../models/place');
var User = require('../models/user');


// router.route('/')
//   .get(placesController.home);

// router.route('/places')
//   .get(placesController.getPlaces)
//   .post(placesController.postPlaces);

// router.route('/signup')
//   .get(usersController.authTwitter)
//   .get(usersController.authTwitterCallback);

// app.get('/auth/twitter', passport.authenticate('twitter'));

// app.get('/auth/twitter/callback', 
//   passport.authenticate('twitter', {
//     successRedirect: '/profile',
//     failureRedirect: '/'
//   })
// )

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated())
//     return next();

//   res.redirect('/')
// }

// function getPlaces(req, res){
  
//   });
// };


//TWITTER ROUTES
module.exports = function(app, passport) {

  app.get('/', function(req, res) {
    res.render('index.ejs')
  });

  app.get('/places', function(req, res) {
    Place.find({}, function(err, places){
      if(err) console.log(err)
      res.render('places.ejs', { places: places } );
    });
  });



  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/auth/twitter/callback', 
    passport.authenticate('twitter', {
      successRedirect: '/profile',
      failureRedirect: '/'
    })
  )

  app.get('/profile', function(req, res) {
    res.send("it's working")
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();

    res.redirect('/')
  }
}

// module.exports = router


