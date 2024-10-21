import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import { PiGithubLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";
// import { FaGithub } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { FaEnvelope } from "react-icons/fa";
// import { AiOutlineLinkedin } from "react-icons/ai";

export default function NavBar() {
	const { darkMode, handleThemeToggle } = useContext(Context);

	const linkClass = ({ isActive }) =>
		isActive
			? " font-redhat text-white dark:text-black bg-primaryTeal dark:bg-darkAccentPink rounded-xl px-3 py-2"
			: "font-redhat text-black dark:text-white hover:opacity-70 rounded-xl px-3 py-2";

	return (
		<>
			<div className="max-w-[1200px] mx-auto">
				<header className="pb-2 pt-[max(env(safe-area-inset-top),1rem)] text-end">
					{/* Mobile/Tablet Logo and Dark Mode Toggle */}
					<div className="lg:hidden flex justify-between items-center p-4 text-black dark:text-white">
						<NavLink to="/portfolio-mm-24/home" className="text-2xl">
							{darkMode ? "DARK LOGO" : "LIGHT LOGO"}
						</NavLink>
						<button
							aria-describedby="dark-mode-tooltip"
							onClick={handleThemeToggle}
							className="w-10 p-2 rounded-full text-primary-pink hover:text-opacity-60"
						>
							{darkMode ? "Light" : "Dark"}
						</button>
					</div>

					{/* Desktop Sidebar Navigation */}
					<nav className="hidden lg:flex flex-col items-center justify-between fixed left-0 top-0 h-full text-black dark:text-white">
						<div className="flex flex-col items-center space-y-20 ">
							<NavLink
								to="/portfolio-mm-24/home"
								className="text-3xl p-4 pt-10 mb-2"
							>
								{darkMode ? "DARK LOGO" : "LIGHT LOGO"}
							</NavLink>

							<div className="flex flex-col items-center space-y-20 font-redhat">
								<NavLink
									to="/portfolio-mm-24/home"
									className={`transform -rotate-90 tracking-wider hover:rotate-0 transition duration-400 ease-in-out`}
								>
									Home
								</NavLink>

								<NavLink
									to="#"
									className={`transform -rotate-90 tracking-wider hover:rotate-0 transition duration-400 ease-in-out`}
								>
									Projects
								</NavLink>
								<NavLink
									to="#"
									className={`transform -rotate-90 tracking-wider hover:rotate-0 transition duration-400 ease-in-out`}
								>
									About
								</NavLink>

								<NavLink
									to="/portfolio-mm-24/contact"
									className={`transform -rotate-90 tracking-wider hover:rotate-0 transition duration-400 ease-in-out`}
								>
									Contact
								</NavLink>
							</div>
						</div>

						<div className="flex flex-col items-center justify-between p-4 fixed bottom-6 right-10">
							{/* Dark Mode Toggle Button */}
							<button
								aria-describedby="dark-mode-tooltip"
								onClick={handleThemeToggle}
								className="w-16 p-2 rounded-full text-primary-pink hover:text-opacity-60"
							>
								{darkMode ? "Light" : "Dark"}
							</button>
						</div>

						<div className="flex flex-col items-center space-y-4 mb-8">
							<PiLinkedinLogo className="tracking-wider space-y-2 text-2xl hover:scale-125 transition duration-400 ease-in-out" />
							<HiOutlineEnvelope className="tracking-wider space-y-2 text-2xl hover:scale-125 transition duration-400 ease-in-out" />
							<PiGithubLogo className="tracking-wider space-y-2 text-2xl hover:scale-125 transition duration-400 ease-in-out" />
						</div>
					</nav>

					{/* Mobile/Tablet Navigation at the bottom */}
					<nav className="lg:hidden fixed bottom-0 left-0 right-0 p-4 shadow-lg">
						<div className="flex justify-around items-center">
							<NavLink to="/portfolio-mm-24/home" className={linkClass}>
								Home
							</NavLink>
							<NavLink to="#">Projects</NavLink>
							<NavLink to="#">About</NavLink>

							<NavLink to="/portfolio-mm-24/contact" className={linkClass}>
								Contact
							</NavLink>
						</div>
					</nav>
				</header>
			</div>
		</>
	);
}
