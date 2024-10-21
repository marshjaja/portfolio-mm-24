// Landing.jsx
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

export default function Landing() {
	const { darkMode, handleThemeToggle } = useContext(Context);

	return (
		<div className="flex items-center justify-center  h-screen bg-white dark:bg-darkBackground text-black dark:text-white">
			<div className="flex flex-col">
				<div className="space-y-4">
					<h1 className="font-dmserif text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl text-center sm:text-left px-3 py-2">
						Portfolio
					</h1>

					<button className="text-white rounded-md hover:bg-primaryDarkTeal">
						<NavLink
							to="/portfolio-mm-24/home"
							className="font-redhat text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl md:text-nowrap text-black dark:text-white font-bold relative group inline-block"
						>
							<span className="block group-hover:opacity-0 transition-opacity duration-100 ease-in-out">
								Marcia Mijnhijmer
							</span>
							<span className="absolute left-0 top-0 group-hover:opacity-100 opacity-0 transition-opacity duration-100 ease-in-out">
								Marcia Mine-hi-mer
							</span>

							<p className="font-redhat font-light text-xl text-center mt-10">
								Enter
							</p>
						</NavLink>
					</button>
				</div>
			</div>

			<div className="hidden lg:flex flex-col items-center justify-between p-4 fixed bottom-6 right-10">
				<button
					aria-describedby="dark-mode-tooltip"
					onClick={handleThemeToggle}
					className="w-16 p-2 rounded-full text-primary-pink hover:text-opacity-60"
				>
					{darkMode ? "Dark" : "Light"}
				</button>
			</div>
		</div>
	);
}
