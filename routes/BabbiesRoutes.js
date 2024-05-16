const express = require("express");
const router = express.Router();

// import model
const Babyregistration = require("../models/Babbies");

// babbies routes
router.get("/Babyregistration", (req, res) => {
  res.render("babbies");
});

router.get("/babbies/:babyName?", async (req, res) => {
  try {
    if(req.params.babyName != null){
      let babbies = await Babyregistration.findone({babyName:req.params.babyName});
      res.render("babbiesupdate", {
        title: "Babbies Dashboard",
        baby,
    }); 
  
    }else{
      let babbies = await Babyregistration.find();
      res.render("babbieslist", {
        title: "Babbies Dashboard",
        users: babbies,
    }); 
  
    }
    let babbies = await Babyregistration.find();
    res.render("babbieslist", {
      title: "Babbies Dashboard",
      users: babbies,
}); 
}catch (error) {
  res.status().send("sorry, something went wrong!");
  console.log("Error registering baby", error);
}

});

module.exports = router;