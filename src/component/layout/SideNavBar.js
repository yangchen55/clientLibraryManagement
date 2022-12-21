import React from "react";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {Link,   useNavigate} from 'react-router-dom';


import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

const SideNavBar = () => {
    const navigate = useNavigate();
  return (
    <SideNav  expand="md" className=' bg-dark text-light p-2'
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
           
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem >
            {/* <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon> */}
            <NavText>
                <Link to="/addBook" className='NavText'>add book</Link>
            </NavText>
            </NavItem >  
       <NavItem >
                <NavText>
                <Link to="/viewBook" className='NavText'>View book</Link>
                </NavText>
        </NavItem>
        <NavItem >
                <NavText>
                   Update book
                </NavText>
        </NavItem>
        
    </SideNav.Nav>
</SideNav>

  )
}

export default SideNavBar;

