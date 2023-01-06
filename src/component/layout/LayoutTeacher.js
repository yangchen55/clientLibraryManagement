import React from "react";
import Header from "./Header";
import Container from "react-bootstrap/esm/Container";
import Footer from "./Footer";
import SideNavBar from "./SideNavBar";

const LayoutTeacher = ({ children }) => {
  return (
    <div className="main">
      <div className="exceptside">
        <Header />
        <Container className="teacherContainer">{children}</Container>
        <Footer />
      </div>

      <SideNavBar />
    </div>
  );
};

export default LayoutTeacher;
