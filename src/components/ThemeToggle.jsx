import { useContext } from "react";
import { Context } from "../Context";

export default function ThemeToggle() {
	const { darkMode, setDarkMode } = useContext(Context);

	const handleThemeToggle = () => {
		setDarkMode(!darkMode);
		if (!darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<button onClick={handleThemeToggle}>
			{darkMode ? "Light Mode" : "Dark Mode"}
		</button>
	);
}
