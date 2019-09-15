const jwt = require("jsonwebtoken");

exports.generateToken = function(user) {
  return jwt.sign({ userID: user.id }, "shhhhh");
};
exports.verifyToken = function(req, res, next) {
  let token = req.headers.authorization || "";
  if (token) {
    jwt.verify(token, "shhhhh", function(err, decoded) {
      if (err) return res.status(500).json(err);
      next();
    });
  } else {
    res.json("Unauthorized User");
  }
};
