import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNav = () => {
    if (window.screenY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);

    return() =>window.removeEventListener("scroll",transitionNav);
  }, []);

  return (
    <div className="nav  nav_black   ">
      <div className="nav_content">
        <img
          className="nav_logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
<Link to={"/"}><button className="out-btn">Sign out</button></Link>
        
      </div>
    </div>
  );
}

export default Nav;
