//GET /
function home(req, res){
  res.render('index.ejs');
};


//GET /places
function getPlaces(req, res){
  res.render('places.ejs');
};

//POST /places
function postPlaces(req, res){
  res.render('place.ejs');
  //this needs to show the results of a users search
  //so grab the user data from the search bar, get the geocoded data and return the new page
};


module.exports = {
  home: home,
  getPlaces : getPlaces,
  postPlaces : postPlaces
};