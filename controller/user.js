const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../database").users;
const dotenv = require("dotenv");
dotenv.config();

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username: username } });
    if (user) {
      const authorized = await user.validPassword(password);
      if (authorized) {
        const payload = { username: user.username };
        const options = {
          expiresIn: "30d",
          subject: user.id.toString()
        };
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign(payload, secret, options);
        return res.status(201).json({ message: "successful login", token });
      }
      throw new Error("Incorrect password");
    }
    throw new Error("User not found");
  } catch (err) {
    next(err);
  }
};

exports.logout = (req, res, next) => {
  req.logout();
  res.status(204).json({ message: "Logout success" });
};

exports.signup = async (req, res, next) => {
  const { username, password, role } = req.body.user;
  const hashedPassword = await bcrypt.hash(password, 8);
  try {
    const user = await User.create({
      username: username,
      password: hashedPassword,
      role: role
    });
    res.status(201).json({ message: "Create user successful", user: user });
  } catch (err) {
    next(err);
  }
};

exports.getCurrentUser = (req, res, next) => {
  const user = req.user;
  if (!user) {
    const error = new Error("Could not find user.");
    error.status = 404;
    next(error);
  } else {
    res
      .status(200)
      .json({
        message: "Get Current user",
        user: { id: user.id, username: user.username, role: user.role }
      });
  }
};
