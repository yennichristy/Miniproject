import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/useraction";
import { profile } from "../../store/actions/useraction";
import "../../assets/styles/ProfileMenu.scss";

const ProfileMenu = ({ signOut, open, user }) => {
  const logOut = () => {
    signOut();
  };
  if (!open) {
    return null;
  } else {
    return (
      <div className="profile">
        <div className="profile__content">
          <p>{user && user.name}</p>
          <p>Profile</p>
          <p>Settings</p>
          <p>Help</p>
          <p onClick={logOut}>Sign Out</p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps, { signOut, profile })(ProfileMenu);
