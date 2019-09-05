const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AnnonceSchema = new Schema({
  title: {
    type: String
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: String
  },
  brand: {
    type: String
  },
  imga: {
    type: String
  },
  imgb: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = AnnonceModel = mongoose.model("annonce", AnnonceSchema);
