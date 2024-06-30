import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import simpleLogo from "../../img/simpleLogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light sticky-top">
			<div className="container">
				<Link to="/">
					<img src={simpleLogo} className="img-fluid" style={{ height: 100 }} alt="Pet Logo/Home Button" />
				</Link>
				<ul>
					<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown link
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<li><Link className="dropdown-item" to="/login">Login</Link></li>
						<li><Link className="dropdown-item" to="/favorite">Favorites</Link></li>
						<li><Link className="dropdown-item" to="/account_settings">Account Settings</Link></li>
						<li><Link className="dropdown-item" to="/about_us">About us</Link></li>
					</ul>
					</li>
			</ul>
			</div>
		</nav>
	);
};
