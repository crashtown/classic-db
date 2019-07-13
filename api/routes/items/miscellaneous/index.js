const miscellaneous = require('express').Router();
const { ItemController } = require("../../../controllers/item");
// Example http://localhost:4080/v1/items/miscellaneous
miscellaneous.get("/", async (req, res) => {
    console.log("MISCELLANEOUS:")
    const miscellaneous = await ItemController.getAllByClassId(15);
    res.json(miscellaneous);
  });
  
module.exports = miscellaneous;