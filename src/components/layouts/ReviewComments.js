import React from "react";
import Profile from "../../assets/pictures/profile.jpeg";
import "../../assets/styles/ReviewComment.scss";

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__img">
        <img src={Profile} alt="profile" width="80vw" height="80vh"></img>
      </div>
      <div className="comment__text">
        <p className="comment__text--bold">Yenni K.P</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
      </div>
      <div className="comment__loadmore">
        <button>More Review</button>
      </div>
    </div>
  );
};

export default Comment;
