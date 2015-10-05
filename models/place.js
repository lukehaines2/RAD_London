var mongoose = require('mongoose');
var PlaceSchema = new mongoose.Schema({
  name: String, 
  longitude: Number,
  latitude: Number 
})
mongoose.model('Place', PlaceSchema);