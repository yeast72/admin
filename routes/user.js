const express = require("express");

const router = express.Router();
const userController = require("../controller/user");

const isAuth = require("../middleware/isAuth");

router.get("/", userController.getUsers);

router.get("/current", isAuth, userController.getCurrentUser);

module.exports = router;
