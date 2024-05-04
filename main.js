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
    console.log('connected to DATABASE')
})
.catch(() => {
    console.log('error connecting to DATABASE')
})

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

const publicdir = path.join(__dirname, "./public");
app.use(express.static(publicdir));

app.set("view engine","pug");


// these are routes
app.use("/", require("./routes/mainRoutes"));

app.listen(4000,() => {
    console.log ("server is running on port 4000")
});