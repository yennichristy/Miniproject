import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BeautyStars from "beauty-stars";
import { useParams } from "react-router-dom";
import "../../assets/styles/ReviewResponse.scss";
import { getReview, addReview } from "../../store/actions/reviewCommentAction";
import Profile from "../../assets/pictures/profile.jpeg";

const Response = ({ getReview, addReview, reviews }) => {
  const [textReview, setTextReview] = useState("");

  useEffect(() => {
    getReview(id);
  }, []);

  const changeReview = e => {
    setTextReview(e.target.value);
  };
  const [rating, setRating] = useState({ value: 0 });

  const { id } = useParams();

  const review = () => {
    const data = {
      rating: rating.value,
      review: textReview,
      movieId: id
    };
    addReview(data);
  };

  return (
    <div className="response">
      <div className="response__img">
        <img src={Profile} alt="profile" width="80vw" height="80vh"></img>
      </div>
      <div className="response__ratings">
        <p>Yenni</p>
        <div className="response__ratings__stars">
          <BeautyStars
            value={rating.value}
            size="20px"
            onChange={value => setRating({ value })}
          ></BeautyStars>
        </div>
      </div>
      <div className="response__input">
        <textarea
          type="text"
          placeholder="Your review here"
          value={textReview}
          onChange={changeReview}
        ></textarea>
        <button onClick={review}>Submit</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    reviews: state.comment.comment
  };
};

export default connect(mapStateToProps, { getReview, addReview })(Response);
