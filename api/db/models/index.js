const appConfig = require("../config/app.js");
const worldConfig = require("../config/world.js");
const Sequelize = require("sequelize");
// const fs = require('fs');
// const path = require('path');

let db = {};
// const basename = path.basename(__filename);
const app = new Sequelize(appConfig);
const world = new Sequelize(worldConfig);


// fs.readdirSync(__dirname)
// 	.filter(file => {
// 		return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
// 	})
// 	.forEach(file => {
// 		var model = sequelize["import"](path.join(__dirname, file));
// 		db[model.name] = model;
// 	});

// Object.keys(db).forEach(modelName => {
// 	if (db[modelName].associate) {
// 		db[modelName].associate(db);
// 	}
// });

db.app = app;
db.world = world;

module.exports = db;
