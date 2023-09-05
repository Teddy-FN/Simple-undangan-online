const express = require("express");
const path = require("path");
const router = express.Router();

// Import Utils
const dirName = require("../utils/index");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(dirName, "views", "home.html"));
});

module.exports = {
  home: router,
};
