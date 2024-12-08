import { Routes, Route } from "react-router";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";

const App = () => {
	return (
		<>
			<TopBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/work" element={<Work />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</>
	);
};

export default App;
