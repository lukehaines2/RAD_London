var express       = require('express');
var app           = express();
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');
var morgan        = require('morgan');
var port          = process.env.PORT || 3000;
var passport      = require('passport');
var session       = require('express-session')
var cookieParser  = require('cookie-parser')
var flash         = require('connect-flash')


mongoose.connect('mongodb://localhost:27017/rad-london')


// var routes = require('./config/routes');
// app.use(routes);

// FAVICON
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.set('view engine', 'ejs') // makes the express app (app variable) look for your view folders
app.set('views', './public/views')

// LOGGING MIDDLEWARE
app.use(morgan('dev'))

// CONFIG //
//SERVE JS AND CSS FILES IN PUBLIC FOLDER
// app.use(express.static(__dirname + '/public'));

//BODY PARSER CONFIG
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


app.use(session({ secret: 'keyboard cat', key: 'sid', cookie: { secure: false }})); //session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./config/passport')(passport); // pass passport for configuration

//logging middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// ejs layout in here??
app.use(morgan('dev'));
app.use(cookieParser());
// app.use(routes);

//serve static assets (js, css, images) from the 'public' folder
app.use(express.static(__dirname + '/public'));

require('./config/routes')(app, passport);


//LISTEN ON PORT 3000
app.listen(port, function(){
  console.log('Listening on port', port);
});


