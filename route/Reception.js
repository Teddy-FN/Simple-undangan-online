const express = require("express");
const path = require("path");
const route = express();

// Import Utils
const dirName = require("../utils/index");

route.get("/reception", (req, res, next) => {
  res.sendFile(path.join(dirName, "views", "reception.html"));
});

module.exports = {
  reception: route,
};
