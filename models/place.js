var mongoose = require('mongoose');

var HistoryModel = mongoose.model('HistoryModel');


var placeSchema = new mongoose.Schema({
  name: String, 
  longitude: Number,
  latitude: Number,
  historyModels: [HistoryModel.schema]
})


module.exports = mongoose.model('Place', placeSchema);
