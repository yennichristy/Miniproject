import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getReview, getBefore } from "../../store/actions/reviewCommentAction";
import "../../assets/styles/ReviewComment.scss";

const Comment = ({ getReview, getBefore, reviews }) => {
  const { id } = useParams();

  useEffect(() => {
    if (localStorage.token) {
      getReview(id);
    } else {
      getBefore(id);
    }
  }, []);
  console.log("papapa");

  return (
    <React.Fragment>
      <div className="comment">
        <div className="comment__img">
          <img
            src={reviews.userId && reviews.userId.image}
            alt="profile"
            width="80vw"
            height="80vh"
          ></img>
        </div>
        <div className="comment__text">
          <p className="comment__text--bold">
            {reviews.userId && reviews.userId.name}
          </p>
          <p>{reviews && reviews.review}</p>
        </div>
        <div className="comment__loadmore">
          <button>More Review</button>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    reviews: state.comment.comment
  };
};

export default connect(mapStateToProps, { getReview, getBefore })(Comment);
