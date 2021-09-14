import React, { useEffect, useState } from "react";
import Card from "../UI/Card";

import classes from "./AvailableFoods.module.css";
import FoodItem from "./FoodItem/FoodItem";

const AvailableFoods = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				"https://httppost-ae56a-default-rtdb.firebaseio.com/meal.json"
			);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const responseData = await response.json();

			const loadedMeals = [];

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}
			setMeals(loadedMeals);
			setIsLoading(false);
		};

		fetchMeals().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<section className={classes.mealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className={classes.mealsError}>
				<p>{httpError}</p>
			</section>
		);
	}

	const foodList = meals.map((food) => (
		<FoodItem
			id={food.id}
			key={food.id}
			name={food.name}
			description={food.description}
			price={food.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{foodList}</ul>
			</Card>
		</section>
	);
};

export default AvailableFoods;
