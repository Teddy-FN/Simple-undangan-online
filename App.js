const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

// Utils
const dirName = require("./utils/index");

// Import File
const Home = require("./route/Home");
const Reception = require("./route/Reception");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(Home.home);
app.use(Reception.reception);

// Error Page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(dirName, "views", "404.html"));
});

app.listen(4000);
