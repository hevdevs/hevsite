import useTypewriter from "../hooks/useTypewriter";
// import React from "react";

const SpeakerBubble = ({ dialogue }: { dialogue: string[] }) => {
	const { nextLine, isTyping, displayText } = useTypewriter(dialogue);

	return (
		<div className="speaker-bubble">
			<p className="jersey-10-regular dialogue">
				{displayText ? displayText : "..."}
			</p>
			{dialogue.length === 1 ? null : (
				<button
					className={"dialogue-next"}
					disabled={isTyping}
					onClick={nextLine}>
					{displayText === dialogue[dialogue.length - 1]
						? "Replay"
						: "Continue"}
				</button>
			)}
		</div>
	);
};

export default SpeakerBubble;
