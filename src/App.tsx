import { Routes, Route } from "react-router";
import TopBar from "./components/Nav/TopBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Work from "./pages/Work";

const App = () => {
	return (
		<main>
			<TopBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/work' element={<Work />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</main>
	);
};

export default App;
