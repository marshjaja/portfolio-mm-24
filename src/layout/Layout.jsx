import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import ThemeToggle from "../components/ThemeToggle";

export default function Layout() {
	return (
		<>
			<div className="">
				<ThemeToggle />
				<Navbar />
				<main className="mx-auto px-8 md:px-8 lg:px-20 w-full max-w-screen-sm min-h-screen flex flex-col rounded-xl pt-20 pb-[100px]">
					<Outlet />
				</main>
			</div>
		</>
	);
}
