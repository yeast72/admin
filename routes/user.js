const express = require("express");

const router = express.Router();
const userController = require("../controller/user");

const isAuth = require("../middleware/isAuth");

router.get("/me", isAuth, userController.getCurrentUser);

router.post("/login", userController.login);

router.post("/signup", userController.signup);

router.get("/logout", userController.logout);

module.exports = router;
