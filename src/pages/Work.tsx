import SpeakerBubble from "../components/SpeakerBubble";
import hevWork from "../assets/hev_sprite_4.gif";

const Work = () => {
	return (
		<div className="portal">
			<SpeakerBubble dialogue={["Here's my recent work history"]} />
			<img src={hevWork} className="sprite" />
		</div>
	);
};

export default Work;
