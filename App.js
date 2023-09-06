const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

// Utils
const dirName = require("./utils/index");

// Import File
const Home = require("./route/Home");
const Reception = require("./route/Reception");

// using pug to render pug fil -> to render pug file
app.set("view engine", "pug");
app.set("views", "views");

// I think to join a css file
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", Home.home);
app.use("/married", Reception.reception);

// Error Page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(dirName, "views", "404.html"));
});

app.listen(4000);
