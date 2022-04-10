import React, { useEffect, useState } from "react";
import "./career.css";
import Data from "./Data";
import Flip from "react-reveal/Flip";
import Pagination from "../pagination/Pagination";
import Fade from "react-reveal/Fade";
import { SyncOutlined } from "@ant-design/icons";

const Career = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);

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
          <h2>Career</h2>
          <span className="line"></span>
        </Flip>
      </div>

      <Fade left>
        <div className="career-main-content">
          {currrentPagedata.map((item, index) => (
            <>
              <Data key={item.id} title={item.title} des={item.body} />
            </>
          ))}
        </div>
      </Fade>
      <Fade right>
        <div className="card pagination-details">
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </Fade>
    </div>
  );
};

export default Career;
