import React, { useState, useEffect } from "react";
import { getAllBooks } from "../../service/book-service";
import { postBook } from "../../service/book-service";
import { Form, Table } from "../../components";
import "./Books.css";
import {
	AddToTable,
	RemoveFromTable,
	UpdateBook,
} from "../../redux/books/BooksAction";
import { connect } from "react-redux";

const Books = ({ AddToTable, RemoveFromTable, UpdateBook }) => {
	const [booksItems, setBooksItems] = useState([]);
	const [name, setName] = useState("");
	const [numberOfPages, setNumberOfPages] = useState(0);

	useEffect(() => {
		const getBooks = () => {
			getAllBooks().then(res => {
				setBooksItems(res);
				//*test for redux
				res.forEach(book => AddToTable(book));
				//*----
			});
		};
		getBooks();
	}, []);

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
		AddToTable(bookItem);
	}
	function removeBook() {
		RemoveFromTable(name);
	}
	function updateBook() {
		UpdateBook(name, numberOfPages);
	}
	return (
		<div>
			<h1> Books Component</h1>
			<Form
				saveNewBook={saveNewBook}
				changeNameInput={changeNameInput}
				changeNumberInput={changeNumberInput}
				RemoveFromTable={removeBook}
				updateBookTable={updateBook}
			/>
			<Table booksInfo={booksItems} />
		</div>
	);
};
const mapDispatchToProps = dispatch => {
	return {
		AddToTable: (name, numberOfPages) =>
			dispatch(AddToTable(name, numberOfPages)),
		RemoveFromTable: bookName => dispatch(RemoveFromTable(bookName)),
		UpdateBook: (name, value) => dispatch(UpdateBook(name, value)),
	};
};
export default connect(null, mapDispatchToProps)(Books);
