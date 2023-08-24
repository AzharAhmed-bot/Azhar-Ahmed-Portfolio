import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar bg-black">
      {/* <div className="Navbar__logo">Your Logo</div> */}
      <ul className="Navbar__links">
        <li>
          <NavLink className="Navbar__link font-extrabold font-serif " to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="Navbar__link font-extrabold font-serif" to="/skills" smooth={true} duration={500}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink className="Navbar__link font-extrabold font-serif" to="projects" smooth={true} duration={500}>
            Project
          </NavLink>
        </li>
        <li>
          <NavLink className="Navbar__link font-extrabold font-serif " to="/contact" smooth={true} duration={500}>
            Contact
          </NavLink>
        </li>
    
      </ul>
    </nav>
  );
}
