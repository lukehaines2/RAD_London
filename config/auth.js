module.exports = {
  passport.use(new TwitterStrategy({
    'twitterAuth' : {
         'consumerKey'       : process.env.TWITTER_CONSUMER_KEY_GROUP,
         'consumerSecret'    : process.env.TWITTER_ACCESS_TOKEN_SECRET_GROUP,
         'callbackURL'       : 'http://127.0.0.1:3000/auth/twitter/callback'
     },
     function(token, tokenSecret, profile, done) {
      User.findOrCreate({ twitterId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  }));
}