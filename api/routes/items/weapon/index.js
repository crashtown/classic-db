const weapon = require('express').Router();
const { ItemController } = require("../../../controllers/item");
// Example http://localhost:4080/v1/items/weapons
  weapon.get("/", async (req, res) => {
    console.log("WEAPON:")
    const weapon = await ItemController.getAllByClassId(2);
    res.json(weapon);
  });

module.exports = weapon;