import React from "react";
import { Route } from "react-router-dom";
import User from "../pages/User";
import MainPage from "../pages/MainPage";
import OverviewPage from "../pages/OverviewPage";

const Routes = () => {
  return (
    <div>
      <Route path="/user" component={User} exact />
      <Route path="/" component={MainPage} exact />
      <Route path="/:id" component={OverviewPage} exact />
    </div>
  );
};

export default Routes;
