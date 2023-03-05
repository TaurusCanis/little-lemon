import LittleLemonLogo from "../assets/images/LittleLemonHeader_small";
import Navbar from "./Navbar";

export default function Footer() {
	return (
		<footer>
			<img src={LittleLemonLogo} />
			<h3>Site Map</h3>
			<Navbar />
			<h3>Contact</h3>
			<div>
				<ul>
					<li>123 Fake Street</li>
					<li>Chicago, IL</li>
					<li>555-555-5555</li>
					<li>little@lemon.com</li>
				</ul>
			</div>
			<h3>Social Media</h3>
			<div>
				<ul>
					<li><a href="">Facebook</a></li>
					<li><a href="">Twitter</a></li>
					<li><a href="">Instagram</a></li>
				</ul>
			</div>
		</footer>
	);
}
