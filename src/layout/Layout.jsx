import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/NavBar";
import ThemeToggle from "../components/ThemeToggle";

export default function Layout() {
	const location = useLocation();

	//  NOTE TO future self
	// This checks if the current route is the landing page
	// and only show the Navbar if it's NOT the landing page
	const isLandingPage = location.pathname === "/portfolio-mm-24/";

	return (
		<>
			<div className="bg-white dark:bg-darkBackground">
				<ThemeToggle />
				{!isLandingPage && <Navbar />}
				<main className="mx-auto w-full sm:max-w-screen-sm lg:max-w-2xl xl:max-w-5xl min-h-screen flex flex-col rounded-xl pt-20 pb-[100px]">
					<Outlet />
				</main>
			</div>
		</>
	);
}
