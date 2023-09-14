const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const errorPage = require("./controller/error");

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
app.use(errorPage.getErrorPage);

app.listen(4000);
