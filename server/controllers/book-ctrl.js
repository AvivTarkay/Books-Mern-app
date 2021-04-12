const bookModel = require("../models/book-model");

function createBook(req, res) {
	const body = req.body;
	if (!body) {
		return res.status(400).json({ success: false, message: "No data found" });
	}
	const book = new bookModel(body);
	if (!book) {
		return res.status(400).json({ success: false, message: "No book found" });
	}
	book
		.save()
		.then(() => {
			return res
				.status(200)
				.json({ success: true, message: `${req.body.name} saved` });
		})
		.catch(error => {
			return res
				.status(401)
				.json({ success: false, message: "No book saved", error: error });
		});
}

async function getAllBooks(req, res) {
	await bookModel.find((err, results) => {
		if (err) {
			res.status(400).json({ success: false, error: err });
		}
		if (!results.length) {
			res.status(404).json({ success: false, message: "No books found" });
		}
		console.log("results:", JSON.stringify(results));
		res.status(200).json({ success: true, data: results });
	});
}

async function getBookByName(req, res) {
	let bookName = req.params.name;
	await bookModel.find(
		{ name: { $regex: bookName, $options: "i" } },
		(err, bookItem) => {
			if (err) {
				res.status(400).json({ success: false, error: err });
			}
			if (!bookItem || bookItem.length <= 0) {
				res
					.status(404)
					.json({ success: false, message: "No such book stored" });
			}
			res.status(200).json({ success: true, data: bookItem });
		}
	);
}
async function getBookById(req, res) {
	await bookModel.find(req.params.id, (err, bookItem) => {
		if (err) {
			res.status(400).json({ success: false, error: err });
		}
		if (!bookItem) {
			res.status(404).json({ success: false, message: "No such book stored" });
		}
		res.status(200).json({ success: true, data: bookItem });
	});
}
async function updateBookByID(req, res) {
	await bookModel.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
		if (err) {
			res.status(400).json({ success: false, error: err });
		}
		res.status(300).json({
			success: true,
			data: doc,
			message: `Book number ${req.params.id} was updated`,
		});
		//${doc._id}
	});
}

module.exports = {
	createBook,
	getBookByName,
	getAllBooks,
	getBookById,
	updateBookByID,
};
