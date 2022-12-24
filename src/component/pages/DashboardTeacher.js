import React, {useEffect, useState}from 'react'
import Layout from '../layout/Layout'
import {SidebarMenu} from 'react-bootstrap-sidebar-menu';
import SideNavBar from '../layout/SideNavBar';
import BookForm from '../bookForm/BookForm';
import ViewBook from '../bookForm/ViewBook';
import { deleteBook, viewBook } from '../../utils/axiosHelper';
import LayoutTeacher from '../layout/LayoutTeacher';

const DashboardTeacher = () => {
  
 const [books, setBooks] = useState([]);
//  const [idsToDelete, setIdsToDelete] = useState([]);
useEffect(() => {
    getAllBooks();
 
 }, [])


 const getAllBooks = async() => {
   const {books} = await viewBook()
   setBooks(books)
 }

  return (
    
    
    <LayoutTeacher>
   <SideNavBar className="bass"/>
   {/* <BookForm/> */}
   <h1> welcome to Libary Management system</h1>

 
   
     
   
   </LayoutTeacher>
  
    

    
  )
}

export default DashboardTeacher