import React, { useState } from "react";
import "./navmobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import ReactSwitch from "react-switch";

const NavbarMobile = ({ toggleTheme, theme }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="responsivenav-for-frontclient">
      <div className="container-fluid mobile-view-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleClick} />
        </p>
     
      </div>

      {open ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
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
                Demo Video
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
                to="subscription"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Subscription
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
              <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobile;
