const movieModel = require("../models/movie_model");

async function getAllMovies(req, res) {
	await movieModel.find((err, results) => {
		if (err) {
			res.status(400).json({ success: false, error: err });
		}
		if (!results.length) {
			res.status(404).json({ success: false, message: "No movies available" });
		}
		res.status(200).json({ success: true, data: results });
	});
}

async function saveMovies(req, res) {
	let newMovie = req.body.movie;
	await movieModel.insertMany(newMovie, err => {
		if (err) {
			res
				.status(400)
				.json({ success: false, message: "You need to insert data!" });
		}
		if (newMovie?.name || newMovie?.rating) {
			res.status(201).json({ success: true, newMovie: newMovie });
		}
	});
}

async function findMoviesByName(req, res) {
	let movieName = req.params.movieName;
	let queryByName = {
		name: { $regex: movieName, $options: "i" },
	};
	await movieModel.find(queryByName, (err, movieItem) => {
		if (err) {
			console.log(err);
			res
				.status(400)
				.json({ success: false, message: "Error : no movies available" });
		}
		if (!movieItem.length) {
			res
				.status(404)
				.json({ success: false, message: "Error: movie not found!" });
		}
		if (movieItem.length) {
			res.status(200).json({ success: true, data: movieItem });
		}
	});
}

async function deleteMovies(req, res) {
	let movieId = req.params.id;

	await movieModel.findByIdAndRemove(movieId, (err, doc) => {
		if (err) {
			res.status(404).json({ success: false, message: "Movie not found!" });
		}
		if (doc) {
			res.status(201).json({
				success: true,
				data: doc,
				message: "Movie been deleted successfully",
			});
		}
	});
}

async function updateMovies(req, res) {
	let movieId = req.params.id;
	let movieContent = req.body.movie;
	await movieModel.findByIdAndUpdate(movieId, movieContent, (err, doc) => {
		if (err) {
			res.status(404).json({ success: false, message: "Movie not found!" });
		}
		if (doc) {
			res.status(300).json({
				success: true,
				data: doc,
				message: "Movie updated successfully",
			});
		}
	});
}
module.exports = {
	getAllMovies,
	saveMovies,
	findMoviesByName,
	deleteMovies,
	updateMovies,
};
