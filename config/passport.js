var TwitterStrategy = require('passport-twitter').Strategy
var User = require('../models/user')

var configAuth = require('./auth')

module.exports = function (passport) {
  passport.serializeUser(function(user, done) {
      done(null, user.id);
  })

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    })
  })

  passport.use(new TwitterStrategy ({
    consumerKey : configAuth.twitterAuth.consumerKey,
    consumerSecret : configAuth.twitterAuth.consumerSecret,
    callbackURL : configAuth.twitterAuth.callbackURL
  },

  function(token, tokenSecret, profile, done) {
    process.nextTick(function() {
          // console.log(profile)

      User.findOne({ 'twitter.id' : profile.id }, function(err, user) {
        if (err)
          return done(err);
        if (user) {
          return done(null, user);
        } else {
          var newUser                 = new User();

          newUser.twitter.id          = profile.id;
          newUser.twitter.token       = token;
          newUser.twitter.username    = profile.username;
          newUser.twitter.displayName = profile.displayName;
          newUser.twitter.profileImage  = profile.photos[0].value;
          newUser.twitter.lastStatus = profile._json.status.text;

          newUser.save(function(err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }))
};