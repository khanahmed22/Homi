import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <div className="homi-logo">
          <svg
            id="logo-35"
            width="50"
            height="39"
            viewBox="0 0 50 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
              className="ccompli1"
              fill="#007AFF"
            ></path>{" "}
            <path
              d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
              className="ccustom"
              fill="#312ECB"
            ></path>{" "}
          </svg>

          <div className="homi-text">&nbsp; Homi</div>
        </div>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : "close"}>
        <li>
          <NavLink onClick={() => setMenuOpen(false)} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(false)} to="/properties/houses">
            Properties
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(false)} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(false)} to="/contact">
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink onClick={() => setMenuOpen(false)} to="/signIn">
            <button className="signIn-BTn"> Sign In</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
