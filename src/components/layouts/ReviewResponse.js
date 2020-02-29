import React, { useState } from "react";
import BeautyStars from "beauty-stars";
import "../../assets/styles/ReviewResponse.scss";
import Profile from "../../assets/pictures/profile.jpeg";

const Review = () => {
  const [rating, setRating] = useState({ value: 0 });

  return (
    <div className="review">
      <div className="review__img">
        <img src={Profile} alt="profile" width="80vw" height="80vh"></img>
      </div>
      <div className="review__ratings">
        <p>Yenni K.P</p>
        <div className="review__ratings__stars">
          <BeautyStars
            value={rating.value}
            size="20px"
            onChange={value => setRating({ value })}
          ></BeautyStars>
        </div>
      </div>
      <div className="review__response">
        <textarea type="text" placeholder="Your review here"></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Review;
