// //Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const CreateAccont = require(".models/CreateAccountModels");

// listening to  port
const port = process.env || 4000 

// importing routes


require("dotenv").config();




//  //instasitians
const app = express();

// //Configurations
mongoose.connect("mongodb+srv://mbabazieken:kashera2023@cluster0.zwrfruc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
   useNewurlPasser: true,
    useUnifiedTopology: true,
}).then(() => 
console.log('mongodbconnected'))
 .catch(() =>
console.log('mongodb not connected'))




mongoose.connection
.once("open", () => {
console.log("mongoose connection open");
})
.on("error", err => {
console.error(`connection error: ${err}`);
});

//set view engine to pug
app.set("view engine", "pug");

//specfying the dir where views are residing
app.set("views",path.join__dirname,"views");

//Middleware
// set directory for static files 
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
// to return data in the response path
app.use(express.json());

//Express session configurations
app.use(expressregister);
app.use(passport.initialise());
app.use(passpot.session());

//passport configurations
passport.use(CreateAccount.createstrategy());
passport.serializeuser(CreateAccount.serializeuser());// ways of tracking user usage
passport.deserializeuser(CreateAccount.deserializeuser());// breaking system when user logs out

// // // // //Routes
// use imported routes
//app.use("/", babbiesRoute);
app.use("/",authenticationRoutes);



app.get("/path", (req, res) => {
  res, send("you have hit the home page");
});


// // // //query params



 //For Invalid routes
app.get("", (req, res) => {
res.send("404! This is an invalid URL.");
 });

// //Bootstrapping a server
// //always last line in code
app.listen(4000, () => console.log("listening on port 4000"));
