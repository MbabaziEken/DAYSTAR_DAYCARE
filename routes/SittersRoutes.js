const express = require("express");
const router = express.Router();

// import model
const Sitterregistration = require("../models/Sitter");

//sitters routes
router.get("/sitters", (req, res) => {
  res.render("sitters");
});

router.post("/sitters", async (req, res) => {
  try {
    const sitter = new Sitterregistration(req.body);
    console.log(sitter);
    await sitter.save();
    res.redirect("/Admin");
} 
catch (error) {
  res.status(400).send("sorry, something went wrong!");
  console.log("Error registering sitter", error);
}

});

module.exports = router;