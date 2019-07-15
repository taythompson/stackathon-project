import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => (
  <div className="navBar">
    <nav>
      <div className="navItems">
        <div className="navText">
          <Link to="/home">Home | </Link>
          <Link to="/mechanism">Mechanism | </Link>
          <Link to="/reaction">Reaction</Link>
        </div>
      </div>
    </nav>
    <div className="header">
      <h1>Chemistry Made Easy!</h1>
    </div>
    <hr />
  </div>
);

// export default NavBar;
