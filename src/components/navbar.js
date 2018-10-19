import React from "react";
import { Link } from "gatsby";
import "../sass/navbar.scss";
import logo from "../images/lbt-icon.svg";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
  }
  render = () => (
    <nav className="nav">
      <div className="nav-content">
        <div className="flex flex-between flex-align-center full-width">
          <div className="nav-brand">
            <img src={logo} alt="Learn Build Teach Logo." />
          </div>
          <a id="hamburgerBtn">
            <FontAwesomeIcon
              icon={this.state.navOpen ? faTimes : faBars}
              size="2x"
              onClick={this.toggleNavbar}
            />
          </a>
        </div>
        <ul className={"nav-items" + (this.state.navOpen ? "" : " hidden-sm")}>
          <li className="nav-item">
            <a href="#featured">Featured</a>
          </li>
          <li className="nav-item">
            <a href="#courses">Courses</a>
          </li>
          <li className="nav-item">
            <a href="#newsletter">Newsletter</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );

  toggleNavbar = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };
}

export default Navbar;
