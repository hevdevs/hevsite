import SpeakerBubble from "../components/SpeakerBubble";
import deskSpriteStart from "../assets/sprites/desk_1.gif";
import deskSpriteLoop from "../assets/sprites/desk_2.gif";
import { useEffect, useState } from "react";

const Projects = () => {
	const [gifSrc, setGifSrc] = useState(deskSpriteStart);

	useEffect(() => {
		setTimeout(() => {
			setGifSrc(deskSpriteLoop);
		}, 3500);
	}, []);

	return (
		<div className='portal'>
			<img src={gifSrc} className='sprite-alt' />
			<SpeakerBubble dialogue={["Check out some of my personal projects."]} />
			<div className='content-display'>
				<div className='aside'></div>
			</div>
		</div>
	);
};

export default Projects;
