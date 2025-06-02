import SpeakerBubble from "../components/SpeakerBubble";
import hevWork from "../assets/hev_sprite_4.gif";

const Work = () => {
	return (
		<div className="portal">
			<SpeakerBubble dialogue={["Here's my recent work history"]} />
			<div className="content-display">
				<img src={hevWork} className="sprite" />
				<div className="aside jersey-10-regular">
					<h2>Experience</h2>
					<h3>Senior Software Engineer</h3>
					<h4>Made Tech</h4>
					<h3>Software Engineer and Lead Lecturer</h3>
					<h4>Northcoders</h4>
					<h3>Software Engineer and Seminar Lead</h3>
					<h4>Northcoders</h4>
					<h3>Junior Software Engineer and Mentor</h3>
					<h4>Northcoders</h4>
				</div>
			</div>
		</div>
	);
};

export default Work;
