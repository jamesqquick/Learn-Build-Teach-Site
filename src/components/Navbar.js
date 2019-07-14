import React from "react";
import logo from "../images/lbt-icon.svg";
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
    <StyledNavbar
      className={"nav" + (this.state.navOpen ? " open" : "")}
      id="navbar"
    >
      <div className="nav-content">
        {/* // eslint-disable-next-line */}
          <img
          id="navBrand"
            src={logo}
            alt="Learn Build Teach Logo."
            onClick={this.scrollToTop}
          />
        <div id="hamburgerBtn">
          <FontAwesomeIcon
            icon={this.state.navOpen ? faTimes : faBars}
            size="3x"
            onClick={this.toggleNavbar}
          />
        </div>
        <nav className={this.state.navOpen ? "" : " hidden-sm"}>
          <ul className="nav-items">
            <Link
              activeClass="active"
              className="nav-item"
              to="philosophy"
              spy={true}
              smooth={true}
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
              duration={500}
              onClick={this.closeNavbar}
            >
              Courses
            </Link>

            <Link
              activeClass="active"
              className="nav-item"
              to="recent"
              spy={true}
              smooth={true}
              duration={500}
              onClick={this.closeNavbar}
              offset={-500}

            >
              Recent Videos
            </Link>
            <Link
              activeClass="active"
              className="nav-item"
              to="newsletter"
              spy={true}
              smooth={true}
              offset={-500}
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
      </div>
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
