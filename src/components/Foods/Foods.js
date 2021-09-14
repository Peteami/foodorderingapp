import React, { Fragment } from "react";
import AvailableFoods from "./AvailableFoods";
import FoodsSummary from "./FoodsSummary";

const Foods = () => {
	return (
		<Fragment>
			<FoodsSummary />
			<AvailableFoods />
		</Fragment>
	);
};

export default Foods;
