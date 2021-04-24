import { combineReducers } from "redux";
import BooksReducer from "./books/BooksReducer";

const rootReducer = combineReducers({ table: BooksReducer });

export default rootReducer;
