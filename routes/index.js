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
  return res.status(404).send({ message: "Route" + req.url + " Not found." });
});

routes.use((err, req, res, next) => {
  return res.status(500).send({ error: err });
});

module.exports = routes;
