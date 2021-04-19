const PORT = process.env.PORT || 8080;
const basicApi =
	process.env.NODE_ENV === "production"
		? `https://books-mern-app-finall.herokuapp.com/`
		: `http://localhost:8080/`;

async function callMyServer() {
	try {
		return await fetch(basicApi)
			.then(res => {
				return res.json();
			})
			.then(result => {
				return result.message;
			});
	} catch (err) {
		console.log(err);
	}
}
async function getAllBooks() {
	try {
		return await fetch(`${basicApi}books`)
			.then(res => {
				return res.json();
			})
			.then(result => {
				return result.data;
			});
	} catch (err) {
		console.log(err);
	}
}
async function postBook(newBook) {
	try {
		return await fetch(`${basicApi}books`, {
			method: "POST",
			body: JSON.stringify(newBook),
			headers: { "Content-Type": "application/json" },
		}).then(res => {
			return res.json();
		});
	} catch (err) {
		console.log(err);
	}
}
export { callMyServer, getAllBooks, postBook };
