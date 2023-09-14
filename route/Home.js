const express = require("express");
const path = require("path");
const router = express.Router();

// Import Controller
const message = require("../controller/message");
router.get("/", message.getMessage);
router.post("/add-message", message.postMessage);
module.exports = {
  home: router,
};
