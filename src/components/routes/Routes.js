import React from "react";
import { Route } from "react-router-dom";
import OverviewPage from "../pages/OverviewPage";

const Routes = props => {
  return (
    <div>
      <Route path="/user" exact />
      <Route path="/:id" component={OverviewPage} exact />
    </div>
  );
};

export default Routes;
