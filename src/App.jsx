import "./App.css";
import "./index.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default App;
