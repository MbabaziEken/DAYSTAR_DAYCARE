const express = require("express");
const router = express.Router();
const ensurelogin = require("connect-ensure-login")

// import model
const Babyregistration = require("../models/Babbies");

router.get("/babbiesRegister", ensurelogin.ensureLoggedIn(), (req, res) => {
  //to run on the browser and display form on server file
  res.render("babbies"); //from babiesRegister.pug
});

//post route for babiesregistered to database
router.post("/babbiesRegister", async (req, res) => {
  try {
    const child = new Babyregistration(req.body);
    console.log(child);
    await child.save();

    res.redirect("/babbies");
  } catch (error) {
    res.status(400).send("Sorry something wrong!");
    console.log("error registering baby...", error);
  }
});

//fetching All babies from database
router.get("/babbies", async (req, res) => {
  try {
    let babies = await Babyregistration.find().sort({ $natural: -1 }); //from line8
    res.render("babbieslist", { babies: babies }); // to display babies from data base
    console.log("display babbies", babies);
  } catch (error) {
    res.status(400).send("unable to find babies from database!");
    console.log("unable to find babies from database!...", error);
  }
});

//route to register present sitter form in database
router.get("/babbiescheckin/:id", async (req, res) => {
  try {
    const baby = await Babyregistration.findOne({ _id: req.params.id });
    res.render("babbiescheckin", { baby: baby });
  } catch (error) {
    console.log("error finding a Baby!", error);
    res.status(400).send("unable to find Baby from the db!");
  }
});

router.post("/babbiescheckinlist", async (req, res) => {
  try {
    await Babyregistration.findOneAndUpdate({ _id: req.query.id }, req.body); // {avaible: true}
    console.log(req.body);
    res.redirect("babbiescheckinlist"); // redirects to the checkedIn Table
  } catch (error) {
    res.status(404).send("unable to update baby in the db!");
    console.log("........................", error);
  }
});


//delete route for each  baby form in database
router.post("/deletebaby", async (req, res) => {
  try {
    await Babyregistration.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (error) {
    res.status(400).send("unable to delete sitter from db!");
    console.log("error deleting sitter...", error);
  }
});
module.exports = router;
