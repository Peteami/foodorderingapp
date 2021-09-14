import React from "react";

import classes from "./FoodsSummary.module.css";

const FoodsSummary = () => {
	return (
		<section className={classes.summary}>
			<h2>Good Food, Delivered To Your Door</h2>
			<p>
				Authentic Tiki Bar in the heart of downtown Playa del Carmen.
				Specializing in traditional and modern craft cocktails. Serving
				favorites like ramen, Korean street tacos and Korean Fried Chicken! Come
				on over!
			</p>
			<p>
				All our meals are cooked with high-quality ingredients, just-in-time and
				of course by experienced chefs!
			</p>
		</section>
	);
};

export default FoodsSummary;
