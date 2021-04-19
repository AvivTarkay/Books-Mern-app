import React, { useState, useEffect } from "react";
import { getAllBooks } from "../../service/book-service";
import { postBook } from "../../service/book-service";
import { Form, Table } from "../../components";
import "./Books.css";

const Books = () => {
	const [booksItems, setBooksItems] = useState([]);
	const [name, setName] = useState("");
	const [numberOfPages, setNumberOfPages] = useState(0);

	useEffect(() => {
		function getBooks() {
			getAllBooks().then(res => {
				setBooksItems(res);
			});
		}
		getBooks();
	}, []);

	// function getBooks() {
	// 	getAllBooks().then(res => {
	// 		setBooksItems(res);
	// 	});
	// }
	function changeNameInput(e) {
		setName(e.target.value);
	}
	function changeNumberInput(event) {
		setNumberOfPages(event.target.value);
	}
	function saveNewBook(e) {
		e.preventDefault();
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
			<Table booksInfo={booksItems} />
		</div>
	);
};
export default Books;
