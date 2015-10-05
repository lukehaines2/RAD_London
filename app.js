var express       = require('express');
var app           = express();
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');
var morgan        = require('morgan');
var port          = process.env.PORT || 3000;

// DATABASE SETUP
var Place = require('./models/place');
var User = require('./models/user');
var History = require('./models/history');
mongoose.connect('mongodb://localhost:27017/rad-london')

app.set('view engine', 'ejs') // makes the express app (app variable) look for your view folders
app.set('views', './public/views')

// LOGGING MIDDLEWARE
app.use(morgan('dev'))

// CONFIG //
//SERVE JS AND CSS FILES IN PUBLIC FOLDER
app.use(express.static(__dirname + '/public'));

//BODY PARSER CONFIG
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROOT ROUTE
app.get('/', function(req, res){
  res.render('index');
});

//CREATE
app.post('/', function(req, res) {
  var place = new Place(req.body);

  place.save(function(err) {
    if(err) res.json({message: 'None' + err})
    // console.log(place)
    res.json(place)
  });
});

app.post('/users', function(req, res) {
  var user = new User(req.body);

  user.save(function(err) {
    if(err) res.json({message: 'None' + err})
    // console.log(place)
    res.json(user)
  });
});

app.post('/history', function(req, res) {
  var history = new History(req.body);

  history.save(function(err) {
    if(err) res.json({message: 'None' + err})
    // console.log(place)
    res.json(history)
  });
});


//LISTEN ON PORT 3000
app.listen(port, function(){
  console.log('Listening on port', port);
});