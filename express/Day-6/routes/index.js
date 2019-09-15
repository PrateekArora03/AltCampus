var express = require("express");
var router = express.Router();
var User = require("../models/user");

/* GET home page. */
router.get("/", function(req, res, next) {
  if (req.session.userid) {
    res.render("index", { title: "Express" });
  } else {
    res.redirect("/login");
  }
});

router.get("/registration", (req, res, next) => {
  res.render("registration");
});

router.post("/registration", (req, res, next) => {
  User.create(req.body, (err, data) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.post("/login", (req, res, next) => {
  let email = req.body.email;
  let pass = req.body.password;
  User.findOne({ email }, (err, user) => {
    if (err) return next(err);
    else if (user == null) return res.redirect("/login");
    else if (!user.validatePassword(pass)) {
      return res.redirect("/login");
    }
    req.session.userid = user.id;
    res.redirect("/");
  });
});

router.get("/logout", (req, res, next) => {
  if (req.session) {
    console.log("hello");
    req.session.destroy(err => {
      if (err) return next(err);
      res.clearCookie("connect.sid");
      res.redirect("/login");
    });
  }
});

module.exports = router;
