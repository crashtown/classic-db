const items = require('express').Router();
const { ItemController } = require("../../controllers/item_template");
items.get("/", (req, res) => {
  res.send("Here are items bro.")
});
items.get("/:id", async (req, res) => {
  const item = await ItemController.getById(req.params.id);
  res.json(item);
});
items.get("/search/:name", async (req, res) => {
  const search = await ItemController.getBySearch(req.params.name);
  res.json(search);
});

items.use('/weapons', require('./weapons'));
items.use('/armor', require('./armor'));



module.exports = items;