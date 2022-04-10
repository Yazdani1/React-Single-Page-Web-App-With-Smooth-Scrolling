import React, { useState } from "react";
import "./career.css";
import {
  FcOk,
  FcCollapse,
  FcExpand,
  FcNightPortrait,
  FcApproval,
} from "react-icons/fc";

const Data = ({ title, des }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="card post-card">
      <div onClick={() => setShow(!show)} className="collapse-option">
        <h6>{title}</h6>

        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>
      <div className="description">{show && <p>{des}</p>}</div>
    </div>
  );
};

export default Data;
