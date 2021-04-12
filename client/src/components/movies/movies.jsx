import React, { useState, useEffect } from "react";

import SingleMovie from "../singlemovie/singleMovie";

function Movies() {
	const [movies, setMovies] = useState([]);

	const fetchFromDB = async () => {
		try {
			const response = await (
				await fetch("http://localhost:8080/movies/all")
			).json();
			return response;
		} catch (err) {
			throw err;
		} finally {
		}
	};

	useEffect(() => {
		async function getFetchedData() {
			let returnedData = await fetchFromDB();
			setMovies(returnedData.data);
		}
		getFetchedData();
	}, []);

	return (
		<React.Fragment>
			{movies.length > 0 &&
				React.Children.toArray(
					movies.map(movie => {
						return <SingleMovie movieData={movie} />;
					})
				)}
		</React.Fragment>
	);
}

export default Movies;
