import React from "react";
import "./Section2.css";

const Section2 = ({ orderBasket, setOrderBasket }) => {
	const renderOrder = () => {
		if (orderBasket.length === 0) {
			return <p>No items in the order.</p>;
		}

		const handleDelete = (id) => {
			const updatedOrder = orderBasket.filter((item) => item.id !== id);
			setOrderBasket(updatedOrder);
		};

		return orderBasket.map((item) => (
			<div key={item.id} className="orderItem">
				<p>
					{item.title} - Quantity: {item.count} - Price: {item.price} som
				</p>

				<button onClick={() => handleDelete(item.id)}>Delete</button>
			</div>
		));
	};

	const renderTotalOrder = () => {
		const totalQuantity = orderBasket.reduce(
			(total, item) => total + item.count,
			0
		);
		const totalPrice = orderBasket.reduce(
			(total, item) => total + item.price,
			0
		);

		return (
			<div>
				<p>Total Quantity: {totalQuantity}</p>
				<p>Total Price: {totalPrice} som</p>
			</div>
		);
	};

	return (
		<div>
			<div className="orderList">{renderOrder()}</div>
			<div id="totalOrder">{renderTotalOrder()}</div>
		</div>
	);
};

export default Section2;
