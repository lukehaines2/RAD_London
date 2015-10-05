var mongoose = require('mongoose');

var historySchema = new mongoose.Schema({
  name: String,
  image: String, 
  content: String
})

module.exports = mongoose.model('HistoryModel', historySchema);