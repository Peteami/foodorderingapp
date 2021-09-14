import React, { useRef, useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./AddForm.module.css";

const isEmpty = (value) => value.trim() === "";
//
// const isNoPrice = (value) => value > 0;
//

const AddForm = (props) => {
	const cartCtx = useContext(CartContext);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);

	const submitNewItemHandler = async (foodData) => {
		setIsSubmitting(true);
		await fetch(
			"https://httppost-ae56a-default-rtdb.firebaseio.com/meal.json",
			{
				method: "POST",
				body: JSON.stringify(foodData),
				// body: JSON.stringify({
				// 	foodData,
				// }),
			}
		);
		setIsSubmitting(false);
		setDidSubmit(true);
		props.onHideForm();
	};

	const [formInputsValidity, setFormInputsValidity] = useState({
		foodName: true,
		foodDescription: true,
		foodPrice: true,
	});

	const foodNameInputRef = useRef();
	const foodDescriptionInputRef = useRef();
	const foodPriceInputRef = useRef();

	const addNewItemHandler = (event) => {
		event.preventDefault();

		const enteredFoodName = foodNameInputRef.current.value;
		const enteredFoodDescription = foodDescriptionInputRef.current.value;
		// const enteredFoodPrice = foodPriceInputRef.current.value;
		//
		const enteredPrice = foodPriceInputRef.current.value;
		const enteredFoodPrice = +enteredPrice;
		//

		const enteredFoodNameIsValid = !isEmpty(enteredFoodName);
		const enteredFoodDescriptionIsValid = !isEmpty(enteredFoodDescription);
		// const enteredFoodPriceIsValid = !isNoPrice(enteredFoodPrice);

		setFormInputsValidity({
			foodName: enteredFoodNameIsValid,
			foodDescription: enteredFoodDescriptionIsValid,
			// foodPrice: enteredFoodPriceIsValid,
		});

		const formIsValid = enteredFoodNameIsValid && enteredFoodDescriptionIsValid;
		// &&
		// enteredFoodPriceIsValid;

		if (!formIsValid) {
			return;
		}
		// submit new food item
		submitNewItemHandler({
			name: enteredFoodName,
			description: enteredFoodDescription,
			price: enteredFoodPrice,
		});
	};

	const foodNameControlClasses = `${classes.control} ${
		formInputsValidity.foodName ? "" : classes.invalid
	}`;
	const foodDescriptionControlClasses = `${classes.control} ${
		formInputsValidity.foodDescription ? "" : classes.invalid
	}`;
	const foodPriceControlClasses = `${classes.control} ${
		formInputsValidity.foodPrice ? "" : classes.invalid
	}`;
	//
	// const f/oodPriceControlClasses = `${classes.control}`;
	//

	const itemSubmitModalContent = (
		<form className={classes.form} onSubmit={addNewItemHandler}>
			<h1>New Food Item</h1>
			<div className={foodNameControlClasses}>
				<label htmlFor="foodName">Food name</label>
				<input type="text" id="foodName" ref={foodNameInputRef} />
				{!formInputsValidity.foodName && <p>Please enter a valid food name.</p>}
			</div>
			<div className={foodDescriptionControlClasses}>
				<label htmlFor="foodDescription">Description</label>
				<input type="text" id="foodDescription" ref={foodDescriptionInputRef} />
				{!formInputsValidity.foodDescription && (
					<p>Please enter a valid description.</p>
				)}
			</div>
			<div className={foodPriceControlClasses}>
				<label htmlFor="foodPrice">Price</label>
				<input
					type="number"
					id="foodPrice"
					step="any"
					ref={foodPriceInputRef}
				/>
				{!formInputsValidity.foodPrice && <p>Please enter a valid price.</p>}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onHideForm}>
					Cancel
				</button>
				<button className={classes.submit}>Add New Item On Menu</button>
			</div>
		</form>
	);

	const isSubmittingModalContent = <p>Sending new menu item...</p>;

	const didSubmitModalContent = (
		<p>Successfully added a new item to the menu</p>
	);

	return (
		<Modal onHideCart={props.onHideForm}>
			{!isSubmitting && itemSubmitModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmit && didSubmitModalContent}
		</Modal>
	);
};

export default AddForm;
