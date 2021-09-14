import React, { Fragment } from "react";

import mainImage from "../../assets/insideRestaurant.jpg";
import logo from "../../assets/logo.jpg";
import classes from "./Header.module.css";
import HeaderAddButton from "./HeaderAddButton";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<div className={classes.logo}>
					<img src={logo} alt="Logo" />
					<h1>The Tiny Tiki Hut</h1>
				</div>

				<div className={classes.rightMenu}>
					<HeaderAddButton onClick={props.onShowForm} />
					<HeaderCartButton onClick={props.onShowCart} />
				</div>
			</header>
			<div className={classes["main-image"]}>
				<img src={mainImage} alt="Inside restaurant view" />
			</div>
		</Fragment>
	);
};

export default Header;
