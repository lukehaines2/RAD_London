var mongoose = require('mongoose');

var placeSchema = new mongoose.Schema({
  name: String, 
  longitude: Number,
  latitude: Number 
})

module.exports = mongoose.model('Place', placeSchema);