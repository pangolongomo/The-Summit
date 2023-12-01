import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <ul>
        <NavLink className="nav-link" to="/lodge">The Lodge</NavLink>
        <NavLink className="nav-link" to="/skiruns">Our Ski Runs</NavLink>
        <NavLink className="nav-link logo" to="/">The Summit</NavLink>
        <NavLink className="nav-link" to="/gethere">How to Get Here</NavLink>
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
