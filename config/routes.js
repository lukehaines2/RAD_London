var express           = require('express');
var router            = express.Router();
var bodyParser        = require('body-parser');
var methodOverride    = require('method-override');
var mongoose          = require('mongoose');
var Histories         = require('../models/history');
var Place             = require('../models/place');
var User              = require('../models/user');

//TWITTER ROUTES
module.exports = function(app, passport) {

  app.get('/', function(req, res) {
    res.render('index.ejs')
  });

  app.get('/places', function(req, res) {
    Place.find({}, function(err, places){
      if(err) console.log(err)
        res.render('places.ejs', { places: places, user: req.user }); 
    });
  });

  // route for showing the profile page
    app.get('/profile', isLoggedIn, function(req, res) {
      res.render('places.ejs', { user: req.user })
    });

        // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

  app.get('/auth/twitter', passport.authenticate('twitter', { scope: ['profile.photos','email'] }));

  app.get('/auth/twitter/callback', 
    passport.authenticate('twitter', {
      successRedirect: '/places',
      failureRedirect: '/'
    })
  )

  app.put('/places', isLoggedIn, function(req, res, next) {
      // return User.findById
      //if user exists grab user id and push place id in to user.places object
      console.log(req.user, "isbfibfipwf")
       console.log(JSON.stringify(req.body));
       
        // findByIdAndUpdate()
        // console.log("u have found a user")
      
        //  console.log("outside")
  })

      // if(req.user){
      //   console.log(req.user, "isbfibfipwf")
      //   next();
      //  } else {
      //   redirect('/')
      //  }

  app.get('/profile', function(req, res) {
    res.send("it's working")
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();

    res.redirect('/')
  }
}


