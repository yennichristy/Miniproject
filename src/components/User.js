import React, { useState } from "react";
import "../assets/styles/User.scss";

const User = () => {
  const [isLogin, setIslogin] = useState(true);

  const signUp = e => {
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
              <button className="user-content__btn__switch" onClick={signUp}>
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
              <input className="user-content__input" type="text"></input>
              <h6>Email:</h6>
              <input className="user-content__input" type="text"></input>
              <h6>Password:</h6>
              <input className="user-content__input" type="text"></input>
              <h6>Password Confirmation:</h6>
              <input className="user-content__input" type="text"></input>
            </form>
            <button className="user-content__btn">Sign Up</button>
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

export default User;
