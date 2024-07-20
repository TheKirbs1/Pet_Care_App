import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer mt-auto py-3 px-3 text-center text-body-secondary mt-2">
		
		<div className="hstack justify-content-between text-secondary">
			<div className="d-flex align-items-center text-body-secondary">
			<b className="text-dark">STAY IN THE KNOW</b>
				<a href="/about_us" className="text-primary mx-2"><i className="fa-solid fa-address-card style=color: #000000;"></i></a>
				<a href="mailto:pal4Pets@doglover.com?subject=Hello&body=This is the email body." className="text-primary"><i className="fa-solid fa-envelope style=color: #000000;"></i></a>
			</div>
			<div className="text-body-secondary">
				<div className="text-body-secondary"><h6>@ 2024 ERROR 500 <i className="fa-regular fa-copyright text-body-secondary"> </i></h6></div>
			</div>
		</div>
	</footer>

);
