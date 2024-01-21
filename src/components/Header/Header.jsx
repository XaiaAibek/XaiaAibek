import React from "react";
import "./Header.css";
import Section1 from "../section/Section1";

const Header = () => {
	return (
		<div className="layout">
			<div className="menu">
				<h1>Food-menu order-box</h1>
				<div className="menuItems">
					<Section1 />
				</div>
			</div>
		</div>
	);
};

export default Header;
