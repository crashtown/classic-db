const reagent = require('express').Router();
const { ItemController } = require("../../../controllers/item");
// Example http://localhost:4080/v1/items/reagent
reagent.get("/", async (req, res) => {
    console.log("REAGENT:")
    const reagent = await ItemController.getAllByClassId(5);
    res.json(reagent);
  });
  
module.exports = reagent;