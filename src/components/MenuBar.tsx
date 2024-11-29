import React from "react";
import { NavLink } from "react-router";

const MenuBar: React.FC = () => {
	return (
		<nav>
			<NavLink to="/ ">1</NavLink>
			<NavLink to="/work ">2</NavLink>
			<NavLink to="/projects ">3</NavLink>
		</nav>
	);
};

export default MenuBar;
