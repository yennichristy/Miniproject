import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import MainPage from "./components/pages/MainPage";
import OverviewPage from "./components/pages/OverviewPage";
import ReviewPage from "./components/pages/ReviewPage";
import CastsPage from "./components/pages/CastsPage";
import User from "./components/pages/User";

const App = () => {
  return (
    <div>
      <Header />
      <MainPage />
      <Route path="/overview" exact>
        <OverviewPage />
      </Route>
      <Route path="/review">
        <ReviewPage />
      </Route>
      <Route path="/cast">
        <CastsPage />
      </Route>
      <Footer />
    </div>
  );
};

export default App;
