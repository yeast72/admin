const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const Model = Sequelize.Model;
("use strict");

module.exports = (sequelize, DataType) => {
  class Users extends Model {
    async validPassword(password) {
      return await bcrypt.compare(password, this.password);
    }
  }
  Users.init(
    {
      id: {
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4,
        allowNull: false
      },
      username: {
        type: DataType.STRING,
        require: true
      },
      password: {
        type: DataType.STRING,
        require: true
      },
      role: {
        type: DataType.ENUM,
        values: ["user", "admin"]
      }
    },
    {
      sequelize,
      modelName: "users",
      underscored: true
    }
  );
  return Users;
};
