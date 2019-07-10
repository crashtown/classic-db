const key = require('express').Router();
const { ItemController } = require("../../../controllers/item_template");
// Example http://localhost:4080/v1/items/key
  key.get("/", async (req, res) => {
    console.log("KEY:")
    const key = await ItemController.getAllByClassId(13);
    res.json(key);
  });
  
module.exports = key;