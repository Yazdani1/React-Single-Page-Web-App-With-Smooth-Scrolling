import React, { useEffect, useState } from "react";
import "./career.css";
import Data from "./Data";

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
      {data.map((item, index) => (
        <>
          <Data key={item.id} title={item.title} des={item.body} />
        </>
      ))}
    </div>
  );
};

export default Career;
