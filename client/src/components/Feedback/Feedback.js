import React from "react";
import "./feedback.css";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Feedback = () => {
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
      id: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    adaptiveHeight: true,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container feedbacksection" id="feedback">
      <div className="feedback-title">
        <Flip left>
          <h2>Feedback</h2>
          <span className="line"></span>
        </Flip>
      </div>

      <div className="feedback-slide">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Fade right>
              <div className="col-lg-12 col-md-12 col-xl-12" key={item.id}>
                <div className="card content-slide">
                  <img src={item.img} alt="image"  className="center-image" />
                  <p>{item.content}</p>
                  <p>
                    <span className="name">{item.name}</span>
                  </p>
                  <p>{item.position}</p>
                </div>
              </div>
            </Fade>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
