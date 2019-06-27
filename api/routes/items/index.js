const items = require('express').Router();

items.get("/", (req, res) => {
  res.send("Here are items bro.")
});

items.use('/weapons', require('./weapons'));
items.use('/armor', require('./armor'));



module.exports = items;