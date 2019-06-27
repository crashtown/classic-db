const skills = require('express').Router();

skills.get("/", (req, res) => {
  res.send("Here are skills bro.")
});



module.exports = skills;