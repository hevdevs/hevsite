import { NavLink } from "react-router";
import projects from "../assets/icons/projects.svg";
import home from "../assets/icons/home.svg";
import contact from "../assets/icons/contact.svg";
import briefcase from "../assets/icons/briefcase.svg";

const TopBar = () => {
	return (
		<nav className='options-bar'>
			<NavLink to='/' title='Home Page' className='nav tooltip'>
				<img src={home} id='home' className='icon' />
				<span className='tooltiptext jersey-10-regular'>Home</span>
			</NavLink>
			<NavLink to='/work' title='Career' className='nav tooltip'>
				<img src={briefcase} className='icon' />
				<span className='tooltiptext jersey-10-regular'>CV</span>
			</NavLink>
			<NavLink to='/projects' title='Projects' className='nav tooltip'>
				<img src={projects} className='icon' />
				<span className='tooltiptext jersey-10-regular'>Projects</span>
			</NavLink>
			<NavLink to='/contact' title='Contact' className='nav tooltip'>
				<img className='icon' src={contact} />
				<span className='tooltiptext jersey-10-regular'>Contact</span>
			</NavLink>
		</nav>
	);
};

export default TopBar;
