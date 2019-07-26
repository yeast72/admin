const db = require("../database");
const User = db.users;

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ message: "get user successful!", users: users });
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
    res.status(200).json({ message: "Get Current user", user: user });
  }
};
