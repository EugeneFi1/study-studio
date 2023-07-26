const express = require("express");
const router = express.Router();
const config = require("../mocks/config.js");

router.get("/", function (req, res) {
  res.send(config);
});

module.exports = router;
