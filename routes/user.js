const express = require("express");

const userController = require("../controller/user");

const router = express.Router();

router.get("/", userController.getUsers);

router.get("/login", userController.login);

module.exports = router;
