const express = require("express");
const router = express.Router();

// import model
const Sitterregistration = require("../models/Sitter");
const sitterpayment = require("../models/sitterpayment");

//sitters routes
router.get("/sitterRegistration", (req, res) => {
  res.render("sitters");
});

router.get("/sitters/:sitterName?", async (req, res) => {
  try {
    if(req.params.sitterName != null){
      let sitter = await Sitterregistration.findOne({sitterName:req.params.sitterName});
      res.render("sitterupdate", {
        title: "Sitters Dashboard",
        sitter,
      });
  
    }else{
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
    const sitter = new Sitterregistration(req.body);
    await Sitterregistration.findOneAndUpdate(
      {
        name,
      },
      update,
    );
    console.log(sitter);
    await sitter.save();
    res.redirect("/Admin");
  } catch (error) {
    res.status(400).send("sorry, something went wrong!");
    console.log("Error registering sitter", error);
  }
});

module.exports = router;
