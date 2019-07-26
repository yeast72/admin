const routes = require("express").Router();

const product = require("./product");
const user = require("./user");
const auth = require("./auth");

routes.use(auth);
routes.use("/products", product);
routes.use("/users", user);

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

routes.use((req, res, next) => {
  return res.status(404).json({ message: "Route" + req.url + " Not found." });
});

routes.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  return res.status(status).json({ message: message });
});

module.exports = routes;
