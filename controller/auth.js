const passport = require("passport");
const User = require("../database").users;

exports.login = (req, res, next) => {
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
        .status(200)
        .json({ message: "successful login", user: user.username });
    });
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  req.logout();
  res.status(204).json({ message: "Logout success" });
};

exports.signup = async (req, res, next) => {
  const { username, id, password, role } = req.body.user;
  try {
    const user = await User.create({
      username: username,
      password: password,
      role: role
    });
    res.status(201).json({ message: "Create user successful", user: user });
  } catch (err) {
    next(err);
  }
};
