import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./stylesCommon.scss";

const RootLayout = ({ children }) => {
  return (
    <div className="root-container">
      <Header />
      <div className="body-container">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
