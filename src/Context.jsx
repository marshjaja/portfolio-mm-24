import { useState, createContext, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "dark") {
			setDarkMode(true);
			document.documentElement.classList.add("dark");
		} else {
			setDarkMode(false);
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const handleThemeToggle = () => {
		const newDarkMode = !darkMode;
		setDarkMode(newDarkMode);

		if (newDarkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	return (
		<Context.Provider value={{ darkMode, handleThemeToggle }}>
			{children}
		</Context.Provider>
	);
};
