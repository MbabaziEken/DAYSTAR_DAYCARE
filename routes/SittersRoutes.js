const express = require("express");
const router = express.Router();

// import model
const Sitterregistration = require("../models/Sitter");
const sitterpayment = require("../models/sitterpayment");
const ensurelogin = require("connect-ensure-login")

//sitters routes
router.get("/sitterRegistration",ensurelogin.ensureLoggedIn(),(req, res) => {
  res.render("sitters");
});

router.get("/sitters/:sitterName?", async (req, res) => {
  try {
    if (req.params.sitterName != null) {
      let sitter = await Sitterregistration.findOne({
        sitterName: req.params.sitterName,
      });
      res.render("sitterupdate", {
        title: "Sitters Dashboard",
        sitter,
      });
    } else {
      let sitters = await Sitterregistration.find();
      res.render("sitterslist", {
        title: "Sitters Dashboard",
        users: sitters,
      });
    }
    // Allows you to define a block of code to be executed, if an error occurs in the try block
  } catch (err) {
    res.status(400).send("Unable to find sittter in the database");
  }
});

router.post("/sitters", async (req, res) => {
  try {
    // console.log(req.body);
    const {
      sitterName,
      age,
      gender,
      religion,
      educationBackground,
      location,
      contact,
      nin,
      nextOfKin,
      recommendersName,
      recommendersContact,
      sitterNumber,
      availability,
    } = req.body;
    await Sitterregistration.findOneAndUpdate(
      { sitterName},
      {
        age,
        gender,
        religion,
        educationBackground,
        location,
        contact,
        nin,
        nextOfKin,
        recommendersName,
        recommendersContact,
        sitterNumber,
        availability,
      }
    );
    const sitter = new Sitterregistration(req.body);
    console.log(sittter);
    await sitter.save();
    res.redirect("/Admin");

  } catch (error) {
    res.status(400).send("sorry, something went wrong!", error);
    console.log("Error registering sitter", error);
  }
});

//delete route for each  sitter form in database
router.post("/deleteSitter", async (req, res) => {
    try {
        await Sitterregistration.deleteOne({ _id: req.body.id });
        res.redirect("back");
    } catch (error) {
        res.status(400).send("unable to delete sitter from db!");
        console.log("error deleting sitter...", error);
    }
});

module.exports = router;
