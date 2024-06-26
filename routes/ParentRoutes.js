const express = require("express");
const router = express.Router();
const ensurelogin = require("connect-ensure-login")

// import model
const Parentregistration = require("../models/Parents");

//parent routes
router.get("/parents", ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render("parents");
});

router.post("/parents", async (req, res) => {
  try {
    const parent = new Parentregistration(req.body);
    console.log(parent);
    await parent.save();
    res.redirect("/Admin");
} 
catch (error) {
  res.status(400).send("sorry, something went wrong!");
  console.log("Error registering sitter", error);
}

});

module.exports = router;