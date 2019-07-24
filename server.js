const express = require("express");
const favicon = require("express-favicon");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const passport = require("passport");

const dotenv = require("dotenv");
dotenv.config();

const sequelize = require("./database");
const routes = require("./routes");

const port = process.env.PORT || 3000;

const app = express();

require("./config/passport")(passport);

app.use(express.static(__dirname));
app.use(favicon(__dirname + "/client/build/favicon.ico"));
// the __dirname is the current directory from where the script is running

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ secret: "keyboard cat", cookie: {} }));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api", routes);

app.use(function(req, res, next) {
  if (!req.routes) return next(new Error("404"));
  next();
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({
    message: message
  });
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(port, () => {
  console.log("Listening on ", port);
});
