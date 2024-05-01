// modules
const router = require("express").Router();
const path = require("path");

// controllers
const {registerAdmin} = require("../controllers/RegControllers")


// Routes

// registration routes
router.get("/login/",(req,res) => {
    res.render(path.join(__dirname,"../views/login"))
});

router.get("/signup/",(req,res) => {
    res.render(path.join(__dirname,"../views/signup"))
});
router.post("/signup/",registerAdmin,(req,res) => {
    res.redirect("/login")
})

router.get("/logout/",(req,res) => {
    res.render(path.join(__dirname,"../views/logout"))
});

// main routes
router.get("/",(req,res) => {
    res.render(path.join(__dirname,"../views/splash"))
});

router.get("/payments/",(req,res) => {
    res.render(path.join(__dirname,"../views/payments"))
});

// administration routes
router.get("/Admin/",(req,res) => {
    res.render(path.join(__dirname,"../views/Admin"))
});

//sitters routes
router.get("/sitters/",(req,res) => {
    res.render(path.join(__dirname,"../views/sitters"))
});

// parents routes
router.get("/parents/",(req,res) => {
    res.render(path.join(__dirname,"../views/parents"))
});

// baby routes
router.get("/babbies/",(req,res) => {
    res.render(path.join(__dirname,"../views/babbies"))
});

// stall routes
router.get("/dollstall/",(req,res) => {
    res.render(path.join(__dirname,"../views/dollstall"))
});

module.exports = router