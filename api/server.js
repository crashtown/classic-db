require("dotenv").config();
const db = require("./db/models");
const path = require("path");
const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const port = process.env.SERVER_PORT;

const server = express();

// function timeout(ms) {
// 	return new Promise(resolve =>
// 		setTimeout(() => {
// 			resolve(true);
// 		}, ms)
// 	);
// }

const testDbConnections = async () => {
  await db.app
    .authenticate()
    .then(() => {
      console.log('Connection has been established to App DB successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the App DB database:', err);
    });
    await db.world
    .authenticate()
    .then(() => {
      console.log('Connection has been established to World DB successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the World DB database:', err);
    });
}

const startHttp = () => {
	server.use(cors());
	server.get("/", (req, res) => {
		res.sendFile(path.resolve("index.html"));
	});
	server.use("/", routes);
	server.listen(port, () => {
		console.log(
			`\nAll services started and running, Classic Database API is now listening on port TCP ${port}, awaiting incoming connections...`
		);
	});
}

const startServer = async () => {
  await testDbConnections();
  await startHttp();
}

startServer();