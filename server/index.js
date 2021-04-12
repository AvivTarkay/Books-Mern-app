const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const dbConnection = require("./DB");
const PORT = process.env.PORT || 8080;
const BookRouter = require("./routes/bookRouter");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

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
dbConnection.on("error", () => {
	console.log("dbConnection error");
});
// app.get("/", (req, res) => {
// 	res.status(200).json({ message: "Please send your request" });
// });

app.listen(PORT, () => console.log(`Mern Server connected on ${PORT}`));
app.use("/books", BookRouter);
