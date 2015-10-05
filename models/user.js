var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String, 
  email: String,
  checkIn: Number
})

module.exports = mongoose.model('User', userSchema);