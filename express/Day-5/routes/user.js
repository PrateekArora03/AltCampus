var express = require("express");
var router = express.Router();
var Article = require("../models/article");
var User = require("../models/user");

router.get("/add", (req, res, next) => {
  res.render("registration");
});

router.post("/add", (req, res, next) => {
  User.create(req.body, (err, data) => {
    if (err) return next(err);
    res.redirect("/user/login");
  });
});

router.get("/login", (req, res, next) => {});

module.exports = router;
