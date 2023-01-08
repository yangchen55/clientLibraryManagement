import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

const SideNavBar = () => {
  const navigate = useNavigate();

  return (
    <SideNav className="sidenav">
      <SideNav.Toggle />

      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavText>
            <Link to="/dashboardteacher" className="NavText">
              dashboard
            </Link>
          </NavText>
        </NavItem>
        <NavItem>
          <NavText>
            <Link to="/addBook" className="NavText">
              add book
            </Link>
          </NavText>
        </NavItem>
        <NavItem>
          <NavText>
            <Link to="/viewBook" className="NavText">
              View book
            </Link>
          </NavText>
        </NavItem>
        <NavItem>
          <NavText>
            <Link to="/viewDetails" className="NavText">
              Transaction
            </Link>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideNavBar;
