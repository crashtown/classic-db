const items = require('express').Router();
const { ItemController } = require("../../controllers/item");
items.use('/armor', require('./armor'));
items.use('/consumable', require('./consumable'));
items.use('/container', require('./container'));
items.use('/key', require('./key'));
items.use('/miscellaneous', require('./miscellaneous'));
items.use('/projectile', require('./projectile'));
items.use('/quest', require('./quest'));
items.use('/quiver', require('./quiver'));
items.use('/reagent', require('./reagent'));
items.use('/recipe', require('./recipe'));
items.use('/tradegood', require('./tradegood'));
items.use('/weapon', require('./weapon'));
// Example http://localhost:4080/v1/items
  items.get("/", async (req, res) => {
    console.log("ITEMS:")
    const items = await ItemController.getAll();
    res.json(items);
  });
  // Example http://localhost:4080/v1/items/15975
items.get("/:id", async (req, res) => {
  console.log("ITEM ID:")
  const item = await ItemController.getById(req.params.id);
  res.json(item);
});

module.exports = items;