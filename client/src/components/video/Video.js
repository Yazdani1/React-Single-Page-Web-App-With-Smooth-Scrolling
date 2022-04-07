import React from "react";
import "./video.css";

const Video = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="services-title">
          <Flip left>
            <h2>Services</h2>
            <span className="line"></span>
          </Flip>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="card services">
                  <h6>Video Demo</h6>
                  <p>Video Description</p>
                  <span className="view-details-button">View Details</span>

                </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="youtube-video">
                  <iframe src=""></iframe>
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Video;
