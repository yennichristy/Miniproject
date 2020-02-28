import React from "react";
import "../assets/styles/Header.scss";
import logo from "../assets/pictures/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__brand">
        <img src={logo} alt="logo" />
        <h4>MilanTV</h4>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search Movie"></input>
      </div>
      <div className="header__user">
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
