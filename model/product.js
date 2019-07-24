const Model = require("sequelize").Model;
const sequelize = require("../database");

class Product extends Model {}
Product.init(
  {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    imageURL: Sequelize.STRING,
    price: Sequelize.DOUBLE
  },
  { sequelize, modelName: "product" }
);

module.exports = Product;
