import React from "react";
import "../../styles/footer.css";

export const Footer = () => (
  <footer className="footer py-3 px-3 text-center text-body-secondary">
    <div className="hstack justify-content-between text-secondary">
      <div className="d-flex align-items-center text-body-secondary">
        <b className="text-dark">STAY IN THE KNOW</b>
        <a href="/about_us" className="text-primary mx-2">
          <span className="icon-circle">
            <i className="fa-solid fa-address-card"></i>
          </span>
        </a>
        <a href="mailto:pal4Pets@doglover.com?subject=Hello&body=This is the email body." className="text-primary">
          <span className="icon-circle">
            <i className="fa-solid fa-envelope"></i>
          </span>
        </a>
        <a href="/terms_of_use" className="text-primary mx-1">
          <span className="icon-circle">
            <i className="fa-solid fa-gavel"></i>
          </span>
        </a>
        <a href="/privacy_policy" className="text-primary mx-1">
          <span className="icon-circle">
            <i className="fa-solid fa-scroll"></i>
          </span>
        </a>
      </div>
      <div className="text-body-secondary">
        <div className="text-body-secondary">
          <h6 className="text-dark">@ 2024 ERROR 500 <i className="fa-regular fa-copyright text-body-dark"></i></h6>
        </div>
      </div>
    </div>
  </footer>
);

