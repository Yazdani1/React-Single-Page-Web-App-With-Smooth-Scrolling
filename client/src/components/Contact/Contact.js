import React from "react";
import "./contact.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container-fluid contact-section" id="contact">
        <div className="container">
          {/* <div className="contact-form-title">
            <Flip left>
              <h6>Contact Form</h6>
              <span className="line"></span>
            </Flip>
          </div> */}

          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="card event-form-design">
                <Flip left>
                  <div className="text-center">
                    <h5 className="text-center">Contact Form</h5>
                  </div>
                </Flip>
                <form>
                  <div className="event-form">
                    <label for="exampleInputEmail1" className="form-label">
                      Job Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength="100"
                    />
                  </div>

                  <div className="event-form">
                    <label for="exampleInputEmail1" className="form-label">
                      Job types
                    </label>
                    <select className="custom-select">
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="For Students">For Students</option>
                      <option value="Contract">Contract</option>
                    </select>
                  </div>

                  {/* job address */}

                  <div className="even-start-end-date">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="event-form">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength="100"
                          />
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="event-form">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Office Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength="100"
                          />
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="event-form">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group justify-content-center align-items-center">
                    <button
                      type="submit"
                      name="btnSubmit"
                      className="create-event-button"
                    >
                      Publish Job
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
