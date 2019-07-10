const search = require('express').Router();
const { ItemController } = require("../../controllers/item_template");
// Example http://localhost:4080/v1/search?keyword=heartseeker
  search.get("/", async (req, res) => {
    const searchItems = await ItemController.getBySearch(req.query.keyword);
    res.json(searchItems);
  });

module.exports = search;