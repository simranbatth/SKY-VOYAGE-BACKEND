require("dotenv").config();

const mongoose = require("mongoose");
const Package = require("./model/Package");


const packages = [
{
 name:"Greece Escape",
 country:"Greece",
 location:"Santorini & Mykonos",

 duration:"7 Days / 6 Nights",
 price:"₹89,999",
 rating:4.9,

 hotel:"5 Star Hotel",
 flights:"Included",
 meals:"Breakfast Included",
 groupSize:"2 - 12 People",

 image:"greece.png",
 banner:"greecebanner.png",

 gallery:[
 "greece1.png",
 "greece2.png",
 "greece3.png",
 "greece4.png"
 ],


description:
"Escape to the breathtaking islands of Greece and experience a perfect blend of history, luxury, and natural beauty. Wander through the whitewashed streets of Santorini, admire the iconic blue-domed churches, relax on crystal-clear beaches, and enjoy unforgettable sunsets over the Aegean Sea. Explore Mykonos nightlife, taste authentic Greek cuisine, and discover ancient landmarks.",


highlights:[
"Visit Santorini Blue Dome Churches",
"Relax on Mykonos Beaches",
"Luxury Sunset Cruise",
"Traditional Greek Food Experience",
"Explore Ancient Athens",
"Photography at Oia Village",
"Free Shopping Time",
"Professional Tour Guide"
],


includes:[
"Round Trip Airfare",
"Luxury Hotel Accommodation",
"Daily Breakfast",
"Airport Transfers",
"Guided Sightseeing Tours",
"Sunset Cruise",
"Local Transportation",
"Professional Tour Guide"
],


itinerary:[
"Day 1 - Arrival in Athens and Hotel Check-in",
"Day 2 - Athens City Tour & Acropolis Visit",
"Day 3 - Ferry to Santorini and Sunset at Oia",
"Day 4 - Santorini Sightseeing & Volcano Cruise",
"Day 5 - Mykonos Island Tour & Beaches",
"Day 6 - Shopping, Local Food & Leisure",
"Day 7 - Departure for Home"
]

},
{
  name:"Italy Explorer",
  country:"Italy",
  location:"Rome, Venice & Florence",

  duration:"8 Days / 7 Nights",
  price:"₹1,19,999",
  rating:4.8,

  hotel:"4 Star Hotel",
  flights:"Included",
  meals:"Breakfast Included",
  groupSize:"2 - 15 People",

  image:"italy.png",
  banner:"italybanner.png",

  gallery:[
    "italy1.png",
    "italy2.png",
    "italy3.png",
    "italy4.png"
  ],

  description:
  "Experience the timeless beauty of Italy through ancient history, romantic cities, artistic masterpieces and delicious cuisine. Explore the Colosseum in Rome, enjoy a magical gondola ride in Venice, admire Florence's Renaissance architecture and create unforgettable European memories.",

  highlights:[
    "Visit Colosseum in Rome",
    "Venice Gondola Ride",
    "Explore Florence Cathedral",
    "Pisa Leaning Tower",
    "Italian Food Experience",
    "Luxury Shopping",
    "Professional Guide"
  ],

  includes:[
    "Round Trip Airfare",
    "Luxury Hotel Accommodation",
    "Daily Breakfast",
    "Airport Transfers",
    "Guided City Tours",
    "Local Transportation"
  ],

  itinerary:[
    "Day 1 - Arrival in Rome & Hotel Check-in",
    "Day 2 - Rome City Tour & Colosseum Visit",
    "Day 3 - Travel to Venice & Gondola Ride",
    "Day 4 - Explore Venice Attractions",
    "Day 5 - Florence City Tour",
    "Day 6 - Pisa Excursion",
    "Day 7 - Shopping & Leisure",
    "Day 8 - Departure"
  ]
},


{
  name:"Spain Adventure",
  country:"Spain",
  location:"Barcelona & Madrid",

  duration:"7 Days / 6 Nights",
  price:"₹99,999",
  rating:4.8,

  hotel:"4 Star Hotel",
  flights:"Included",
  meals:"Breakfast Included",
  groupSize:"2 - 15 People",

  image:"spain.png",
  banner:"spainbanner.png",

  gallery:[
    "spain1.png",
    "spain2.png",
    "spain3.png",
    "spain4.png"
  ],

  description:
  "Discover Spain's vibrant culture, beautiful architecture, historic landmarks and exciting lifestyle. Explore Barcelona's famous attractions, enjoy Spanish cuisine, experience flamenco shows and discover the charm of Madrid.",

  highlights:[
    "Sagrada Familia Visit",
    "Camp Nou Experience",
    "Royal Palace Madrid",
    "Flamenco Dance Show",
    "Spanish Food Tour",
    "Barcelona City Walk"
  ],

  includes:[
    "Round Trip Flights",
    "Luxury Hotel Stay",
    "Breakfast",
    "Airport Transfers",
    "Sightseeing Tours",
    "Tour Guide"
  ],

  itinerary:[
    "Day 1 - Arrival in Barcelona",
    "Day 2 - Barcelona City Tour",
    "Day 3 - Sagrada Familia & Shopping",
    "Day 4 - Travel to Madrid",
    "Day 5 - Madrid Sightseeing",
    "Day 6 - Leisure & Food Experience",
    "Day 7 - Departure"
  ]
},

{
  name: "Canada Tour",
  country: "Canada",
  location: "Banff & Niagara Falls",
  duration: "8 Days / 7 Nights",
  price: "₹1,49,999",
  rating: 4.9,

  hotel: "5 Star Hotel",
  flights: "Included",
  meals: "Breakfast Included",
  groupSize: "2 - 10 People",

  image: "canada.png",

  banner: "canadabanner.png",

  gallery: [
    "canada1.png",
    "canada2.png",
    "canada3.png",
    "canada4.png"
  ],

  description:
  "Explore Canada's breathtaking landscapes, majestic mountains, beautiful lakes and world-famous attractions. Enjoy nature, adventure and unforgettable experiences across Canada's most beautiful destinations.",

  highlights:[
    "Niagara Falls",
    "Banff National Park",
    "Lake Louise",
    "Icefield Parkway",
    "Toronto City Tour"
  ],

  includes:[
    "Round Trip Flights",
    "Luxury Hotel",
    "Breakfast",
    "Airport Transfers",
    "Sightseeing"
  ],

  itinerary:[
    "Day 1 - Arrival in Toronto",
    "Day 2 - Niagara Falls Tour",
    "Day 3 - Fly to Calgary",
    "Day 4 - Banff National Park",
    "Day 5 - Lake Louise Visit",
    "Day 6 - Adventure Activities",
    "Day 7 - Shopping",
    "Day 8 - Departure"
  ]
},

{
name:"Edinburgh Escape",
country:"Scotland",
location:"Edinburgh",
duration:"6 Days / 5 Nights",
price:"₹1,09,999",
rating:4.7,

hotel:"4 Star Hotel",
flights:"Included",
meals:"Breakfast Included",
groupSize:"2 - 12 People",

image:"edinburgh.png",
banner:"edinburghbanner.png",

gallery:[
"edinburgh1.png",
"edinburgh2.png",
"edinburgh3.png",
"edinburgh4.png"
],

description:"Discover the historic beauty of Edinburgh with ancient castles, royal streets and breathtaking Scottish landscapes.",

highlights:[
"Edinburgh Castle Visit",
"Royal Mile Walk",
"Arthur's Seat Hiking",
"Scottish Museum",
"Whisky Experience"
],

includes:[
"Flights",
"Hotel",
"Breakfast",
"Airport Transfers",
"Guided Tours"
],

itinerary:[
"Day 1 Arrival in Edinburgh",
"Day 2 Edinburgh Castle Tour",
"Day 3 Royal Mile Visit",
"Day 4 Arthur's Seat Adventure",
"Day 5 Shopping",
"Day 6 Departure"
]
},

{
name:"Australia Discovery",
country:"Australia",
location:"Sydney & Melbourne",
duration:"9 Days / 8 Nights",
price:"₹1,79,999",
rating:4.9,

hotel:"5 Star Hotel",
flights:"Included",
meals:"Breakfast Included",
groupSize:"2 - 12 People",

image:"australia.png",
banner:"australiabanner.png",

gallery:[
"australia1.png",
"australia2.png",
"australia3.png",
"australia4.png"
],

description:"Discover Australia's iconic cities, beaches, wildlife and natural wonders.",

highlights:[
"Sydney Opera House",
"Harbour Bridge",
"Bondi Beach",
"Great Ocean Road",
"Wildlife Experience"
],

includes:[
"Flights",
"Luxury Hotel",
"Breakfast",
"Transfers",
"Tour Guide"
],

itinerary:[
"Day 1 Sydney Arrival",
"Day 2 Sydney City Tour",
"Day 3 Opera House Visit",
"Day 4 Bondi Beach",
"Day 5 Melbourne Travel",
"Day 6 Great Ocean Road",
"Day 7 Wildlife Tour",
"Day 8 Shopping",
"Day 9 Departure"
]
},

{
name:"Amsterdam Explorer",
country:"Netherlands",
location:"Amsterdam",
duration:"7 Days / 6 Nights",
price:"₹1,29,999",
rating:4.9,

hotel:"4 Star Hotel",
flights:"Included",
meals:"Breakfast Included",
groupSize:"2 - 12 People",

image:"amsterdam.png",
banner:"amsterdambanner.png",

gallery:[
"amsterdam1.png",
"amsterdam2.png",
"amsterdam3.png",
"amsterdam4.png"
],

description:"Explore Amsterdam canals, museums, gardens and beautiful European culture.",

highlights:[
"Canal Cruise",
"Van Gogh Museum",
"Rijksmuseum",
"Tulip Gardens",
"Windmill Village"
],

includes:[
"Flights",
"Hotel",
"Breakfast",
"Transfers",
"City Tours"
],

itinerary:[
"Day 1 Arrival",
"Day 2 Canal Cruise",
"Day 3 Museum Visit",
"Day 4 Tulip Gardens",
"Day 5 Windmill Tour",
"Day 6 Shopping",
"Day 7 Departure"
]
},

{
name:"Switzerland Paradise",
country:"Switzerland",
location:"Zurich & Interlaken",
duration:"7 Days / 6 Nights",
price:"₹1,39,999",
rating:5,

hotel:"5 Star Hotel",
flights:"Included",
meals:"Breakfast Included",
groupSize:"2 - 10 People",

image:"switzerland.png",
banner:"switzerlandbanner.png",

gallery:[
"switzerland1.png",
"switzerland2.png",
"switzerland3.png",
"switzerland4.png"
],

description:"Experience Switzerland's magical Alps, lakes and beautiful villages.",

highlights:[
"Jungfraujoch Tour",
"Interlaken Visit",
"Mount Titlis",
"Lucerne City Tour",
"Swiss Train Ride"
],

includes:[
"Flights",
"Luxury Hotel",
"Breakfast",
"Transfers",
"Sightseeing"
],

itinerary:[
"Day 1 Zurich Arrival",
"Day 2 Lucerne Tour",
"Day 3 Mount Titlis",
"Day 4 Interlaken",
"Day 5 Jungfraujoch",
"Day 6 Shopping",
"Day 7 Departure"
]
},
{
  name: "France Luxury Escape",
  country: "France",
  location: "Paris & French Riviera",
  duration: "8 Days / 7 Nights",
  price: "₹1,49,999",
  rating: 4.9,

  hotel: "5 Star Hotel",
  flights: "Included",
  meals: "Breakfast Included",
  groupSize: "2 - 12 People",

  image: "france.jpg",
  banner: "francebanner.jpg",

  gallery: [
    "france1.jpg",
    "france2.jpg",
    "france3.jpg",
    "france4.jpg"
  ],

  description:
  "Experience the charm and elegance of France with its iconic landmarks, romantic streets, luxury shopping, world-famous cuisine and beautiful coastal destinations. Explore the magical city of Paris, admire the Eiffel Tower, visit historic museums and relax along the stunning French Riviera. This luxury tour combines culture, adventure and unforgettable European experiences.",


  highlights: [
    "Eiffel Tower Visit",
    "Louvre Museum Experience",
    "Paris City Tour",
    "French Riviera Beaches",
    "Luxury Shopping Experience",
    "French Cuisine Tasting",
    "Monaco Day Trip",
    "Professional Tour Guide"
  ],


  includes: [
    "Round Trip Airfare",
    "Luxury Hotel Accommodation",
    "Daily Breakfast",
    "Airport Transfers",
    "Guided Sightseeing Tours",
    "Local Transportation",
    "Professional Tour Guide"
  ],


  itinerary: [
    "Day 1 - Arrival in Paris and Hotel Check-in",
    "Day 2 - Eiffel Tower Visit & Paris City Tour",
    "Day 3 - Louvre Museum & Champs-Élysées Shopping",
    "Day 4 - Travel to Nice French Riviera",
    "Day 5 - Monaco & Coastal Sightseeing",
    "Day 6 - French Riviera Beach Experience",
    "Day 7 - Leisure, Shopping & Local Food Tour",
    "Day 8 - Departure for Home"
  ]
}


];


mongoose.connect(process.env.MONGO_URI)
.then(async()=>{

    await Package.deleteMany();

    await Package.insertMany(packages);

    console.log("Packages Added Successfully 🚀");

    mongoose.connection.close();

})
.catch((error)=>{
    console.log(error);
});