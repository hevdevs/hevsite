import React from "react";
import DialogueBox from "../components/DialogueBox";
import SpeakerBubble from "../components/SpeakerBubble";

const Bio: React.FC = () => {
	return (
		<div className="portal">
			<SpeakerBubble />
			<div className="placeholder" />
			<DialogueBox />
		</div>
	);
};

export default Bio;
