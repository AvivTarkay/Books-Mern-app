const dotenv = require("dotenv");
dotenv.config();
//*general imports:
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

//*import the connection:
const dbConnection = require("./DB");
//*import routers module:
const BookRouter = require("./routes/bookRouter");
const path = require("path");
//*configuration OF the port based on the env file.
const PORT = process.env.PORT || 8080;
//* use bodyParser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan("dev"));
dbConnection.on("error", () => {
	console.log("dbConnection error");
});
app.listen(PORT, () => console.log(`Mern Server connected on ${PORT}`));
app.use("/books", BookRouter);

//*-----------------------------------
if (process.env.NODE_ENV === "production") {
	// Serve any static files
	app.use(express.static(path.join(__dirname, "../client/build")));
	// Handle React routing, return all requests to React app
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../client/build", "index.html"));
	});
}
//*-----------------------------------
