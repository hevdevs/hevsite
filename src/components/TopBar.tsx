import { NavLink } from "react-router";
import projects from "../assets/projects.svg";
import home from "../assets/home.svg";
import contact from "../assets/contact.svg";
import briefcase from "../assets/briefcase.svg";
// import React from "react";

const TopBar = () => {
	return (
		<nav className="options-bar">
			<NavLink to="/contact" title="Contact" className="nav tooltip">
				<img className="icon" src={contact} />
				<span className="tooltiptext jersey-10-regular">Contact</span>
			</NavLink>
			<NavLink to="/projects" title="Projects" className="nav tooltip">
				<img src={projects} className="icon" />
				<span className="tooltiptext jersey-10-regular">Projects</span>
			</NavLink>
			<NavLink to="/work" title="Career" className="nav tooltip">
				<img src={briefcase} className="icon" />
				<span className="tooltiptext jersey-10-regular">CV</span>
			</NavLink>
			<NavLink to="/" title="Home Page" className="nav tooltip">
				<img src={home} id="home" className="icon" />
				<span className="tooltiptext jersey-10-regular">Home</span>
			</NavLink>
		</nav>
	);
};

export default TopBar;
