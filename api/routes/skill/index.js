const skill = require('express').Router();

skill.get("/", (req, res) => {
  res.send("Here are skills bro.")
});



module.exports = skill;