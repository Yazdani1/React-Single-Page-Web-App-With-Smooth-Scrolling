import React from "react";
import "./contact.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container-fluid contact-section" id="contact">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div style={{height:"70vh",background:"red"}}>

              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
              <div className="card event-form-design">
                <Flip left>
                  <div className="text-center">
                    <h5 className="text-center">Contact Form</h5>
                  </div>
                </Flip>
                <form>
                  <div className="event-form">
                    <label for="exampleInputEmail1" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength="100"
                      placeholder="Your name..."
                    />
                  </div>
                  <div className="event-form">
                    <label for="exampleInputEmail1" className="form-label">
                      E-mail
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength="100"
                      placeholder="Your e-mail..."
                    />
                  </div>

                  <div className="event-form">
                    <label for="exampleInputEmail1" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      maxLength="100"
                      rows="4"
                      placeholder="Your message..."
                    />
                  </div>

                  <div class="submit-button">
                    <p>Send</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
};

export default Contact;
