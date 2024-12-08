import React from "react";
import DialogueBox from "../components/DialogueBox";
import SpeakerBubble from "../components/SpeakerBubble";

const About: React.FC = () => {
	return (
		<div className="portal">
			<SpeakerBubble />
			<div className="placeholder" />
			<DialogueBox />
		</div>
	);
};

export default About;
