const quest = require('express').Router();
const { ItemController } = require("../../../controllers/item");
// Example http://localhost:4080/v1/items/quest
  quest.get("/", async (req, res) => {
    console.log("QUEST:")
    const quest = await ItemController.getAllByClassId(12);
    res.json(quest);
  });
  
module.exports = quest;