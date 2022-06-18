import React, { useState } from "react";
import "./contact.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <React.Fragment>
      <div className="container contact-section" id="contact">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
              <div className="image-class">
               
              </div>
   
          </div>

          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            
            <div className="event-form-design">
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    maxLength="100"
                    placeholder="Your e-mail..."
                  />
                </div>
                <div className="event-form">
                  <label for="exampleInputEmail1" className="form-label">
                    Job types
                  </label>
                  <select
                    className="custom-select"
                 
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="For Students">For Students</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>

                <div className="event-form">
                  <label for="exampleInputEmail1" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-control"
                    maxLength="100"
                    rows="4"
                    placeholder="Your message..."
                  />
                </div>

                <div class="submit-button">
                  <p>
                    Send <RiSendPlaneFill size={20} />
                  </p>
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
