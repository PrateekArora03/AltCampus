var express = require("express");
var router = express.Router();
const User = require("../model/user");
const auth = require("../modules/auth");

router.post("/register", function(req, res, next) {
  User.create(req.body, (err, newUser) => {
    if (err) return next(err);
    res.json("newUser created");
  });
});

router.post("/login", (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.json("user not found");
    if (!user.validatePassword(req.body.password)) {
      return res.json("Invaild Password");
    }
    var token = auth.generateToken(user);
    res.json({ sucess: true, message: "user_login", token: token });
  });
});

module.exports = router;
