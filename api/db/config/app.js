require("dotenv").config();
module.exports = {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_APP_NAME,
		dialect: "mysql",
		port: process.env.DB_PORT,
		host: process.env.DB_HOST,
		params: {
			pool: {
				max: 10,
				min: 0,
				acquire: 30000,
				idle: 10000,
			},
			operatorsAliases: false,
		},
};