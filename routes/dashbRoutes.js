const express = require("express");
const router = express.Router();

// import model
const AdminModel = require("../models/Admin");
const Sitterregistration = require("../models/Sitter");
const Babyregistration = require("../models/Babbies");
const Parentregistration = require("../models/Parents");


 // main routes
 router.get("/splash/", (req, res) => {
  res.render("splash", { title: "splash" });
 });

 // registration routes 
router.get("/login/", (req, res) => {
  res.render("login", { title: "login" });
});

router.get("/signup/", (req, res) => {
  res.render("signup", { title: "signup" });
});

router.get("/Adminregister", (req, res) => {
  res.render("signup");
});
router.get("/logout", (req, res) => {
  res.redirect("splash");
});

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

// baby routes
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

//parent routes
router.get("/parents", (req, res) => {
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

   // stall routes
 router.get("/dollstall/", (req, res) => {
   res.render("dollstall", { title: "dollstall" });
 });

 // administration routes
  router.get("/Admin/", (req, res) => {
    res.render("Admin", { title: "Admin" });
  });

  // payments route
 router.get("/payments/", (req, res) => {
   res.render("payments", { title: "payments" });
});


module.exports = router;