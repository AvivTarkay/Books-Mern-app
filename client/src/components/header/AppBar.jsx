import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	root: {
		height: "11vh",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		marginLeft: theme.spacing(30),
		color: "#fff",
	},
	avatar: {
		marginLeft: theme.spacing(85),
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="static" classes={{ root: classes.root }}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6">Books App</Typography>

					<Link to="/">
						<Typography variant="h6" className={classes.title}>
							Home
						</Typography>
					</Link>
					<Link to="/books">
						<Typography variant="h6" className={classes.title}>
							Books
						</Typography>
					</Link>

					<Avatar
						alt="Remy Sharp"
						src="images/book2.png"
						className={classes.avatar}
					/>
				</Toolbar>
			</AppBar>
		</div>
	);
}
