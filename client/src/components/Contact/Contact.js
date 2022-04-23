import React from "react";
import "./contact.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container contact-section" id="contact">
        <div className="team">
          <Flip left>
            <h3>Contact Form</h3>
            <span className="line"></span>
          </Flip>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
