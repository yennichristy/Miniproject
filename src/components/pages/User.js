import React, { useState } from "react";
import "../../assets/styles/User.scss";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/useraction";

const User = ({ signUp }) => {
  const [isLogin, setIslogin] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });

  const change = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const submitSignUp = e => {
    e.preventDefault();
    const newUser = {
      name: userData.name,
      email: userData.email,
      password: userData.password
    };
    console.log("submit", newUser);
    signUp(newUser);
  };

  const changeSignUp = e => {
    e.preventDefault();
    setIslogin(false);
  };
  if (isLogin) {
    return (
      <div className="full-width">
        <div className="user-page">
          <div className="user-content">
            <i className="fa fas fa-user-circle fa-5x"></i>
            <form>
              <h6>Email:</h6>
              <input className="user-content__input" type="text"></input>
              <h6>Password:</h6>
              <input className="user-content__input" type="text"></input>
            </form>
            <button className="user-content__btn__main">Sign In</button>
            <p>
              Don't have any account?{" "}
              <button
                className="user-content__btn__switch"
                onClick={changeSignUp}
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="full-width">
        <div className="user-page">
          <div className="user-content">
            <i class="fa fas fa-user-circle fa-5x"></i>
            <form>
              <h6>Name:</h6>
              <input
                className="user-content__input"
                type="text"
                name="name"
                value={userData.name}
                placeholder="Your name here"
                onChange={change}
              ></input>
              <h6>Email:</h6>
              <input
                className="user-content__input"
                type="text"
                name="email"
                value={userData.email}
                placeholder="Your email here"
                onChange={change}
              ></input>
              <h6>Password:</h6>
              <input
                className="user-content__input"
                type="text"
                name="password"
                value={userData.password}
                placeholder="Your passwrod here"
                onChange={change}
              ></input>
              <h6>Password Confirmation:</h6>
              <input
                className="user-content__input"
                type="text"
                name="confirm"
                value={userData.confirm}
                placeholder="password confirmation"
                onChange={change}
              ></input>
            </form>
            <button onClick={submitSignUp} className="user-content__btn">
              Sign Up
            </button>
            <p>
              Already have account?{" "}
              <a className="user-content__btn__switch" href="/user">
                Log in here
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { signUp })(User);
