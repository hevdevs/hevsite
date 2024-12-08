import useTypewriter from "../hooks/useTypewriter";
import DialogueBox from "./DialogueBox";

const SpeakerBubble: React.FC = () => {
	const { nextLine, isTyping, displayText } = useTypewriter([
		"Hi there! My name is Hev. It's nice to meet you.",
		"I am a Software Engineer and Educator, currently based in Manchester.",
		"Fancy a look around...?",
	]);

	return (
		<div className="speaker-bubble">
			<span className="cursor">
				<p>{displayText}</p>
			</span>
			<button disabled={isTyping} onClick={nextLine}>
				Continue
			</button>
			<DialogueBox />
		</div>
	);
};

export default SpeakerBubble;
