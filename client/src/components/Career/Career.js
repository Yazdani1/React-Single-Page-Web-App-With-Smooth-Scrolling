import React, { useEffect, useState } from "react";
import "./career.css";
import Data from "./Data";
import Flip from "react-reveal/Flip";
import Pagination from "../pagination/Pagination";
import Fade from "react-reveal/Fade";
import { SyncOutlined } from "@ant-design/icons";
import {
  FcOk,
  FcCollapse,
  FcExpand,
  FcNightPortrait,
  FcApproval,
} from "react-icons/fc";

const Career = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);

  //to add one option collapse at the time
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  //end to add one option collapse at the time

  //loading
  const [loading, setLoading] = useState(true);

  //for pagination

  //for pagination
  const PER_PAGE = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageClick = ({ selected: slectedPage }) => {
    setCurrentPage(slectedPage);
  };
  const offSet = currentPage * PER_PAGE;
  const currrentPagedata = data.slice(offSet, offSet + PER_PAGE);
  //total page count
  const pageCount = Math.ceil(data.length / PER_PAGE);
  //end page paginaion

  const loadData = () => {
    fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setData(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="text-center my-25">
        <h1>
          <SyncOutlined spin />
        </h1>
      </div>
    );
  }

  return (
    <div className="container career" id="career">
      <div className="career-title">
        <Flip left>
          <h5>Career</h5>
          <span className="line"></span>
        </Flip>
      </div>

      <div className="career-main-content">
        {currrentPagedata.map((item, index) => (
          <>
            <Fade left>
              <Data key={item.id} {...item} index={index}/>
            </Fade>
            {/* <Data key={item.id} title={item.title} des={item.body} /> */}
            {/* to open only one option at the time of collapse */}
            {/* <div className="card post-card">
                <div
                  onClick={() => toggle(i)}
                  className={
                    selected == i
                      ? "collapse-option item-title"
                      : "collapse-option"
                  }
                >
                  <h6>{item.title}</h6>
                  <p>
                    {selected == i ? (
                      <FcCollapse size={20} />
                    ) : (
                      <FcExpand size={20} />
                    )}
                  </p>
                </div>
                <div className={selected == i ? "description" : ""}>
                  {selected == i && <p>{item.body}</p>}
                </div>
              </div> */}
          </>
        ))}
      </div>

      <Fade right>
        <div className="pagination-details">
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </Fade>
      
    </div>
  );
};

export default Career;
