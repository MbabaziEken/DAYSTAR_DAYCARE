// const express = require("express");
// const router = express.Router();

// // import model
// const sitterpayment = require("../models/sitterpayment");

// //sitter payment routes
// router.get("/sitterpayment", (req, res) => {
//     res.render("sitterpayment");
//   });
  
//   router.get("/sitterpaymentlist/:sitterName?", async (req, res) => {
//     console.log("iam here")
//     try {
//       if(req.params.sitterName != null){
//         let sitter = await sitterpayment.findOne({sitterName:req.params.sitterName});
//         res.render("sitterpaymentlist", {
//           title: "SitterPayment",
//           users: sitter,
//         });
  
//       }else{
//         let sitter = await sitterpayment.find();
//         res.render("sitterpaymentlist", {
//           title: "paymentsupdate",
//           sitter,
//         });  
//       }
//     } catch (err) {
//       res.status(400).send("Unable to find payments in the database");
//       console.log("No payments found");
//     }
//   });
  
//   router.post("/sitterpayment", async (req, res) => {
//     try {
//       const payment = new sitterpayment(req.body);
//       console.log(payment);
//       await payment.save();
//       res.redirect("/Admin");
//     } catch (error) {
//       res.status(400).send("sorry, no payments added!");
//       console.log("Error adding payments", error);
//     }
//   });
  
// module.exports = router;
  
