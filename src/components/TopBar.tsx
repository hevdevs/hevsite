import { NavLink } from "react-router";
import projects from "../assets/projects.svg";
import home from "../assets/home.svg";
import contact from "../assets/contact.svg";
import briefcase from "../assets/briefcase.svg";

const TopBar = () => {
	return (
		<section className="options-bar">
			<NavLink to="/contact" title="Contact Me" className="nav">
				<img className="icon" src={contact} />
			</NavLink>
			<NavLink to="/projects" title="Projects" className="nav">
				<img src={projects} className="icon" />
			</NavLink>
			<NavLink to="/work" title="Career" className="nav">
				<img src={briefcase} className="icon" />
			</NavLink>
			<NavLink to="/" title="Home Page" className="nav">
				<img src={home} className="icon" />
			</NavLink>
		</section>
	);
};

export default TopBar;
