const mongoose = require("mongoose");
const dbConnectionString = process.env.DB;

mongoose
	.connect(dbConnectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB is connected..."))
	.catch(error => {
		console.error("Connection error", error.message);
	});

const db = mongoose.connection;

module.exports = db;
