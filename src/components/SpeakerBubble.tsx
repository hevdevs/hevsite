import useTypewriter from "../hooks/useTypewriter";

const SpeakerBubble  = ({dialogue}: {dialogue: String[]}) => {
	const { nextLine, isTyping, displayText } = useTypewriter(dialogue);

	return (
		<div>
		<div className="speaker-bubble">
			<span className="cursor">
				<p>{displayText}</p>
			</span>
			</div>
			<button disabled={isTyping} onClick={nextLine}>
				Continue
			</button></div>
	);
};

export default SpeakerBubble;
