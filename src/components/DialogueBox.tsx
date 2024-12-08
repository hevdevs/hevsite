import React from "react";
import { NavLink } from "react-router";

const DialogueBox: React.FC = () => {
	return (
		<nav className="dialogue-box">
			<NavLink to="/about">Character</NavLink>
			<NavLink to="/work">XP</NavLink>
			<NavLink to="/projects">Inventory</NavLink>
		</nav>
	);
};

export default DialogueBox;
