import React from "react";

import classes from "./HeaderAddButton.module.css";

const HeaderAddButton = (props) => {
	return (
		<div>
			<button className={classes.addButton} onClick={props.onClick}>
				add to menu
			</button>
		</div>
	);
};

export default HeaderAddButton;
