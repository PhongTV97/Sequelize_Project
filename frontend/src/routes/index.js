import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginScreen from "../screens/login-screen";
import CreateAccScreen from "../screens/create-acc-screen";

const RouterApp = () => {
  return (
    <Router>
      <Route path="/" component={LoginScreen} exact />
      <Route path="/create-acc" component={CreateAccScreen} />
    </Router>
  );
};

export default RouterApp;
