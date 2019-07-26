const express = require("express");
const db = require("../database");
const Product = db.products;

exports.createProduct = async (req, res, next) => {
  const { title, description, imageUrl, price, userId } = req.body.product;
  try {
    const product = await Product.create({
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
      userId: userId
    });
    res.status(201).json({ message: "create successful", product: product });
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      const error = new Error("could not find product");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: "Get product success", product: product });
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  const id = req.params.id;
  const { title, description, imageUrl, price, userId } = req.body.product;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      const error = new Error("could not find product");
      error.status = 404;
      throw error;
    }
    const updateProduct = await product.update({
      userId,
      title,
      description,
      imageUrl,
      price
    });
    if (!updateProduct) {
      const error = new Error("could not update product");
      error.status = 404;
      throw error;
    }
    res
      .status(200)
      .json({ message: "Update product success", product: updateProduct });
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      const error = new Error("Cound not find product");
      error.statusCode = 404;
      throw err;
    }
    product.destroy();
    res.status(204).json({ message: "Delete complete" });
  } catch (err) {
    next(err);
  }
};

exports.getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    if (!products) {
      const error = new Error("Could not find products");
      error.statusCode = 404;
      throw err;
    }
    res.status(200).json({ message: "get all products", products: products });
  } catch (err) {
    next(err);
  }
};
