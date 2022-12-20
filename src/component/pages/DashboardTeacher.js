import React from 'react'
import Layout from '../layout/Layout'
import {SidebarMenu} from 'react-bootstrap-sidebar-menu';
import SideNavBar from '../layout/SideNavBar';
import BookForm from '../bookForm/BookForm';

const DashboardTeacher = () => {
  return (
    <Layout>
   
   <SideNavBar/>
   <BookForm/>
     
    </Layout>
    

    
  )
}

export default DashboardTeacher