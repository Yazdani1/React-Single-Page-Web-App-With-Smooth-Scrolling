import React from "react";
import "./team.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

import { GrFacebookOption } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";

const Team = () => {
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
      img: "https://images.pexels.com/photos/1808785/pexels-photo-1808785.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 5,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Bochum",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 5,
    },
  ];

  return (
    <React.Fragment>
      <div className="container team-members" id="teammemebrs">
        <div className="team">
          <Flip left>
            <h3>Team Members</h3>
            <span className="line"></span>
          </Flip>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <>
              <Fade bottom>
                <div className="col-lg-4 col-md-6 col-xl-4">
                  <div className="card team-members-item">
                    <img src={item.img} />

                    <div className="team-info">
                      <h6>{item.name}</h6>
                      <p>{item.content}</p>
                    </div>
                    <span className="lineforteammembers"></span>

                    <div className="team-social-icon">
                      <p>
                        <GrFacebookOption size={25} />
                      </p>
                      <p>
                        <ImLinkedin2 size={20} />
                      </p>
                      <p>
                        <AiOutlineTwitter size={20} />
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Team;
