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
export function getAverage(...numbers) {
	// const numContainer = [...numbers];
	let sum = numbers.reduce((total, num) => {
		return total + num;
	});
	let avg = sum / numbers.length;

	return avg;
}
let test = getAverage(4, 5, 6, 7, 8, 9);
console.log(test);
export default App;
