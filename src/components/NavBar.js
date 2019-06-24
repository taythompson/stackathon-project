import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => (
  <div className="navBar">
    <nav>
      <div className="navItems">
        <Link to="/home">Home</Link>
        <Link to="/mechanism">Mechanism</Link>
        <Link to="/reaction">Reaction</Link>
      </div>
    </nav>
    <hr />
  </div>
);

// export default NavBar;
