var mongoose = require('mongoose');

// var Place = mongoose.model('Place');

var userSchema = new mongoose.Schema({
  twitter: {
    id           : String,
    token        : String,
    displayName  : String,
    username     : String
  }
  // place_id: { type: mongoose.Schema.ObjectId, ref: 'Place'}
})

module.exports = mongoose.model('User', userSchema);