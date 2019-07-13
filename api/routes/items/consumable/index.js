const consumable = require('express').Router();
const { ItemController } = require("../../../controllers/item");
// Example http://localhost:4080/v1/items/consumable
  consumable.get("/", async (req, res) => {
    console.log("CONSUMABLE:")
    const consumable = await ItemController.getAllByClassId(0);
    res.json(consumable);
  });
  
module.exports = consumable;