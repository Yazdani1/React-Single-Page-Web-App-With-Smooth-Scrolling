import React, { useState, useContext } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import ReactSwitch from "react-switch";

const Navbar = ({ toggleTheme, theme }) => {
  //to change navcolro while scroll
  const [navColor, setNavColor] = useState(false);

  const changeNavcolor = () => {
    if (window.scrollY >= 100) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeNavcolor);

  return (
    <nav className={navColor ? "navbar-main navbar-main-bg" : "navbar-main"}>
      <ul>
        <li className="nav-item">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Service
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="career"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Career
          </Link>
        </li>

        <li className="nav-item">
          <Link to="video" spy={true} smooth={true} offset={-100}>
            Video
          </Link>
        </li>

        <li className="nav-item">
          <Link to="teammemebrs" spy={true} smooth={true} offset={-100}>
            Team
          </Link>
        </li>

        <li className="nav-item">
          <Link to="testimonial" spy={true} smooth={true} offset={-100}>
            Testimonial
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
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="subscription"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Subscription
          </Link>
        </li>

        {/* <li className="nav-item">
          <ReactSwitch onChange={toggleTheme} checked={theme==="light"}/>
        </li> */}
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
