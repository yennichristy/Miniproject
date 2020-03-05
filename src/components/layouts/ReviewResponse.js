import React, { useState } from "react";
import BeautyStars from "beauty-stars";
import "../../assets/styles/ReviewResponse.scss";
import { addReview } from "../../store/actions/reviewResponseAction";
import Profile from "../../assets/pictures/profile.jpeg";

const Response = ({ addReview }) => {
  const [rating, setRating] = useState({ value: 0 });

  return (
    <div className="response">
      <div className="response__img">
        <img src={Profile} alt="profile" width="80vw" height="80vh"></img>
      </div>
      <div className="response__ratings">
        <p>Yenni K.P</p>
        <div className="response__ratings__stars">
          <BeautyStars
            value={rating.value}
            size="20px"
            onChange={value => setRating({ value })}
          ></BeautyStars>
        </div>
      </div>
      <div className="response__input">
        <textarea type="text" placeholder="Your review here"></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Response;
