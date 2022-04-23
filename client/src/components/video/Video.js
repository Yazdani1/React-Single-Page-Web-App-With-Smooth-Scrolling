import React from "react";
import "./video.css";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const Video = () => {
  return (
    <React.Fragment>
      <div className="card container video-section" id="video">
        <div className="video-title">
          <Flip left>
            <h2>Video Demo</h2>
            <span className="line"></span>
          </Flip>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <Fade left>
              <div className="card video-description">
                <h3>Overall Work Process</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
                <span className="video-demo-button">Book Your Demo</span>
              </div>
            </Fade>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <Fade right>
              <div className="youtube-video">
                <iframe
                  width="560"
                  height="315"
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
