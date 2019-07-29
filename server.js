const express = require("express");
const favicon = require("express-favicon");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");

const dotenv = require("dotenv");
dotenv.config();

const db = require("./database");
const routes = require("./routes");

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.static(__dirname));
app.use(favicon(__dirname + "/client/build/favicon.ico"));
// the __dirname is the current directory from where the script is running

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ secret: "keyboard cat", cookie: {} }));

app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api", routes);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log("Listening on ", port);
  });
});

// db.users.create({
//   username: "admin",
//   password: "admin",
//   role: "admin"
// });
