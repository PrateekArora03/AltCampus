var express = require("express");
var router = express.Router();
var auth = require("../modules/auth");

router.get("/", (req, res, next) => {
  res.json({ welcome: "hello" });
});

router.get("/protected", auth.verifyToken, (req, res, next) => {
  res.json("protected Route");
});

module.exports = router;
