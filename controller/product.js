const express = require("express");

exports.createProduct = (req, res, next) => {
  console.log("create products");
  res.status(200).json({ message: "Connected!" });
};

exports.getAllProduct = (req, res, next) => {
  res.status(200).json({ message: "get all products" });
};
