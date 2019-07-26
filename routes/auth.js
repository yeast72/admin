const router = require("express").Router();
const authController = require("../controller/auth");

router.post("/login", authController.login);

router.post("/signup", authController.signup);

router.get("/logout", authController.logout);
module.exports = router;
