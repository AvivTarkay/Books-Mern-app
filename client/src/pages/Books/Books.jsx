import React, { useState, useEffect } from "react";
import { getAllBooks } from "../../service/book-service";
import { postBook } from "../../service/book-service";
import { Form, Table } from "../../components";
import "./Books.css";

const Books = () => {
	const [booksItems, setBooksItems] = useState([]);
	const [name, setName] = useState("");
	const [numberOfPages, setNumberOfPages] = useState(0);

	useEffect(getBooks, [booksItems]);

	function getBooks() {
		getAllBooks().then(res => {
			console.log("getBooks -> getAllBooks: ", res);
			setBooksItems(res);
		});
	}
	function changeNameInput(event) {
		setName(event.target.value);
	}
	function changeNumberInput(event) {
		setNumberOfPages(event.target.value);
	}
	function saveNewBook(event) {
		event.preventDefault();
		const bookItem = { name, numberOfPages };
		postBook(bookItem).then(res => {
			alert(res.success);
		});
	}
	return (
		<div>
			<h1> Books Component</h1>
			<Form
				saveNewBook={saveNewBook}
				changeNameInput={changeNameInput}
				changeNumberInput={changeNumberInput}
			/>
			<Table booksItems={booksItems} />
		</div>
	);
};
export default Books;
