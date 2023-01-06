import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { SidebarMenu } from "react-bootstrap-sidebar-menu";
import SideNavBar from "../layout/SideNavBar";
import BookForm from "../bookForm/BookForm";
import ViewBook from "../bookForm/ViewBook";
import { deleteBook, viewBook } from "../../utils/axiosHelper";
import LayoutTeacher from "../layout/LayoutTeacher";
import Container from "react-bootstrap/esm/Container";
const DashboardTeacher = ({ children }) => {
  return (
    <LayoutTeacher>
      <Container className=" mt-5 dash-page">
        <h1>welcome to library management System</h1>
        <hr></hr>
        <div>
          Leganto support for academics Quick start guide: tools and features
          Leganto - Getting started tutorial: interactive guide while you use
          Leganto Leganto guide: guidance on creating a course material list,
          adding resources, sharing with your class and troubleshooting Leganto
          introductory video
        </div>
      </Container>
      <Container className=" mt-5 dash-page">
        <h1>welcome to library management System</h1>
        <hr></hr>
        <div></div>
      </Container>
    </LayoutTeacher>
  );
};

export default DashboardTeacher;
