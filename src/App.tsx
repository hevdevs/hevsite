import Bio from "./pages/Bio";
import MenuBar from "./components/MenuBar";
import { Routes, Route } from "react-router";
import Projects from "./pages/Projects";
import Work from "./pages/Work";

const App = () => {
	return (
		<>
			<MenuBar />
			<Routes>
				<Route path="/" element={<Bio />} />
				<Route path="/work" element={<Work />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</>
	);
};

export default App;
