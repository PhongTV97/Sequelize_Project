import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginScreen from "../screens/login-screen";
import CreateAccScreen from "../screens/create-acc-screen";
import HomeScreen from "../screens/home-screen";
import {NAME_SCREEN} from "../constants/index.js";

const RouterApp = () => {
  return (
    <Router>
      <Route path="/" component={LoginScreen} exact />
      <Route path={NAME_SCREEN.LOGIN} component={LoginScreen} />
      <Route path={NAME_SCREEN.CREATE_ACC} component={CreateAccScreen} />
      <Route path={NAME_SCREEN.HOME} component={HomeScreen} />
    </Router>
  );
};

export default RouterApp;
