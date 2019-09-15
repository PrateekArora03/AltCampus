var User = require("../models/user");

exports.checkUser = (req, res, next) => {
  if (req.session && req.session.userId) {
    User.findById(req.session.userId, (err, user) => {
      if (err) return next(err);
      req.user = user;
      res.locals.user = user;
      next();
    });
  } else {
    req.user = null;
    res.locals.user = null;
    next();
  }
};

exports.userLogged = (req, res, next) => {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.redirect(`/login`);
  }
};
