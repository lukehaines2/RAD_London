var express       = require('express');
var app           = express();
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');
var morgan        = require('morgan');
var port          = process.env.PORT || 3000;


app.get('/', function(req, res) {
  res.render('index')
});

mongoose.connect('mongodb://localhost:27017/rad-london')


var routes = require('./config/routes');
app.use(routes);

// FAVICON
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/favicon.ico'));

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




//LISTEN ON PORT 3000
app.listen(port, function(){
  console.log('Listening on port', port);
});


