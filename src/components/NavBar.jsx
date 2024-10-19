import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			<NavLink to="/portfolio-mm-24/home" activeClassName="active">
				Home
			</NavLink>

			<NavLink to="/portfolio-mm-24/contact" activeClassName="active">
				Contact
			</NavLink>
		</nav>
	);
}
