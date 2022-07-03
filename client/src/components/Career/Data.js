import React, { useState, useEffect } from "react";
import "./career.css";
import {
  FcOk,
  FcCollapse,
  FcExpand,
  FcNightPortrait,
  FcApproval,
} from "react-icons/fc";

const Data = ({ title, body, index }) => {
  //collapse and show each item features

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (index <= 1) {
      setShow(true);
    }
  }, []);

  return (
    <div
      onClick={() => setShow(!show)}
      className={show ? "post-card-open" : "post-card"}
    >
      <div className={show ? "collapse-option item-title" : "collapse-option"}>
        <h6>{title}</h6>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>

      <div className={show ? "description" : ""}>
        {show && (
          <p>
            {body}-{index}
          </p>
        )}
      </div>
    </div>
  );
};

export default Data;
