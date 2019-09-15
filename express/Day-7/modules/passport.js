var passport = require("passport");
var User = require("../model/user");
var githubStrategy = require("passport-github").Strategy;
passport.use(
  new githubStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: "/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log(profile);
      User.findOne({ email: profile._json.email }, (err, user) => {
        if (err) return cb(err, false);
        if (!user) {
          var newUser = {
            name: profile.displayName,
            email: profile._json.email
          };
          User.create(newUser, (err, data) => {
            if (err) return cb(err, false);
            cb(null, data);
          });
        } else {
          cb(null, user);
        }
      });
    }
  )
);
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
