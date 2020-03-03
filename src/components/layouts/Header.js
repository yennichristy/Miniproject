import React, { useState } from "react";
import "../../assets/styles/Header.scss";
import logo from "../../assets/pictures/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { Picture } from "../../assets/pictures/profile.jpeg";
import User from "../pages/User";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log("nana");
  };

  const dispatch = useDispatch();
  //useSelector pengganti connect
  const token = useSelector(state => state.user.token);

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
          {token ? (
            <div>
              <img src={Picture} alt="profile"></img>
            </div>
          ) : (
            <div>
              <button className="header__user__btn" onClick={openModal}>
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
      {/* mengirimkan props close modal ke component user agar dapat digunakan fungsinya di component user */}
      {modalOpen ? <User passingCloseModal={closeModal} /> : false}
    </div>
  );
};

export default Header;
