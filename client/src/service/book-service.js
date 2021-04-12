const basicApi = "http://localhost:4000/";

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
		alert(err);
	}
}
async function getAllBooks() {
	try {
		return await fetch(`${basicApi}books`)
			.then(res => {
				console.log("getAllBooks => res:", res);
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
