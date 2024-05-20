const express = require("express");
const router = express.Router();
const ensurelogin = require('connect-ensure-login')


// import model
const AdminModel = require("../models/Admin");
const Sitterregistration = require("../models/Sitter");
const Babyregistration = require("../models/Babbies");
const Parentregistration = require("../models/Parents");
const sitterpayment = require("../models/sitterpayment");

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

router.post("/sitters", ensurelogin.ensureLoggedIn(), async (req, res) => {
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
router.get("/babyregister", ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render("babbies");
});



// GET route to render update form
router.get('/babbiescheckin/edit/:id', async (req, res) => {
  try {
    const babyId = req.params.id;
    const baby = await Babyregistration.findById(babyId);
    res.render('babbiescheckinedit', {
      title: 'Update Baby Record',
      baby
    });
  } catch (error) {
    res.status(500).send('Error retrieving baby record for update');
  }
});

// POST route to handle update submission
router.post('/babbiescheckin/edit/:id', async (req, res) => {
  try {
    const babyId = req.params.id;
    await Babyregistration.findByIdAndUpdate(babyId, req.body);
    res.redirect('/babbiescheckinlist');
  } catch (error) {
    res.status(500).send('Error updating baby record');
  }
});

// delete route
router.delete('/babbiescheckin/:id', async (req, res) => {
  try {
    const babyId = req.params.id;
    await Babyregistration.findByIdAndDelete(babyId);
    res.status(200).send('Baby record deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting baby record');
  }
});


   // stall routes
 router.get("/dollstall/", ensurelogin.ensureLoggedIn(), (req, res) => {
   res.render("dollstall", { title: "dollstall" });
 });

 // administration routes
  router.get("/Admin", ensurelogin.ensureLoggedIn(), (req, res) => {
    res.render("Admin", { title: "Admin" });
  });

  // payments route
 router.get("/payments/", ensurelogin.ensureLoggedIn(), (req, res) => {
   res.render("payments", { title: "payments" });
});

router.get("/sitterpayment", ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render("sitterpayment");
});

router.get("/sitterpaymentlist/:sitterID?", ensurelogin.ensureLoggedIn(), async (req, res) => {
  try {
    console.log(req.params)
    if(req.params.sitterID != null){
      let sitter = await sitterpayment.findOne({_id:req.params.sitterID});
      console.log(sitter)
      res.render("sitterpayment", {
        title: "SitterPayment",
         sitter,
      });

    }else{
      let sitter = await sitterpayment.find();
      res.render("sitterpaymentlist", {
        title: "paymentsupdate",
        users: sitter,

      });  
    }
  } catch (err) {
    res.status(400).send("Unable to find payments in the database");
    console.log("No payments found");
  }
});



router.post("/sitterpayment", ensurelogin.ensureLoggedIn(), async (req, res) => {
  try {
    const payment = new sitterpayment(req.body);
    console.log(payment);
    await payment.save();
    res.redirect("/Admin");
  } catch (error) {
    res.status(400).send("sorry, no payments added!");
    console.log("Error adding payments", error);
  }
});




module.exports = router;