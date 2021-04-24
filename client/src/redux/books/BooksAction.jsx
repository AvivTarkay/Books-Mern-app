import * as ActionTypes from "./BooksTypes";

export const AddToTable = books => {
	return {
		type: ActionTypes.ADD_TO_TABLE,
		payload: {
			name: books.name,
			numberOfPages: +books.numberOfPages,
			...books,
		},
	};
};

export const RemoveFromTable = bookName => {
	console.log(bookName);
	return {
		type: ActionTypes.REMOVE_FROM_TABLE,
		payload: { name: bookName },
	};
};

export const UpdateBook = (bookName, value) => {
	return {
		type: ActionTypes.UPDATE_BOOKS,
		payload: {
			name: bookName,
			numberOfPages: value,
		},
	};
};
