import React, { useState } from "react";
import "./home.css";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillSetting,
} from "react-icons/ai";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import Typewriter from "typewriter-effect";

// "fs": "^0.0.1-security",

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

        <Fade left>
          <div className="container home-content">
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Web Development",
                    "Mobile App Development",
                    "UI/UX Design",
                    "Product Marketing",
                    "Digital Marketing",
                    "Customer Service",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 10,
                }}
              />
            </h1>

            {/* <Typical
            steps={[
              "Web Development",
              4000,
              "Mobile App Development",
              3000,
              "UI/UX Design",
              3000,
              "Product Marketing",
              3000,
              "Digital Marketing",
              3000,
              "Customer Service",
              3000,
            ]}
            loop={Infinity}
            wrapper="h1"
          /> */}
            {/* <h4>Worlds Leading Company</h4> */}
            {/* <h6>Doesn't come with instructions</h6> */}
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <span className="view-details-home-button">View Details</span>
          </div>
        </Fade>

      </div>
   
  );
};

export default Home;
