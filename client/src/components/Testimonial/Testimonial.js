import React, { useState } from "react";
import "./testimonial.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const Testimonial = () => {
  const data = [
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Jon Doe",
      position: "Full stack software developer",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 1,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Muller",
      position: "UI/UX Designer",
      img: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 2,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Alexander",
      position: "Javascript developer",
      img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 3,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Bochum",
      position: "Node js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 4,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Bochum",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 5,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Bochum",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 6,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Bochum",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 7,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Bochum",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 8,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Bochum",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 9,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Bochum",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 10,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Bochum",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 11,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Bochum",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 12,
    },
  ];

  const [visible, setVisible] = useState(3);
  const [hide, setHide] = useState(3);

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  const showLess = () => {
    setHide((prev) => prev - 3);
  };

  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="testimonial">
        <Flip left>
          <h5>Testimonial</h5>
          <span className="line"></span>
        </Flip>
      </div>
      <div className="row">
        {data.slice(0, visible).map((item, index) => (
          <Fade right>
            <div className="col-lg-4 col-md-6 col-xl-4" key={item.id}>
              <div
                className={
                  index === 0 ? "card content-with-marked" : "card content"
                }
                // style={{ backgroundColor: "brown", color: "white" }}
              >
                <img src={item.img} alt="image" />
                <p>{item.content}</p>
                <p>
                  <span className="name" style={{ color: "orange" }}>
                    {item.name}
                  </span>
                </p>
                <p>{item.position}</p>
              </div>

              {/* { index === 0 ? (
                <div
                  className="card content"
                  style={{ backgroundColor: "brown", color: "white" }}
                >
                  <img src={item.img} alt="image" />
                  <p>{item.content}</p>
                  <p>
                    <span
                      className="name"
                      style={{ color: "white" }}
                    >
                      {item.name}
                    </span>
                  </p>
                  <p>{item.position}</p>
                </div>
              ) : (

                <div className={index ===2? "card content":"card content"}>
                  <img src={item.img} alt="image" />
                  <p>{item.content}</p>
                  <p>
                    <span className="name">{item.name}</span>
                  </p>
                  <p>{item.position}</p>
                </div>
              )} */}
            </div>
          </Fade>
        ))}

        {visible >= data.length ? null : (
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "orange",
              padding: "10px",
              cursor:"pointer"
            }}
            onClick={loadMore}
          >
            Load More
          </div>
        )}
        {/*/////////////////////////////////////////////////////// */}
        {/*                  to show less the data                 */}
        {/*//////////////////////////////////////////////////////// */}

        {/* {visible >= data.length ? (
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              background: "red",
              color: "white",
              padding: "10px",
            }}
            onClick={showLess}
          >
            Show Less
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

export default Testimonial;
