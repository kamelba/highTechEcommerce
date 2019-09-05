const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  email: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }

  

});

module.exports = userModel = mongoose.model("user", userSchema);
