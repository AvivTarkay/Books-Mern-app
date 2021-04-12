import "./App.css";
import React, { useEffect, useState } from "react";
import BooksRouter from "./BooksRouter";
import { callMyServer } from "./service/book-service";
function App() {
	const [result, setResult] = useState();
	useEffect(callBasicApi, []);

	function callBasicApi() {
		callMyServer().then(res => {
			setResult(res);
		});
	}

	return (
		<div className="App">
			<BooksRouter />
		</div>
	);
}

export default App;
