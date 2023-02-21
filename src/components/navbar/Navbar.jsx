import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

function Menu() {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
}

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" className="" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggle ? (
            <RiCloseLine
              color="#FFF"
              size={27}
              onClick={() => setToggle(false)}
            />
          ) : (
            <RiMenu3Line
              color="#FFF"
              size={27}
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <div className="gpt3__navbar-menu_container slide-bottom">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
