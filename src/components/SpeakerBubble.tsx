import useTypewriter from "../hooks/useTypewriter";

const SpeakerBubble = ({ dialogue }: { dialogue: String[] }) => {
	const { nextLine, isTyping, displayText } = useTypewriter(dialogue);

	return (
		<div className="speaker-bubble">
			<p className="jersey-10-regular dialogue">
				{displayText ? displayText : "..."}
			</p>
			<button
				className={"dialogue-next"}
				disabled={isTyping}
				onClick={nextLine}>
				Continue
			</button>
		</div>
	);
};

export default SpeakerBubble;
