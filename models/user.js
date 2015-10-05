var mongoose = require('mongoose');

var Place = mongoose.model('Place');

var userSchema = new mongoose.Schema({
  name: String, 
  email: String,
  checkIn: Number,
  place_id: { type: mongoose.Schema.ObjectId, ref: 'Place'}
})

module.exports = mongoose.model('User', userSchema);