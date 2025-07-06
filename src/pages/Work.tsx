import SpeakerBubble from "../components/SpeakerBubble";
import hevTalk from "../assets/hev_sprite_6.gif";
// import React from "react";

const Work = () => {
	return (
		<div className="portal">
			<div className="alt-dialogue">
				<img src={hevTalk} className="sprite-alt" id="talking-head" />
				<SpeakerBubble dialogue={["Here's my recent work history"]} />
			</div>
			<div className="content-display">
				<div className="aside jersey-10-regular" id="cv">
					<h2>Experience</h2>

					<h3>
						<a href="https://www.madetech.com/">Made Tech</a>
					</h3>

					<h4>Senior Software Engineer</h4>
					<p></p>
					<h3>
						<a href="https://www.northcoders.com/">Northcoders</a>
					</h3>
					<h4>Software Engineer and Lead Lecturer</h4>
					<h4>Software Engineer and Seminar Lead</h4>

					<h4>Junior Software Engineer and Mentor</h4>
				</div>
			</div>
		</div>
	);
};

export default Work;
