const express = require("express");
const path = require("path");
const router = express.Router();

// Import Utils
const dirName = require("../utils/index");

const message = [];

router.get("/", (req, res, next) => {
  // To render html file
  // res.sendFile(path.join(dirName, "views", "home.html"));

  // To render pug file -> set up in app.js
  res.render("home", { messages: message });
});

router.post("/add-message", (req, res) => {
  const date = new Date();
  const getYear = date.getFullYear();
  const getDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const getMonth =
    date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const formatDate = `${getDate}/${getMonth}/${getYear}`;

  const body = {
    name: req.body.name,
    message: req.body.message,
    date: formatDate,
  };

  message.push({
    name: req.body.name,
    message: req.body.message,
    date: formatDate,
  });

  res.redirect("/");
});

module.exports = {
  home: router,
};
