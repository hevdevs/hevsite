import SpeakerBubble from "../components/SpeakerBubble";
import hevIdle from "../assets/hev_sprite_3.gif";
import hevGiggle from "../assets/hev_sprite_2.gif";
import { useState } from "react";
import linkedin from "../assets/li.svg";
import gh from "../assets/gh.svg";
import email from "../assets/email.svg";
import { Link } from "react-router";

const Contact = () => {
	const [hover, setHover] = useState(false);
	function handleMouseOver() {
		setHover(true);
	}
	function handleMouseLeave() {
		setHover(false);
	}
	return (
		<div className="portal">
			<SpeakerBubble
				dialogue={[
					"You can contact me through any of these places...",
					"Let's talk about building great stuff together!",
				]}
			/>
			<div>
				<img
					className="sprite"
					onMouseEnter={handleMouseOver}
					onMouseLeave={handleMouseLeave}
					src={hover ? hevGiggle : hevIdle}
				/>
				<Link
					className="external-nav"
					to="https://www.linkedin.com/in/heather-magnier-ashton/">
					<img src={linkedin} className="icon" />
				</Link>
				<Link className="external-nav" to="https://github.com/hevdevs">
					<img src={gh} className="icon" />
				</Link>
				<Link className="external-nav" to="mailto:hevmdevs@gmail.com">
					<img src={email} className="icon" />
				</Link>
			</div>
		</div>
	);
};

export default Contact;
