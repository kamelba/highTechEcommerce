const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const session = require('express-session')
const cors = require('cors')



const app = express();
app.use(cors())

// body-parser Middlware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// setup express-flash
app.use(flash())

// // setup express-messages middleware
// app.use(function (req, res, next) {
//     res.locals.messages = require('express-messages')(req, res)
//     next()
// })

// // setup express-validator middleware
// app.use(expressValidator())

// session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))




//passport Midleware
app.use(passport.initialize());

//passport Config
require("./config/passport")(passport);



//connect bd
const db = "mongodb://localhost:27017/DataBase";

mongoose
  .connect(db, {
    useNewUrlParser: true,

    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//use route
app.use("/", require("./routes/annonce"));


app.use("/", require("./routes/users"));


app.listen(5000, err => {
  if (err) console.log("failed to connect");
  else {
    console.log("server started on port 5000");
  }
});


