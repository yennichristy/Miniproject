import React from "react";
import Header from "../layouts/Header";
import Slider from "../layouts/Slider";
import Category from "../layouts/CategoryButton";
import Movies from "../layouts/Movies";
import Footer from "../layouts/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Category />
      <Movies />
      <Footer />
    </div>
  );
};

export default MainPage;
