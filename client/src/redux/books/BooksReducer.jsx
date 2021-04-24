import * as ActionTypes from "./BooksTypes";

export const INITIAL_STATE = {
	books: [],
};

const BooksReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.ADD_TO_TABLE:
			// const bookExists = state.books.find(book =>
			// 	book.name === action.payload.name ? true : false
			// );

			return {
				...state,
				books: [...state.books, { ...action.payload }],
			};

		case ActionTypes.REMOVE_FROM_TABLE:
			return {
				...state,
				books: state.books.filter(book => {
					return book.name !== action.payload.name;
				}),
			};
		case ActionTypes.UPDATE_BOOKS:
			return {
				...state,
				books: state.books.map(book => {
					if (book.name === action.payload.name) {
						return { ...book, numberOfPages: +action.payload.numberOfPages };
					}
					return book;
				}),
			};
		default:
			return state;
	}
};
export default BooksReducer;
