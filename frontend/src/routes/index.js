import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginScreen from "../screens/login-screen";
import CreateAccScreen from "../screens/create-acc-screen";
import HomeScreen from "../screens/home-screen";
import { NAME_SCREEN } from "../common/constant";
import RootLayout from "../common/layout";
import SuppliesScreen from "../screens/admin/supplies-screen";

const RouterApp = () => {
  return (
    <Router>
      <RootLayout>
        <Route path="/" component={CreateAccScreen} exact />
        <Route path={NAME_SCREEN.LOGIN} component={LoginScreen} />
        <Route path={NAME_SCREEN.CREATE_ACC} component={CreateAccScreen} />
        <Route path={NAME_SCREEN.HOME_CUSTOMER} component={HomeScreen} />
        <Route path={NAME_SCREEN.ADMIN_PRODUCT} component={HomeScreen} />
        <Route path={NAME_SCREEN.ADMIN_SUPPLICES} component={SuppliesScreen} />
      </RootLayout>
    </Router>
  );
};

export default RouterApp;
