const passport = require("passport");
const User = require("../model/user");

exports.login = (req, res, next) => {
  //   res.status(200).json({ message: "eiei" });
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(404).json({ message: info });
    }

    req.logIn(user, function name(err) {
      if (err) {
        return next(err);
      }
      return res
        .status(201)
        .json({ message: "successful login", user: user.username });
    });
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  req.logout();
  res.status(201).json({ message: "Logout success" });
};
