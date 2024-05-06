// // modules
// const express = require("express");
// const router = express.Router();
// const path = require("path");

// // // controllers
// // const {
// //   registerAdmin,
// //   registerBabbies,
// // } = require("../controllers/RegControllers");

// // Routes

// // registration routes
// router.get("/login/", (req, res) => {
//   res.render("login", { title: "login" });
// });

// router.get("/signup/", (req, res) => {
//   res.render("signup", { title: "signup" });
// });
// router.post("/signup/", registerAdmin, (req, res) => {
//   res.redirect("/login");
// });

// router.get("/logout", (req, res) => {
//   res.redirect("splash");
// });

// // main routes
// router.get("/splash/", (req, res) => {
//   res.render("splash", { title: "splash" });
// });

// router.get("/payments/", (req, res) => {
//   res.render("payments", { title: "payments" });
// });

// // administration routes
// router.get("/Admin/", (req, res) => {
//   res.render("Admin", { title: "Admin" });
// });

// //sitters routes
// router.get("/sitters/", (req, res) => {
//   res.render("sitters", { title: "sitters" });
// });

// // parents routes
// router.get("/parents/", (req, res) => {
//   res.render("parents", { title: "parents" });
// });

// // baby routes
// // router.get("/babbies/", (req, res) => {
// //   res.render(__dirname, "../views/babbies");
// // });
// router.get("/babbies", (req, res) => {
//   res.render("babbies", { title: "babbies" });
// });
// router.post("/babbies/", registerBabbies, (req, res) => {
//   res.status(200).redirect("/");
// });

// // stall routes
// router.get("/dollstall/", (req, res) => {
//   res.render("dollstall", { title: "dollstall" });
// });

// module.exports = router;
