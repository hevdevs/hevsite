import {NavLink } from "react-router";

const TopBar = () => {
	return (
		<section className="options-bar">
			<NavLink to="/">Intro</NavLink>
			<NavLink to="/work">XP</NavLink>
			<NavLink to="/projects">Inventory</NavLink>
			<NavLink to="/about">Character</NavLink>
		</section>
	);
};

export default TopBar;
