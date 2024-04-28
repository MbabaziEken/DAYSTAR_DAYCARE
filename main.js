
const express = require("express");
const app = express();
const path = require ("path");

const publicdir = path-join(__dirname, "./public");
console.log(__dirname);
console.log(publicdir);

app.use(express.static(publicdir));

app.set("view engine","");


// Routes
app.get("/",(req,res) => {
    res.render("")
});

app.listen(4000,() => {
    console.log ("server is running on port 4000")
});