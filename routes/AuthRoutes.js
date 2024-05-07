const express = require("express");
const router = express.Router();
const passport = require("passport");


router.get("/login", (req, res) => {
    res.render("login")
});

router.post("/login",passport.authenticate("cloud",{failureRedirect:"/login"}), (req, res) => {
   res.redirect("/babbies")
});

router.get("/logout", (req,res) => {
    if(req.session){
        req.session.destroy((error) => {
            if(error){
                return res.status(500).send("error logginguot")
            }
            res.redirect("/login")
        })
    }
})

// // updating a baby 
// router.get("/babiesupdate/:id", async(req,res) => {
// try{
//   const babyUpdate = await Babbies.findone({_id: req.params.id});
//   res.render("babbies", {babby:babbyupdate})
// }catch(error){
//       res.status(400).send("unable to find baby from the db");
//       console.log(error,"error finding a baby")
// }
// })

// router.post("/babbiesupdate", async(req,res) => {
//     try{
//       await Babbies.findoneAndUpdate({_id:req.querry.id},req.body);
//       res.redirect("/babbies")
//     } catch(error){
//     res.status(404).send("unabale to update babby in the db");
//     }
// })

module.exports = router;