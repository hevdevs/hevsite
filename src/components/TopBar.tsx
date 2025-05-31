import { NavLink } from "react-router";
import projects from "../assets/projects.svg";
import home from "../assets/home.svg";
import contact from "../assets/contact.svg";
import briefcase from "../assets/briefcase.svg";

const TopBar = () => {
	return (
		<nav className="options-bar">
			<NavLink to="/contact" title="Contact" className="nav tooltip">
				<span className="tooltiptext jersey-10-regular">Get in touch</span>
				<img className="icon" src={contact} />
			</NavLink>
			<NavLink to="/projects" title="Projects" className="nav tooltip">
				<span className="tooltiptext jersey-10-regular">View projects</span>
				<img src={projects} className="icon" />
			</NavLink>
			<NavLink to="/work" title="Career" className="nav tooltip">
				<span className="tooltiptext jersey-10-regular">Career stuff</span>
				<img src={briefcase} className="icon" />
			</NavLink>
			<NavLink to="/" title="Home Page" className="nav tooltip">
				<span className="tooltiptext jersey-10-regular">Back to home</span>
				<img src={home} className="icon" />
			</NavLink>
		</nav>
	);
};

export default TopBar;
