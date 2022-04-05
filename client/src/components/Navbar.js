import React from "react";
import "./navbar.css";
import {Link} from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar-main">
      <ul>
        <li className="nav-item">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="career" spy={true} smooth={true} offset={-100} duration={100}>
            Career
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="feedback"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Feedback
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="testimonial"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            Testimonial
          </Link>
        </li>
      </ul>

      {/* Normal way to do single page using id of the main container */}

      {/* <ul>
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#career">Career</a></li>
            <li className="nav-item"><a href="#feedback">Feedback</a></li>
            <li className="nav-item"><a href="#testimonial">Testimonial</a></li>
          </ul> */}
    </nav>
  );
};

export default Navbar;
