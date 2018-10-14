import React from "react";
import { Link } from "gatsby";
import "../sass/navbar.scss";
import logo from "../images/lbt-icon.svg";

const Navbar = ({ siteTitle }) => (
  <nav className="nav">
    <div className="nav-content">
      <div className="nav-brand">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">Featured</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Courses</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Newsletter</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
