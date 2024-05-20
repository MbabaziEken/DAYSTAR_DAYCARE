const express = require("express");
const router = express.Router();

// import model
const Babyregistration = require("../models/Babbies");

// routes
router.get("/babbiescheckin", (req, res) => {
  res.render("babbiescheckin");
});

router.get("/babbiescheckinlist", async (req, res) => {
  try {
    if(req.params.babyName != null){
      let baby = await Babyregistration.find({babyName:req.params.babyName});
      res.render("checkinupdate", {
        title: "Babbiescheckin Dashboard",
        baby,
      });
    }else{
      let babbies = await Babyregistration.find();
      res.render("babbiescheckinlist", {
        title: "Babbiescheckin Dashboard",
        users: babbies,
      });
    }
    // Allows you to define a block of code to be executed, if an error occurs in the try block
  } catch (err) {
    res.status(400).send("Unable to find baby in the database");
  }
});

router.post("/babbiescheckin", async (req, res) => {
  try {
    const baby = new Babyregistration(req.body);
    await Babyregistration.find();
    console.log(baby);
    await baby.save();
    res.redirect("/Admin");
  } catch (error) {
    res.status(400).send("sorry, something went wrong!");
    console.log("Error registering baby", error);
  }
});

module.exports = router;
