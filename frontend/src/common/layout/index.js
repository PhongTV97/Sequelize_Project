import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
