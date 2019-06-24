import React from "react";

import { Link } from "react-router-dom";

export const NavBar = () => (
  <div>
    <nav>
      <div>
        <Link to="/home">Home</Link>

        <Link to="/molecules">Molecules</Link>
        <Link to="/reaction">Reaction</Link>
      </div>
    </nav>
    <hr />
  </div>
);

// export default NavBar;
