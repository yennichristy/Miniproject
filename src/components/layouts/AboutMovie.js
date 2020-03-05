import React, { useState } from "react";
import "../../assets/styles/AboutMovie.scss";
import DetailMovie from "./DetailMovie";

const AboutMovie = () => {
  const [btnActive, setBtnActive] = useState({
    overview: true,
    review: false,
    casts: false
  });

  const [num, setNum] = useState(1);

  const reviewbtn = e => {
    setBtnActive({
      overview: false,
      review: true,
      casts: false
    });
    setNum(3);
  };

  const castsbtn = () => {
    setBtnActive({
      overview: false,
      review: false,
      casts: true
    });
    setNum(2);
  };

  const overviewbtn = () => {
    setBtnActive({
      overview: true,
      review: false,
      casts: false
    });
    setNum(1);
  };

  return (
    <React.Fragment>
      <div className="about-movie">
        <div className="about-movie__btn">
          <button
            onClick={overviewbtn}
            className={
              btnActive.overview ? "button--inactive" : "button--active"
            }
          >
            Overview
          </button>
          <button
            onClick={castsbtn}
            className={btnActive.casts ? "button--inactive" : "button--active"}
          >
            Casts
          </button>
          <button
            onClick={reviewbtn}
            className={btnActive.review ? "button--inactive" : "button--active"}
          >
            Review
          </button>
        </div>
      </div>
      <DetailMovie change={num} />
    </React.Fragment>
  );
};

export default AboutMovie;
