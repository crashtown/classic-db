const armor = require('express').Router();
const { ItemController } = require("../../../controllers/item_template");
// Example http://localhost:4080/v1/items/armor
  armor.get("/", async (req, res) => {
    console.log("ARMOR:")
    const armor = await ItemController.getAllByClassId(4);
    res.json(armor);
  });
  
module.exports = armor;