import { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	const handleThemeToggle = () => {
		setDarkMode(!darkMode);
		if (!darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<Context.Provider value={{ darkMode, handleThemeToggle }}>
			{children}
		</Context.Provider>
	);
};
