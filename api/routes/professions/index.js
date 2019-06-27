const professions = require('express').Router();

professions.get("/", (req, res) => {
  res.send("Here are professions bro.")
});



module.exports = professions;