const express = require("express");
const router = express.Router();
const ensurelogin = require("connect-ensure-login")

// Import model
const Babyregistration = require("../models/Babbies"); 

// Routes
router.get("/babbiescheckin", ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render("babbiescheckin");
});

router.get("/babbiescheckinlist/:babyNumber?", async (req, res) => {
  try {
    if (req.query.babyNumber != null) {
      let baby = await Babyregistration.findOne({ babyNumber: req.query.babyNumber });
      res.render("babbiescheckinlist", {
        title: "Babbiescheckin Dashboard",
        baby,
      });
    } else {
      let babies = await Babyregistration.find();
      res.render("babbiescheckinlist", {
        title: "Babbiescheckin Dashboard",
        users: babies,
      });
    }
  } catch (err) {
    res.status(400).send("Unable to find baby in the database");
  }
});

router.post("/babbiescheckinlist", async (req, res) => {
  try {
    const baby = new Babyregistration(req.body);
    await baby.save();
    console.log(baby);
    res.redirect("/babbiescheckinlist");
  } catch (error) {
    res.status(400).send("Sorry, something went wrong!");
    console.log("Error registering baby", error);
  }
});

module.exports = router;
