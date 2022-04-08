import React, { useEffect, useState } from "react";
import "./career.css";

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

  useEffect(() => {}, []);

  return (
    <div className="career" id="career">
      <h2>Career Page</h2>
    </div>
  );
};

export default Career;
