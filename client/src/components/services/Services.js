import React from "react";
import Flip from "react-reveal/Flip";
import "./services.css";
import Zoom from "react-reveal/Zoom";

const Services = () => {
  const serviceData = [
    {
      servicenumber: 1,
      title: "Online Software Service",
      des: "We provide different kind software services",
    },
    {
      servicenumber: 2,
      title: "Online Software Service",
      des: "We provide different kind software services",
    },
    {
      servicenumber: 3,
      title: "Online Software Service",
      des: "We provide different kind software services",
    },
    {
      servicenumber: 4,
      title: "Online Software Service",
      des: "We provide different kind software services",
    },
    {
      servicenumber: 5,
      title: "Online Software Service",
      des: "We provide different kind software services",
    },
    {
      servicenumber: 6,
      title: "Online Software Service",
      des: "We provide different kind software services",
    },
    {
      servicenumber: 7,
      title: "Online Software Service",
      des: "We provide different kind software services",
    },
    {
      servicenumber: 8,
      title: "Online Software Service",
      des: "We provide different kind software services",
    },
  ];

  return (
    <div className="container" id="service">
      <div className="services-title">
        <Flip left>
          <h2>Services</h2>
          <span className="line"></span>
        </Flip>
      </div>
      <div className="row">
        {serviceData.map((item, i) => (
          <>
            <Zoom>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="card services">
                  <span className="service-number">{item.servicenumber}</span>
                  <h6>{item.title}</h6>
                  <p>{item.des}</p>
                  <span className="view-details-button">View Details</span>

                </div>
              </div>
            </Zoom>
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
