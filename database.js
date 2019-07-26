const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: true
  },
  define: {
    underscored: true
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./model/user")(sequelize, Sequelize);
db.products = require("./model/product")(sequelize, Sequelize);

db.users.hasMany(db.products);
db.products.belongsTo(db.users);

module.exports = db;
