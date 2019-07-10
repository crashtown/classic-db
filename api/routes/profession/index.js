const profession = require('express').Router();

profession.get("/", (req, res) => {
  res.send("Here are professions bro.")
});



module.exports = profession;