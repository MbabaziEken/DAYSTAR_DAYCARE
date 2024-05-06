const express = require("express");
const router = express.Router();

// import model
const Babyregistration = require("../models/Babbies");

router.get("/babbies", (req, res) => {
  res.render("babbies");
});

router.post("/babbies", async (req, res) => {
  try {
    const baby = new Babyregistration(req.body);
    console.log(baby);
    await baby.save();
    res.redirect("/babbies");
} 
catch (error) {
  res.status(400).send("sorry, something went wrong!");
  console.log("Error registering baby", error);
}

});

module.exports = router;