import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/useraction";
import "../../assets/styles/ProfileMenu.scss";
import MainPage from "../pages/MainPage";

const ProfileMenu = ({ signOut, open }) => {
  const logOut = () => {
    signOut();
  };
  if (!open) {
    return null;
  } else {
    return (
      <div className="profile">
        <div className="profile__content">
          <p>Yenni</p>
          <p>Profile</p>
          <p>Settings</p>
          <p>Help</p>
          <p onClick={logOut}>Sign Out</p>
        </div>
      </div>
    );
  }
};

export default connect(null, { signOut })(ProfileMenu);
