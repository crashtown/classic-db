const projectile = require('express').Router();
const { ItemController } = require("../../../controllers/item");
// Example http://localhost:4080/v1/items/projectile
projectile.get("/", async (req, res) => {
    console.log("PROJECTILE:")
    const projectile = await ItemController.getAllByClassId(6);
    res.json(projectile);
  });
  
module.exports = projectile;