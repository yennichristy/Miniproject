import React from "react";
import BeautyStars from "beauty-stars";
import Picture from "../../assets/pictures/poster1.jpg";
import "../../assets/styles/Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__shadow">
        <div className="banner__shadow__content">
          <h1>Frozen II</h1>
          <div className="banner__shadow__content--rating">
            <BeautyStars size="20px" />
          </div>
          <p>2200 review</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqu
          </p>
          <button className=" banner__shadow__content__trailer">
            Watch Trailer
          </button>
          <button className=" banner__shadow__content__watchlist">
            Add to Watchhlist
          </button>
        </div>
      </div>
      <div className="banner__img">
        <img src={Picture} alt="picture"></img>
      </div>
    </div>
  );
};

export default Banner;
