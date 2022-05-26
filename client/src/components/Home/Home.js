import React, { useState } from "react";
import "./home.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillSetting,
} from "react-icons/ai";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const Home = ({ toggleTheme, theme }) => {
  const [show, setShow] = useState(false);


  const showThemeOptions = () => {
    setShow(!show);
  };

  return (
    <div className="container-fluid home" id="home">

      
      <div className="theme-chang " onClick={() => toggleTheme()}>
        {theme === "light" ? (
          <p className="theme-iconss">
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}

        {/* <p className="theme-icon">
          <AiFillSetting size={40} />
        </p> */}
        {/* <p style={{ top: 0 }}>
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </p> */}
      </div>

      {/* <div className="theme-chang">
        <p
          onClick={() => {
            toggleTheme();
            showThemeOptions();
          }}
          className={theme}
        >
          <AiFillSetting size={40} />
        </p>
        <div style={{ width: "150px" }}>
          {show ? (
            <div className="card">
              <p>Light Theme</p>
              <p>Dark Theme</p>
            </div>
          ) : null}
        </div>
      </div> */}

      <Fade left>
        <div className="container home-content">
          <h1>24 Hours Service Center</h1>

          <h4>Worlds Leading Company</h4>
          <h4>Doesn't come with instructions</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <span className="view-details-home-button">View Details</span>
        </div>
      </Fade>

     
    </div>
  );
};

export default Home;
