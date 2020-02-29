import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import poster1 from "../../assets/pictures/poster1.jpg";
import poster2 from "../../assets/pictures/poster2.jpg";
import poster3 from "../../assets/pictures/poster3.jpg";
import "../../assets/styles/Slider.scss";

const Slide = () => {
  const set = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider">
      <Slider {...set}>
        <img src={poster1} alt="poster"></img>
        <img src={poster2} alt="poster"></img>
        <img src={poster3} alt="poster"></img>
      </Slider>
    </div>
  );
};

export default Slide;
