import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="footer-quicklink-section">
              <h6>Quick Links</h6>
              <p>Home</p>
              <p>About</p>
              <p>Service</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <h6>More Services</h6>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <h6>Quick Links</h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
