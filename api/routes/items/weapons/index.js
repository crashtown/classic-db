const weapons = require('express').Router();

weapons.get("/", (req, res) => {
  res.send("Here are weapons bro.")
});

module.exports = weapons;