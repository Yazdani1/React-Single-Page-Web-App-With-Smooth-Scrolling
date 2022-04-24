import React, { useState } from "react";
import "./navmobile.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <nav className="nav-mobile">
        <p onClick={handleClick}>
          <GiHamburgerMenu size={30} />
        </p>

    
      </nav>
      {open ? <div className="nav-item-list">
          
          </div> : null}
    </React.Fragment>
  );
};

export default NavbarMobile;
