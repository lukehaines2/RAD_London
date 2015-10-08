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

      // User.find({}, function(err, users) {
      //   if(err) console.log(err)
        res.render('places.ejs', { places: places, user: req.user }); 
      // })
    });
  });


  // route for showing the profile page
    app.get('/profile', isLoggedIn, function(req, res) {
        // res.redirect('/places')
        // res.render('/places', {
        //     user : req.user // get the user out of session and pass to template
        // });
      // User.find({}, function(err, users){
      //   if(err) console.log(err)
      //   res.render('places.ejs', { users: users } );
      // });
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

  app.get('/profile', function(req, res) {
    res.send("it's working")
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();

    res.redirect('/')
  }
}


