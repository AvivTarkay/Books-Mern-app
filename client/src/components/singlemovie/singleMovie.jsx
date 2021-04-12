import React from "react";

const SingleMovie = props => {
	const { name, rating, _id } = props.movieData;
	return (
		<div>
			<h2>{name}</h2>
			<p>{rating}</p>
			<p>{_id}</p>
		</div>
	);
};

export default SingleMovie;
