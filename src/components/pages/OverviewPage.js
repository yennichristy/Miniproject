import React from "react";
import Header from "../layouts/Header";
import Banner from "../layouts/Banner";
import Button from "../layouts/AboutMovie";
import Overview from "../layouts/Overview";
import Footer from "../layouts/Footer";

const OverviewPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Button />
      <Overview />
      <Footer />
    </div>
  );
};

export default OverviewPage;
