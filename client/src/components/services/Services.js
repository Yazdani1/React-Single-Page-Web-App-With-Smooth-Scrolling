import React, from "react";
import Flip from "react-reveal/Flip";
import "./services.css";
import Zoom from "react-reveal/Zoom";

import { FcOk } from "react-icons/fc";
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

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
  ];


  return (
    <div className="container service-section" id="service">
      <div className="services-title">
        <Flip left>
          <h5>Services</h5>
          <span className="line"></span>
        </Flip>
      </div>
      <div className="row">
        {serviceData.map((item, i) => (
          <>
            <Zoom>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="card services">
                  <span
                    className="service-number"
                    style={{ backgroundColor: colors[i] }}
                  >
                    <p> {item.servicenumber}</p>
                  </span>
                  <div className="list-of-service">
                    <p>
                      <FcOk size={20} style={{ margin: "5px" }} />
                      {item.title}
                    </p>
                    <span className="service-under-line"></span>

                    <p>
                      <FcOk size={20} style={{ margin: "5px" }} />
                      {item.title}
                    </p>
                    <span className="service-under-line"></span>
                    <p>
                      <FcOk size={20} style={{ margin: "5px" }} />
                      {item.title}
                    </p>
                    <span className="service-under-line"></span>
                    <p>
                      <FcOk size={20} style={{ margin: "5px" }} />
                      {item.title}
                    </p>
                  </div>

                  {/* <span className="view-details-button">View Details</span> */}
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
