import React from "react";
import "./video.css";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import { FcMindMap, FcSlrBackSide } from "react-icons/fc";

import { BsFillDice5Fill } from "react-icons/bs";

const Video = () => {
  return (
    <React.Fragment>
      <div className=" container video-section" id="video">
        <div className="video-title">
          <Flip left>
            <h5>Video Demo</h5>
            <span className="line"></span>
          </Flip>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <Fade left>
              <div className="video-description">
                <h3>Overall Work Process</h3>

                <div className="card-design" style={{ marginTop: "10px" }}>
                  <div className="video-item-list">
                    <span className="video-details-icons">
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
                <div className="card-designs" style={{ marginTop: "10px" }}>
                  <div className="video-item-list">
                    <span className="video-details-icons">
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
                <div className="card-designs" style={{ marginTop: "10px" }}>
                  <div className="video-item-list">
                    <span className="video-details-icons">
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

              </div>
            </Fade>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <Fade right>
              <div className="youtube-video">
                <iframe
                  height="420"
                  src="https://www.youtube.com/embed/ABrjdyavqkI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Video;
