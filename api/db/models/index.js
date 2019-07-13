const appConfig = require("../config/app.js");
const Sequelize = require("sequelize");
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const appPath = __dirname + "/app";

let db = {
  app: {},
};
const app = new Sequelize(appConfig);


fs.readdirSync(appPath)
	.filter(file => {
		return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
	})
	.forEach(file => {
		const model = app["import"](path.join(appPath, file));
		db.app[model.name] = model;
	});

Object.keys(db.app).forEach(modelName => {
	if (db.app[modelName].associate) {
		db.app[modelName].associate(db.app);
	}
});

db.app = app;

module.exports = db;
