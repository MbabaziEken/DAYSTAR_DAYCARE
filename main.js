// dependency
// for posting
const express = require('express'); 
// for mongodb
const mongoose = require('mongoose');
//for pug 
const path = require('path'); 
//for passport
const passport = require('passport');
//for moment 
const moment = require('moment');


// for express-session
const expressSession = require('express-session')({ 
  secret:"secret",
  resave: false,
  saveUninitialized: false
});

require("dotenv").config();

// importing admin model
const admin = require("../DAYSTAR_DAYCARE/models/Admin");
const parents = require("../DAYSTAR_DAYCARE/models/Parents");

// importing routes
const adminregisterationRoutes = require("./routes/AdminRegRoutes");
const authRoutes = require("./routes/AuthRoutes")
const babyroutes = require("./routes/BabbiesRoutes");
const sittersroutes = require("./routes/SittersRoutes");
const parentsroutes = require("./routes/ParentRoutes");
const dashbroutes = require("./routes/dashbRoutes");
const sitterpayment = require("./routes/sitterpaymentRoutes");
// rendering engine
const app = express();

// for static files in dir public
  app.use(express.static(path.join(__dirname, "public")))

  app.use(express.urlencoded({extended: true}));
  app.use(express.json());

//ways of tracking user usage
passport.serializeUser(admin.serializeUser());
//breaking system when user logs out 
passport.deserializeUser(admin.deserializeUser());

// express session configurations
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//Passport Configurations
passport.use(admin.createStrategy());

mongoose.connect("mongodb+srv://mbabazieken:kashera2023@cluster0.x3cma6f.mongodb.net/daystar", {
  }).then(() => 
console.log('mongodbconnected'))
 .catch(() =>
console.log('mongodb not connected'))

// for static files in dir public
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); 

// routes setup. using the imported registration routes for requests
app.use("/", adminregisterationRoutes);
app.use("/", babyroutes);
app.use("/", sittersroutes);
app.use("/", authRoutes);
app.use("/", parentsroutes);
app.use("/", dashbroutes);

app.listen(4100, () => {
  console.log("server is running on port 4100");
});
