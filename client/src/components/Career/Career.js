import React, { useEffect, useState } from "react";
import "./career.css";
import Data from "./Data";
import Flip from "react-reveal/Flip";

const Career = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);

  const loadData = () => {
    fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setData(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container career" id="career">
      <div className="career-title">
        <Flip left>
          <h2>Career</h2>
          <span className="line"></span>
        </Flip>
      </div>

      <div className="career-main-content">
        {data.map((item, index) => (
          <>
            <Data key={item.id} title={item.title} des={item.body} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Career;
