import React from "react";
import "./about.css";
import about from "../../Images/about.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <Fade bottom big>
          <div className="about-image">
            <img src={about} height="400px" width="400px" alt="about image" />
          </div>
          </Fade>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="testimonial">
              <Flip left>
                <h2>About</h2>
                <span className="line"></span>
              </Flip>
            </div>
            <Fade right>
           
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
               
            </Fade>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
