import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DriverAuthentication from "../driverPages/driverAuthentication";
import DriverHome from "./../driverPages/driverHome";

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={DriverAuthentication} />
        <Route exact path="/driverhome" component={DriverHome} />
      </Switch>
    );
  }
}

export default AppRouter;
