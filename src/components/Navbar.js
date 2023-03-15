import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav>
			<ul>
				<li><a href="">Home</a></li>
				<li><a href="">About</a></li>
				<li><a href="">Menu</a></li>
				<li><Link to="/booking">Reservations</Link></li>
				<li><a href="">Order Online</a></li>
				<li><a href="">Login</a></li>
			</ul>
		</nav>
	);
}
