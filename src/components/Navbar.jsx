import React from "react";

function Navbar() {
  return (
    <nav className="navigation">
      <ul>
        <a className="nav-link">The Lodge</a>
        <a className="nav-link">Our Ski Runs</a>
        <a className="nav-link logo">The Summit</a>
        <a className="nav-link">How to Get Here</a>
        <a className="nav-link">Contact</a>
      </ul>
    </nav>
  );
}

export default Navbar;
