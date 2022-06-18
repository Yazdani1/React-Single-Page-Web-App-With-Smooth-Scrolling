import React, { useState } from "react";
import "./contact.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [servicetype, setServiceType] = useState();

  const sendEmail = () => {
    fetch("/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        servicetype,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setName("");
          setEmail("");
          setMessage("");
          setServiceType("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <div className="container contact-section" id="contact">
        <div className="row">
          <Fade left>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
              <div className="image-class"></div>
            </div>
          </Fade>

          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <Flip left>
                <div className="text-center">
                  <h5 className="text-center">Contact Form</h5>
                </div>
              </Flip>
              <Fade right>
                <form>
                  <div className="contact-form">
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
                  <div className="contact-form">
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
                  <div className="contact-form">
                    <label for="exampleInputEmail1" className="form-label">
                      Service you need
                    </label>
                    <select
                      className="custom-select"
                      value={servicetype}
                      onChange={(e) => setServiceType(e.target.value)}
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                    </select>
                  </div>

                  <div className="contact-form">
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

                  <div onClick={sendEmail} class="submit-button">
                    <p>
                      Send <RiSendPlaneFill size={20} />
                    </p>
                  </div>
                </form>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
