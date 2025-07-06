import SpeakerBubble from "../components/SpeakerBubble";
import hevHi from "../assets/hev_sprite_1.gif";

const Home = () => {
	return (
		<div className="portal">
			<SpeakerBubble
				dialogue={[
					"Hi there! My name is Hev.",
					"It's nice to meet you.",
					"I am a Senior Software Engineer from Manchester.",
					"Take a look around...",
				]}
			/>
			<div className="content-display">
				<img src={hevHi} className="sprite" />
				<div className="aside jersey-10-regular" id="stats">
					<h2>Stats</h2>
				</div>
			</div>
		</div>
	);
};

export default Home;
