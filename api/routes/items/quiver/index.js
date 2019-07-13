const quiver = require('express').Router();
const { ItemController } = require("../../../controllers/item");
// Example http://localhost:4080/v1/items/quiver
quiver.get("/", async (req, res) => {
    console.log("QUIVER:")
    const quiver = await ItemController.getAllByClassId(11);
    res.json(quiver);
  });
  
module.exports = quiver;