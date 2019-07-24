const passport = require("passport");
const User = require("../model/user");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ message: "create user successful!", users: users });
  } catch (err) {
    next(err);
  }
};

exports.login = (req, res, next) => {
  passport.authenticate("local", (req, res) => {
    res.status(200).json({ message: "Successful", user: req.user });
  });
};
