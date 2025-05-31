import SpeakerBubble from "../components/SpeakerBubble";
import hevWorkStart from "../assets/hev_sprite_4.gif";
import hevWorkLoop from "../assets/hev_sprite_5.gif";
import { useEffect, useState } from "react";

const Projects = () => {
	const [gifSrc, setGifSrc] = useState(hevWorkStart);
	useEffect(() => {
		setTimeout(() => {
			setGifSrc(hevWorkLoop);
		}, 3500);
	}, []);
	return (
		<div className="portal">
			<SpeakerBubble dialogue={["Here are some of my recent projects"]} />
			<img src={gifSrc} className="sprite" />
		</div>
	);
};

export default Projects;
