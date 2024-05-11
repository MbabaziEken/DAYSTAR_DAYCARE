const express = require("express");
const router = express.Router();

// import model
const Babyregistration = require("../models/Babbies");

// babbies routes
router.get("/Babyregistration", (req, res) => {
  res.render("babbies");
});

router.get("/babbies", async (req, res) => {
  try {
    let babbies = await Babyregistration.find();
    res.render("babbieslist", {
      title: "Babbies Dashboard",
      users: babbies,

    // const baby = new Babyregistration(req.body);
    // console.log(baby);
    // await baby.save();
    // res.redirect("/babbies");
}); 
}catch (error) {
  res.status(400).send("sorry, something went wrong!");
  console.log("Error registering baby", error);
}

});

module.exports = router;