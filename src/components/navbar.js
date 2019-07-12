import React from "react";
import logo from "../images/logo360-white.svg";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {StyledNavbar } from "../elements/Navbar";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
  }

  render = () => (
    <StyledNavbar className={"nav" + (this.state.navOpen ? " open" : "")} id="navbar">
      <nav className="nav-content">
            <a href="#" id="navBrand">
              <img
                src={logo}
                alt="Learn Build Teach Logo."
                onClick={this.scrollToTop}
              />
            </a>
          <div id="hamburgerBtn">
            <FontAwesomeIcon
              icon={this.state.navOpen ? faTimes : faBars}
              size="3x"
              onClick={this.toggleNavbar}
            />
          </div>
          <nav>

          </nav>
        <ul className={"nav-items" + (this.state.navOpen ? "" : " hidden-sm")}>
            <Link
              activeClass="active"
              className="nav-item"
              to="philosophy"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={this.closeNavbar}
            >
              Philosophy
            </Link>
            <Link
              activeClass="active"
              className="nav-item"
              to="courses"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={this.closeNavbar}
            >
              Courses
            </Link>

            <Link
              activeClass="active"
              className="nav-item"
              to="recentVideos"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={this.closeNavbar}
            >
              Recent Videos
            </Link>
            <Link
              activeClass="active"
              className="nav-item"
              to="newsletter"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={this.closeNavbar}
            >
              Newsletter
            </Link>

          {/* <li className="nav-item">
            <a href="#contact">Contact</a>
          </li> */}
        </ul>
      </nav>
    </StyledNavbar>
  );

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToBottom = () => {
    console.log("scroll to bottom");
    scroll.scrollToBottom();
  };
  closeNavbar = () => {
    this.setState({ navOpen: false });
  };

  toggleNavbar = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };
}

export default Navbar;
