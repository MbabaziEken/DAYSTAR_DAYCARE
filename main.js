const express = require("express");
const app = express();
const path = require ("path");
const mongoose = require("mongoose");
// rendering engine
const pug = require("pug");
// giving functionality for storing user sessions
const expressSession = require("express-session");

require("dotenv").config()

// mongoose configurations
mongoose.connect(process.env.DATABASE,{})
.then(() => {
    console.log('connect to DATABASE')
})
.catch(() => {
    console.log('error connecting to DATABASE')
})

const publicdir = path.join(__dirname, "./public");
app.use(express.static(publicdir));

app.set("view engine","pug");


// Routes
app.get("/",(req,res) => {
    res.render("./views/splash")
});

app.listen(4000,() => {
    console.log ("server is running on port 4000")
});