const quests = require('express').Router();

quests.get("/", (req, res) => {
  res.send("Here are quests bro.")
});



module.exports = quests;