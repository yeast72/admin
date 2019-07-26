const Sequelize = require("sequelize");
const Model = Sequelize.Model;
("use strict");

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {}
  Products.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        require: true
      },
      description: {
        type: DataTypes.STRING,
        require: true
      },
      imageUrl: {
        type: DataTypes.STRING,
        require: true
      },
      price: {
        type: DataTypes.DOUBLE,
        require: true
      }
    },
    {
      modelName: "products",
      sequelize,
      underscored: true
    }
  );
  return Products;
};
