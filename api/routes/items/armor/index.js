const armor = require('express').Router();

armor.get("/", (req, res) => {
  res.send("Here is armor bro.")
});
module.exports = armor;