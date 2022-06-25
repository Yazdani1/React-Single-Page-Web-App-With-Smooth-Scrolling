import React from "react";
import "./about.css";
import about from "../../Images/about.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { FcMindMap, FcIcons8Cup, FcSlrBackSide } from "react-icons/fc";

import { BsFillDice5Fill } from "react-icons/bs";
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
          <div className="card about-details">
            <div className="testimonial">
              <Flip left>
                <h5>About</h5>
                <span className="line"></span>
              </Flip>
            </div>
            <Fade right>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>

              <div className="card-design" style={{ marginTop: "10px" }}>
                <div className="about-item-list">
                  <span className="about-details-icons">
                    <p>
                      <FcSlrBackSide size={50} />
                    </p>
                  </span>
                  <div>
                    <h6>Perfect day out</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="card-design" style={{ marginTop: "10px" }}>
                <div className="about-item-list">
                  <span className="about-details-icons">
                    <p>
                      <BsFillDice5Fill size={50} />
                    </p>
                  </span>
                  <div>
                    <h6>Perfect day out</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-design" style={{ marginTop: "10px" }}>
                <div className="about-item-list">
                  <span className="about-details-icons">
                    <p>
                      <FcMindMap size={50} />
                    </p>
                  </span>
                  <div>
                    <h6>Perfect day out</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="card about-list">
                <p>
                
                  <FcApproval size={20} /> It is a long established fact that a
                  reader.
                </p>
              </div>
              <div className="card about-list">
                <p>
              
                  <FcApproval size={20} />
                  Many desktop publishing packages and web page editors.
                </p>
              </div>
              <div className="card about-list">
                <p>
               
                  <FcApproval size={20} />
                  It is a long established fact that a reader.
                </p>
              </div> */}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
