module.exports = {
  isAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: "login first" });
  }
};
