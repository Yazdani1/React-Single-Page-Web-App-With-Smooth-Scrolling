import React from "react";
import "./subscription.css";
import { RiSendPlaneFill } from "react-icons/ri";
import Fade from "react-reveal/Fade";

const Subscription = () => {
  return (
      <div className="container-fluid subscription" id="subscription">
        <div className="container ">
          <div className="row">
            <Fade left>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="subscription-title">
                  <h5>News Letter. Subscribe Today</h5>
                </div>
                <div className="subscription-form">
                  <input
                    type="text"
                    maxLength="100"
                    placeholder="Your E-mail"
                  />
                </div>

                <div class="subscribe-button">
                  <p>
                    Subscribe <RiSendPlaneFill size={20} />
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
  );
};

export default Subscription;
