import React, { useState } from "react";
import "../../assets/styles/Header.scss";
import logo from "../../assets/pictures/logo.svg";
import { connect } from "react-redux";
import { Picture } from "../../assets/pictures/profile.jpeg";

const Header = ({ isAuthenticate }) => {
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
          <div className="header__user__btn">
            {isAuthenticate ? (
              <div>
                <img src={Picture} alt="profile"></img>
              </div>
            ) : (
              <div>
                <button className="header__user__btn" onClick={"/user"}>
                  Sign Up
                </button>
              </div>
            )}
          </div>
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
          <button className="header__user__btn" onClick={logIn}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isAuthenticate: state.user.isAuthenticate
  };
};

export default connect(mapStateToProps)(Header);
