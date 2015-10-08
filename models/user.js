var mongoose = require('mongoose');

// var Place = mongoose.model('Place');

var userSchema = new mongoose.Schema({
  twitter: {
    id           : String,
    token        : String,
    displayName  : String,
    username     : String,
    profileImage : String
  }
})

module.exports = mongoose.model('User', userSchema);