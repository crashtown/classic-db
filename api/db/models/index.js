const appConfig = require("../config/app.js");
const worldConfig = require("../config/world.js");
const Sequelize = require("sequelize");
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const worldPath = __dirname + "/world";

let db = {
  world: {},
  app: {},
};
const app = new Sequelize(appConfig);
const world = new Sequelize(worldConfig);


fs.readdirSync(worldPath)
	.filter(file => {
		return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
	})
	.forEach(file => {
		const model = world["import"](path.join(worldPath, file));
		db.world[model.name] = model;
	});

Object.keys(db.world).forEach(modelName => {
	if (db.world[modelName].associate) {
		db.world[modelName].associate(db.world);
	}
});

db.app = app;
db.world = world;

module.exports = db;
