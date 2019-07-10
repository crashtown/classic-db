const container = require('express').Router();
const { ItemController } = require("../../../controllers/item_template");
// Example http://localhost:4080/v1/items/container
container.get("/", async (req, res) => {
    console.log("CONTAINER:")
    const container = await ItemController.getAllByClassId(1);
    res.json(container);
  });
  
module.exports = container;