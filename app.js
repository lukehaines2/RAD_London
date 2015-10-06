var express       = require('express');
var app           = express();
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');
var morgan        = require('morgan');
var port          = process.env.PORT || 3000;

// DATABASE SETUP
var HistoryModel = require('./models/history');
var Place = require('./models/place');
var User = require('./models/user');

// MONGOOSE CONNECT
mongoose.connect('mongodb://localhost:27017/rad-london')


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

//ROOT ROUTE

// app.get('/', function(req, res){
//   res.render('index');
// });

// app.get('/', function(req, res){
//   res.render('index');
// });
var routes = require('./config/routes');
app.use(routes);

// var placeRouter = require('./controllers/places');
// app.use('/places', placeRouter);


//LISTEN ON PORT 3000
app.listen(port, function(){
  console.log('Listening on port', port);
});


/////seeds
// var suffragettes = new HistoryModel({
//   name: 'Suffrattes smash up brick lane',
//   image: 'IAMAN IMAGE',
//   content: 'bkdsahbfhdskulhfkluhadskuhf'
// });

var places = new Place({
  name: 'brick lane',
  longitude: 5,
  latitude: 10,
})

places.historyModels.push({
  name: 'Suffragettes smash up brick lane',
  image: 'http://media.tumblr.com/tumblr_maa9xum6q81rt6v32.jpg',
  content: 'members of women\'s organisation (right to vote) movements in the late 19th and early 20th century, particularly militants in Great Britain such as members of the Women\'s Social and Political Union (WSPU). Suffragist is a more general term for members of suffrage movement.'
});

places.save(function(err, history){
  if(err) console.log(err)
    console.log('saved!')
})