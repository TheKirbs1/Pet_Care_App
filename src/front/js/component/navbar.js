import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import simpleLogo from "../../img/simpleLogo.png";

import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="nav-container container-fluid">
				<Link to="/" id="home-logo">
					<div className="logo-div">
						<img src={simpleLogo} className="logo-img img-fluid" style={{ maxHeight: 80 }} alt="Pet Logo/Home Button" />
					</div>
				</Link>
				<div className="join-now ms-auto">
					{!store.token ?
						<Link to="/signup">
							<button className="btn btn-primary">Join Now!</button>
						</Link>
						:
						<div></div>
					}
				</div>
				<div className="menu">
					<ul>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
									<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
									<path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
								</svg>
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li>
									{!store.token ? (
										<Link className="dropdown-item" to="/login">
											Login
										</Link>
									) : (
										<Link className="dropdown-item" to="/private">
											Profile
										</Link>
									)}
								</li>
								<li><Link className="dropdown-item" to="/favorite">Favorites</Link></li>
								<li><Link className="dropdown-item" to="/account_settings">Account Settings</Link></li>
								<li><Link className="dropdown-item" to="/about_us">About us</Link></li>
								<li>
									{!store.token ?
										<div></div>
										:
										<button className="dropdown-item logout-btn" onClick={() => actions.logout()}>
											Log out
										</button>
									}
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};