import SpeakerBubble from "../components/SpeakerBubble";
import hevIdle from "../assets/hev_sprite_3.gif"
import hevGiggle from "../assets/hev_sprite_2.gif"
import { useState } from "react";

const About = () => {
	const [hover, setHover] = useState(false)
	function handleMouseOver (){
		setHover(true)
	}
	function handleMouseLeave(){
		setHover(false)
	}
	return (
		<div className="portal">
			<SpeakerBubble dialogue={["Here's some more about me"]} />
			<img className="sprite" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} src={hover ? hevGiggle : hevIdle}/>
		</div>
	);
};

export default About;
