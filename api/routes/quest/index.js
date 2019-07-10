const quest = require('express').Router();

quest.get("/", (req, res) => {
  res.send("Here are quests bro.")
});



module.exports = quest;