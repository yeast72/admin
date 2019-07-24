const express = require("express");
const router = express.Router();

const { isAuth } = require("../middleware/isAuth");
const productController = require("../controller/product");

router.get("/", isAuth, productController.getAllProduct);

router.post("/", productController.createProduct);

module.exports = router;
