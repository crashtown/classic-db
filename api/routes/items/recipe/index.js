const recipe = require('express').Router();
const { ItemController } = require("../../../controllers/item_template");
// Example http://localhost:4080/v1/items/recipe
recipe.get("/", async (req, res) => {
    console.log("RECIPE:")
    const recipe = await ItemController.getAllByClassId(9);
    res.json(recipe);
  });
  
module.exports = recipe;