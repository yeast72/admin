const express = require("express");

const userController = require("../controller/user");

const router = express.Router();

router.get("/", userController.getUsers);

router.get("/current", userController.getCurrentUser);

module.exports = router;
