import React from "react";
import Slider from "../layouts/Slider";
import Category from "../layouts/CategoryButton";
import Movies from "../layouts/Movies";

const MainPage = () => {
  return (
    <div>
      <Slider />
      <Category />
      <Movies />
    </div>
  );
};

export default MainPage;
