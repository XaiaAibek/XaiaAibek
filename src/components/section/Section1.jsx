import React, { useState } from "react";

import hamburger from "../../img/hamburger.png";
import coffee from "../../img/coffee.png";
import cola from "../../img/cola.svg";
import tea from "../../img/tea.svg";
import cheeseburger from "../../img/cheeseburger.svg";
import firies from "../../img/fries.svg";
import "./Section1.css";
import Section2 from "./Section2";

const Section1 = () => {
	const [menuItems] = useState([
		{
			id: 1,
			title: "Hamburger",
			price: 80,
			img: hamburger,
		},
		{
			id: 2,
			title: "Coffee",
			price: 100,
			img: coffee,
		},
		{
			id: 3,
			title: "Cola",
			price: 60,
			img: cola,
		},
		{
			id: 4,
			title: "Tea",
			price: 50,
			img: tea,
		},
		{
			id: 5,
			title: "Cheeseburger",
			price: 100,
			img: cheeseburger,
		},
		{
			id: 6,
			title: "Fries",
			price: 40,
			img: firies,
		},
	]);

	const [orderBasket, setOrderBasket] = useState([]);
	const addToBasket = (id) => {
		setOrderBasket((prevBasket) => {
			const updatedBasket = prevBasket.map((item) => {
				if (item.id === id) {
					return {
						...item,
						count: item.count + 1,
						price: (item.count + 1) * item.pricePerUnit,
					};
				}
				return item;
			});

			if (!updatedBasket.some((item) => item.id === id)) {
				const newData = menuItems.find((item) => item.id === id);
				const newProduct = {
					...newData,
					count: 1,
					pricePerUnit: newData.price,
				};
				return [...updatedBasket, newProduct];
			}

			return updatedBasket;
		});
	};

	return (
		<div className="section">
			<div className="menu-items">
				{menuItems.map(({ id, title, price, img }) => (
					<div key={id} className="food" onClick={() => addToBasket(id)}>
						<img src={img} alt={title} />
						<h1>{title}</h1>
						<p>{price}</p>
					</div>
				))}
			</div>
			<div className="section2">
				<Section2 orderBasket={orderBasket} setOrderBasket={setOrderBasket} />
			</div>
		</div>
	);
};

export default Section1;
