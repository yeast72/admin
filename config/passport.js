const sequlize = require("../database");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../database").users;

module.exports = passport => {
  passport.use(
    new LocalStrategy(
      { usernameField: "username", passwordField: "password" },
      (username, password, done) => {
        User.findOne({ username: username }).then(user => {
          if (!user) {
            return done(null, false, {
              message: "That user is not registered"
            });
          }

          if (!user.validPassword(password)) {
            return done(null, false, { message: "Password incorrect" });
          }
          return done(null, user);
        });
      }
    )
  );

  passport.serializeUser(function(user, done) {
    console.log("serializeUser");
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    console.log("deserializeUser");
    User.findAll({ where: { id: id } }).then(user => {
      done(null, user);
    });
  });
};
