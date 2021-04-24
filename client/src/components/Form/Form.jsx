import React from "react";

const Form = props => {
	const {
		saveNewBook,
		changeNameInput,
		changeNumberInput,
		RemoveFromTable,
		updateBookTable,
	} = props;

	return (
		<div>
			<form onSubmit={saveNewBook}>
				<label htmlFor="name">Name: </label>
				<input onChange={changeNameInput} name="name" type="text" />
				<label htmlFor="numberOfPages">Number Of Pages: </label>
				<input
					onChange={changeNumberInput}
					type="number"
					name="numberOfPages"
				/>
				<button type="submit">Save book</button>
				<button type="button" onClick={RemoveFromTable}>
					Delete book
				</button>
				<button type="button" onClick={updateBookTable}>
					Update book
				</button>
			</form>
		</div>
	);
};

export default Form;
