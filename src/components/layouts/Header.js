import React, { useState } from "react";
import "../../assets/styles/Header.scss";
import logo from "../../assets/pictures/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { profile } from "../../store/actions/useraction";
import User from "../pages/User";
import ProfileMenu from "../../components/layouts/ProfileMenu";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileOpen, setProfile] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log("nana");
  };

  const openProfile = () => {
    setProfile(!profileOpen);
  };

  const dispatch = useDispatch();

  //useSelector pengganti connect
  const token = useSelector(state => state.user.token);
  const user = useSelector(state => state.user.user);

  React.useEffect(() => {
    dispatch(profile());
  }, []);

  return (
    <div className="header">
      <div className="header__brand">
        <div className="header__brand__container">
          <img src={logo} alt="logo" />
          <h4>CinemaTV</h4>
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
            <div className="header__user">
              <img
                src={user && user.image}
                alt={user && user.name}
                onClick={openProfile}
              />
              <ProfileMenu open={profileOpen} />
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
