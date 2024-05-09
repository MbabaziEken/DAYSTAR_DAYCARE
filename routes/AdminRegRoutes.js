const express = require("express");
const router = express.Router();
// const passport = require("passport")

// importing models
const AdminModel = require("../models/Admin");

// creating get routes
router.get("/Adminregister", (req, res) => {
    res.render("login");
});

router.post("/Adminregister", async(req,res,next) => {
    try {
    const admin = new AdminModel(req.body)
        console.log(admin)
        await AdminModel.register(admin,req.body.Password)
    }catch(error){
        res.status().Send ("cound't register admin")
        console.log(error)
    }
}
    
);


module.exports = router;