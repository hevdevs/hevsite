import React from "react";
import DialogueBox from "../components/DialogueBox";
import SpeakerBubble from "../components/SpeakerBubble";

const Projects: React.FC = () => {
	return (
		<div className="portal">
			Projects
			<SpeakerBubble />
			<div className="placeholder" />
			<DialogueBox />
		</div>
	);
};

export default Projects;
