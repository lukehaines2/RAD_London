var express = require('express');
var router = express.Router();
//PARSES INFO FROM POST
var bodyParser = require('body-parser');
//USED TO MANIPULATE POST METHODS
var methodOverride = require('method-override');
var placesController = require('../controllers/places')


router.route('/')
  .get(placesController.home);

router.route('/places')
  .get(placesController.getPlaces)
  .post(placesController.postPlaces);

module.exports = router
