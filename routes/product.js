const express = require("express");
const router = express.Router();

const { isAuth } = require("../middleware/isAuth");
const productController = require("../controller/product");

router.get("/", productController.getAllProduct);

router.get("/:id", productController.getProductById);

router.post("/", isAuth, productController.createProduct);

router.put("/:id", isAuth, productController.updateProduct);

module.exports = router;
