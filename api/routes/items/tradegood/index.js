const tradegood = require('express').Router();
const { ItemController } = require("../../../controllers/item_template");
// Example http://localhost:4080/v1/items/tradegood
tradegood.get("/", async (req, res) => {
    console.log("TRADEGOOD:")
    const tradegood = await ItemController.getAllByClassId(7);
    res.json(tradegood);
  });
  
module.exports = tradegood;