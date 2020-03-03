import React from "react";
import Header from "../layouts/Header";
import Banner from "../layouts/Banner";
import Button from "../layouts/AboutMovie";
import Review from "../layouts/Review";
import Footer from "../layouts/Footer";

const OverviewPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Button />
      <Review />
      <Footer />
    </div>
  );
};

export default OverviewPage;
