import React from "react";
import Header from "./Header";
import Container from "react-bootstrap/esm/Container";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout-blur">
        <Header />
        <Container className="mt-5" style={{ minHeight: "73vh" }}>
          {children}
        </Container>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
