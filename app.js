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

var place1 = new Place({
  name: 'Bow Rd Police Station ',
  longitude: 51.533791,
  latitude: -0.024848
})


place1.historyModels.push({
  name: 'Suffragettes in the EastEnd',
  image: './public/bow_police_station.jpg',
  content: 'The police were horrifyingly brutal towards Suffragettes when on demonstrations and then, once arrested and tried, they would often receive excessively harsh prison sentences. Hunger striking was in protest against the government’s failure to treat them as political prisoners. Mrs Parsons told Asquith - “We do protest when we go along in processions that suddenly without a word of warning we are pounced upon by detectives and bludgeoned and women are called names by cowardly detectives, when nobody is about. There was one old lady of seventy who was with us the other day, who was knocked to the ground and kicked. She is a shirtmaker and is forced to work on a machine and she has been in the most awful agony. These men are not fit to help rule the country while we have no say in the matter.” (From the Woman’s Dreadnought.) Under the ‘Cat and Mouse Act’ hunger strikers were released when their lives was in danger so as to recuperate before returning to finish their sentences. They told tales of dreadful brutality during force-feeding in Holloway.'
});

place1.save(function(err, history){
  if(err) console.log(err)
  console.log('place1 saved', place1.name)
})


var place2 = new Place({
  name: 'Bromley Public Hall, Bow Rd',
  longitude: 51.533791,
  latitude: -0.024848
});

place2.historyModels.push({
  name: 'Suffragettes in the EastEnd',
  image: './public/bromley_public_hall.jpg',
  content: "On February 14th [1913] … we held a meeting in the Bromley Public Hall, Bow Road, and from it led a procession round the district. …To make sure of imprisonment, I broke a window in the police station … Daisy Lansbury was accused of catching a policeman by the belt, but the charge was dismissed. Zelie Emerson and I went to prison … .and began the hunger and thirst strike … On release we rushed back to the shop, found Mrs Lake scrubbing the table, and it crowded with members arranging to march to Holloway Prison to cheer us next day."
});

place2.save(function(err, history){
  if(err) console.log(err)
  console.log('place2 saved', place2.name)
});


var place3 = new Place({
  name: 'First Indian Restaurant & Blooms opens',
  longitude: 51.5144,
  latitude: 0.0586
});


place3.historyModels.push({
  name: 'First Indian Restaurant & Blooms opens',
  image: './public/blooms.jpg',
  content: "1920 Bloom’s Kosher Restaurant opens in Brick Lane and first Indian restaurant opens in East London"
});

place3.save(function(err, history){
  if(err) console.log(err)
  console.log('place3 saved', place3.name)
});



var place4 = new Place({
  name: 'The Battle of Cable Street',
  longitude: 51.533791,
  latitude: -0.024848
});

place4.historyModels.push({
  name: 'The Battle of Cable Street',
  image: './public/cable_street.jpg',
  content: "They built barricades from paving stones, timber and overturned lorries. Women threw the contents of chamber pots on to the heads of policemen and children hurled marbles under their horses and burst bags of pepper in front of their noses. Next Wednesday marks the 70th anniversary of the day that Jews, communists, trade unionists, Labour party members, Irish Catholic dockers and the people of the East End of London united in defiance of Sir Oswald Mosley's British Union of Fascists and refused to let them march through their streets. Shouting the Spanish civil war slogan \"No pasaran\" - \"They shall not pass\" - more than 300,000 people turned back an army of Blackshirts. Their victory over racism and anti-Semitism on Sunday October 4 1936 became known as the Battle of Cable Street and encapsulated the British fight against a fascism that was stomping across Europe.  Mosley planned to send columns of thousands of goose-stepping men throughout the impoverished East End dressed in uniforms that mimicked those of Hitler's Nazis. His target was the large Jewish community. The Jewish Board of Deputies advised Jews to stay away. The Jewish Chronicle warned: \"Jews are urgently warned to keep away from the route of the Blackshirt march and from their meetings.\"Jews who, however innocently, become involved in any possible disorders will be actively helping anti-Semitism and Jew-baiting. Unless you want to help the Jew baiters, keep away.\" The Jews did not keep away. Professor Bill Fishman, now 89, who was 15 on the day, was at Gardner's Corner in Aldgate, the entrance to the East End. \"There was masses of marching people. Young people, old people, all shouting 'No Pasaran' and 'One two three four five - we want Mosley, dead or alive',\" he said. \"It was like a massive army gathering, coming from all the side streets. Mosley was supposed to arrive at lunchtime but the hours were passing and he hadn't come. Between 3pm and 3.30 we could see a big army of Blackshirts marching towards the confluence of Commercial Road and Whitechapel Road. Marbles \"I pushed myself forward and because I was 6ft I could see Mosley. They were surrounded by an even greater army of police. There was to be this great advance of the police force to get the fascists through. Suddenly, the horses' hooves were flying and the horses were falling down because the young kids were throwing marbles.\" Thousands of policemen were sandwiched between the Blackshirts and the anti-fascists. The latter were well organised and through a mole learned that the chief of police had told Mosley that his passage into the East End could be made through Cable Street. \"I heard this loudspeaker say 'They are going to Cable Street',\" said Prof Fishman. \"Suddenly a barricade was erected there and they put an old lorry in the middle of the road and old mattresses. The people up the top of the flats, mainly Irish Catholic women, were throwing rubbish on to the police. We were all side by side. I was moved to tears to see bearded Jews and Irish Catholic dockers standing up to stop Mosley. I shall never forget that as long as I live, how working-class people could get together to oppose the evil of racism.\" Max Levitas, now 91, was a message runner and had already been fined £10 in court for his anti-Mosley activities. Two years before Cable Street, the BUF had called a meeting in Hyde Park and in protest Mr Levitas whitewashed Nelson's column, calling people to the park to drown out the fascists. Mr Levitas went on to become a Communist councillor in Stepney. \"I feel proud that I played a major part in stopping Mosley. When we heard that the march was disbanded, there was a hue and cry and the flags were going wild. They did not pass. The chief of police decided that if the march had taken place there would be death on the road - and there would have been,\" he said.\"It was a victory for ordinary people against racism and anti-Semitism and it should be instilled in the minds of people today. The Battle of Cable Street is a history lesson for us all. People as people must get together and stop racism and anti-Semitism so people can lead an ordinary life and develop their own ideas and religions.\"Beatty Orwell, 89, was scared and excited. \"People were fighting and a friend of mine was thrown through a plate glass window"
});

place4.save(function(err, history){
  if(err) console.log(err)
  console.log('place4 saved', place4.name)
});


var place5 = new Place({
  name: 'Spitalfields Market',
  longitude: 51.5166,
  latitude: 0.0750
});

place5.historyModels.push({
  name: '1682 Spitalfields Market founded',
  image: './public/spitalfields.jpg',
  content: "Spitalfields had been relatively rural until the Great Fire of London. By 1666, traders had begun operating beyond the city gates – on the site where today’s market stands. The landmark Truman’s Brewery opened in 1669 and in 1682 King Charles II granted John Balch a Royal Charter giving him the right to hold a market for flesh, fowl and roots to be sold on Thursdays and Saturdays in or near Spital Square. The success of the market encouraged people to settle in the area and following the edict of Nantes in 1685, Huguenots fleeing France brought their silk weaving skills to Spitalfields. Their grand houses can still be seen around what is now the conservation area of Fournier Street."
}); 

place5.save(function(err, history){
  if(err) console.log(err)
  console.log('place5 saved', place5.name)
});
