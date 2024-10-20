import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

export default function NavBar() {
	const { darkMode, handleThemeToggle } = useContext(Context);

	const linkClass = ({ isActive }) =>
		isActive
			? "text-white bg-primaryTeal dark:bg-darkAccentPink rounded-xl px-3 py-2 p-4"
			: "text-black dark:text-dark hover:opacity-70 rounded-xl px-3 py-2 p-4";

	return (
		<>
			<div className="max-w-[1200px] mx-auto">
				<header className=" px-8 md:px-8 lg:px-20 pb-2 pt-[max(env(safe-area-inset-top),1rem)] text-center">
					{/* Desktop top nav */}
					<nav className="hidden lg:flex items-center justify-between p-4">
						<div className="w-full lg:w-auto text-center lg:text-left">
							<NavLink to="/portfolio-mm-24/home" className="Nav-link">
								{darkMode ? "DARK LOGO" : "LIGHT LOGO"}
							</NavLink>
						</div>
						<div className="flex items-center space-x-4">
							<NavLink to="/portfolio-mm-24/home" className={linkClass}>
								<button className="text-base">Home</button>
							</NavLink>

							<NavLink to="/portfolio-mm-24/contact" className={linkClass}>
								<button className="text-base">Contact</button>
							</NavLink>

							<button
								aria-describedby="dark-mode-tooltip"
								onClick={handleThemeToggle}
								className="fixed w-16 bottom-16 right-16 p-2 rounded-full text-primary-pink hover:text-primary-pink hover:text-opacity-60 font-semibold"
							>
								{darkMode ? "Dark" : "Light"}
							</button>
						</div>
					</nav>

					{/* Mobile/Tablet bottom nav */}
					<nav className="flex lg:hidden items-center justify-between p-4">
						<NavLink to="/portfolio-mm-24/home" className="Nav-link">
							{darkMode ? "DARK LOGO" : "LIGHT LOGO"}
						</NavLink>
						<div className="flex items-center space-x-2">
							<button
								aria-describedby="dark-mode-tooltip-mobile"
								onClick={handleThemeToggle}
								className="p-2 text-primary-pink hover:text-opacity-60 rounded-full font-semibold"
							>
								{darkMode ? "Dark" : "Light"}
							</button>
						</div>
					</nav>
				</header>

				<nav className="block z-10 lg:hidden fixed bottom-0 left-0 right-0 shadow-lg p-4 ">
					<div className="flex justify-around items-center">
						<NavLink to="/portfolio-mm-24/home" className={linkClass}>
							<button className="">Home</button>
						</NavLink>
						<NavLink to="/portfolio-mm-24/contact" className={linkClass}>
							<button className="">Contact</button>
						</NavLink>
					</div>
				</nav>
			</div>
		</>
	);
}
