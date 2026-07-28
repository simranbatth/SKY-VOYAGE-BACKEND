const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({

    name: String,

    country: String,

    location: String,

    duration: String,

    price: String,

    rating: Number,

    hotel: String,

    flights: String,

    meals: String,

    groupSize: String,


    image: String,

    banner: String,

    gallery: [String],


    description: String,


    highlights: [String],

    includes: [String],

    itinerary: [String]

});


module.exports = mongoose.model("Package", packageSchema);