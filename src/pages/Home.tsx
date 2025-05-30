import SpeakerBubble from "../components/SpeakerBubble";
import hevHi from "../assets/hev_sprite_1.gif"

const Home = () => {
	return (
		<div className="portal">
			<SpeakerBubble dialogue={[
		"Hi there! My name is Hev. It's nice to meet you.",
		"I am a Senior Software Engineer based in Manchester.",
		"Fancy a look around...?",
	]} />
			<img src={hevHi} className="sprite"/>
		</div>
	);
};

export default Home;
