import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Books } from "./pages";
import { Table } from "./components";
import ButtonAppBar from "./components/header/AppBar";

export default function BooksRouter() {
	return (
		<Router>
			<ButtonAppBar />
			<Switch>
				<Route exact path="/books" component={Books} />
				<Route exact path="/" component={Home} />
				<Route exact path="/table" component={Table} />
			</Switch>
		</Router>
	);
}
