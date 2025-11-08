import SpeakerBubble from "../components/SpeakerBubble";
import hevHi from "../assets/hev_sprite_1.gif";
import { Link } from "react-router";


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
			<div className="trio">
				<img src={hevHi} className="char" />

				<div className="info jersey-10-regular" id="stats">
					<h2>Skills</h2>
					<ul>
						<li>CICD</li>
						<li>TypeScript</li>
					</ul>
				</div>
				<div className="info jersey-10-regular" id="stats">
					<h2>Certifications</h2>
					<Link
						className="cr-link"
						to="https://www.credly.com/badges/ed7768f1-99ae-446e-b6ec-873474a660ab/public_url.com">
						<img
							className="cr-badges"
							src="https://images.credly.com/size/680x680/images/4b5a8636-c554-482d-bbdc-7925fb3624c3/blob"
							alt="LFS158: Introduction to Kubernetes badge image. Learning. Foundational level. Issued by The Linux Foundation"
						/>
					</Link>
					<Link
						className="cr-link"
						to="https://www.credly.com/badges/6cd7ab37-7b85-48b6-8c14-7328e9ca780e/public_url">
						<img
							className="cr-badges"
							alt="LFS151: Introduction to Cloud Infrastructure Technologies badge. Foundational level. Issued by the Linux Foundation."
							src="https://images.credly.com/size/680x680/images/c52b0e6e-e171-41c2-a459-b8e618ea1e72/blob"
						/>
					</Link>
					<Link
						className="cr-link"
						to="https://www.credly.com/badges/e5e43df9-b4c5-463e-b783-f48126131f25/public_url.com">
						<img
							className="cr-badges"
							alt="LFEL1004: Authentication & Authorization for Web/API badge image. Foundational level. Issued by The Linux Foundation."
							src="https://images.credly.com/size/680x680/images/e4780fc4-274f-4751-b632-72c4df0ceb22/blob"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
