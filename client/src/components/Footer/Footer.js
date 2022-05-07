import React from "react";
import "./footer.css";
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="footer-about-section">
                <h6>About</h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </p>
                <span className="social-icon">
                  <p>
                    <RiFacebookBoxFill size={30} />
                  </p>
                  <p>
                    <AiFillTwitterCircle size={30} />
                  </p>
                  <p>
                    <RiInstagramFill size={30} />
                  </p>
                  <p>
                    <AiFillLinkedin size={30} />
                  </p>
                </span>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4">
              <div className="footer-Serivce">
                <h4 style={{ color: "white" }}>Services</h4>

                <div className="footer-item">
                  <li> Product</li>
                  <li>Delivery</li>
                  <li>Ground</li>
                  <li> Product</li>
                  <li>Delivery</li>
                  <li>Ground</li>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4">
              <div className="footer-Serivce">
                <h4 style={{ color: "white" }}>Services</h4>

                <div className="footer-item">
                  <li> Product</li>
                  <li>Delivery</li>
                  <li>Ground</li>
                  <li> Product</li>
                  <li>Delivery</li>
                  <li>Ground</li>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
