import React, { useState } from "react";
import AddForm from "./components/AddForm/AddForm";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Foods/Foods";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const [showAddForm, setShowAddForm] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	const showAddFormHandler = () => {
		setShowAddForm(true);
	};

	const hideAddFormHandler = () => {
		setShowAddForm(false);
	};

	return (
		<CartProvider>
			{cartIsShown && <Cart onHideCart={hideCartHandler} />}
			{showAddForm && <AddForm onHideForm={hideAddFormHandler} />}
			<Header onShowCart={showCartHandler} onShowForm={showAddFormHandler} />
			<main>
				<Foods />
			</main>
		</CartProvider>
	);
}

export default App;
