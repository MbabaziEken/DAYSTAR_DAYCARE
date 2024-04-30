const router = require("express").Router();
const path = require("path");


// Routes
router.get("/",(req,res) => {
    res.render(path.join(__dirname,"../views/splash"))
});

router.get("/sitters/",(req,res) => {
    res.render(path.join(__dirname,"../views/sitters"))
});

router.get("/signup/",(req,res) => {
    res.render(path.join(__dirname,"../views/signup"))
});

router.get("/payments/",(req,res) => {
    res.render(path.join(__dirname,"../views/payments"))
});

router.get("/parents/",(req,res) => {
    res.render(path.join(__dirname,"../views/parents"))
});

router.get("/login/",(req,res) => {
    res.render(path.join(__dirname,"../views/login"))
});

router.get("/logout/",(req,res) => {
    res.render(path.join(__dirname,"../views/logout"))
});

router.get("/dollstall/",(req,res) => {
    res.render(path.join(__dirname,"../views/dollstall"))
});

router.get("/babbies/",(req,res) => {
    res.render(path.join(__dirname,"../views/babbies"))
});

router.get("/Admin/",(req,res) => {
    res.render(path.join(__dirname,"../views/Admin"))
});

module.exports = router