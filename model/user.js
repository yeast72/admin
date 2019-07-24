const Sequelize = require("sequelize");
const sequelize = require("../database");

const Model = Sequelize.Model;

class User extends Model {
  validPassword(password) {
    return this.password.toString() === password.toString();
  }
}
User.init(
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your name"
        }
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your password"
        }
      }
    },
    isAdmin: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
  },
  { sequelize, modelName: "user" }
);

User.sync({ force: true }).then(() => {
  return User.create({
    username: "admin",
    password: "admin",
    isAdmin: true
  });
});

module.exports = User;
