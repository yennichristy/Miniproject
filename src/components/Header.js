import React, { useState } from "react";
import "../assets/styles/Header.scss";
import logo from "../assets/pictures/logo.svg";

const Header = () => {
  const [headerLogin, setHeaderLogin] = useState(true);

  const logIn = e => {
    e.preventDefault();
    setHeaderLogin(false);
  };
  if (headerLogin) {
    return (
      <div className="header">
        <div className="header__brand">
          <div className="header__brand__container">
            <img src={logo} alt="logo" />
            <h4>MilanTV</h4>
          </div>
        </div>
        <div className="header__search">
          <input
            className="header__search__input"
            type="text"
            placeholder="Search Movie"
          ></input>
        </div>
        <div className="header__user">
          <button className="header__user__btn" onClick={"/user"}>
            Sign Up
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="header__brand">
          <div className="header__brand__container">
            <img src={logo} alt="logo" />
            <h4>MilanTV</h4>
          </div>
        </div>
        <div className="header__search">
          <input
            className="header__search__input"
            type="text"
            placeholder="Search Movie"
          ></input>
        </div>
        <div className="header__user">
          <button className="header__user__btn">Sign Up</button>
        </div>
      </div>
    );
  }
};

export default Header;
