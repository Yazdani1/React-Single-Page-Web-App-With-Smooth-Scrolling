import React from "react";
import "./team.css";
import Fade from "react-reveal/Fade";
import Flip from 'react-reveal/Flip';

const Team = () => {
  return (
    <React.Fragment>
      <div className="container team-members" id="teammemebrs">
        <div className="team">
          <Flip left>
            <h2>Team Members</h2>
            <span className="line"></span>
          </Flip>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Team;
