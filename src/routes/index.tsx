import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Search from "../pages/Search";
import CountUF from "../pages/CountUF";
import CreateOrUpdate from "../pages/CreateOrUpdate";


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/search" component={Search} />
      <Route path="/count" component={CountUF} />
      <Route path="/create" component={CreateOrUpdate} />

    </Switch>
  );
};

export default Routes;
