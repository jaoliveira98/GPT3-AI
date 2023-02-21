import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";

function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" className="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
