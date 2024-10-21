import { useContext } from "react";
import { Context } from "../Context";

export default function ThemeToggle() {
	const { darkMode, handleThemeToggle } = useContext(Context);

	return (
		<div className="hidden lg:flex flex-col items-center justify-between p-4 fixed bottom-6 right-10">
			<button
				aria-describedby="dark-mode-tooltip"
				onClick={handleThemeToggle}
				className="w-16 p-2 rounded-full text-primary-pink hover:text-opacity-60"
			>
				{darkMode ? "Light" : "Dark"}
			</button>
		</div>
	);
}
