import React, {useEffect, useState} from 'react'
import Layout from '../layout/Layout'
import SideNavBar from '../layout/SideNavBar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container, ButtonGroup } from 'react-bootstrap';
import { viewBook } from '../../utils/axiosHelper';


const ViewBook = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getAllBooks();
    
    }, [])
    const getAllBooks = async() => {
        const {books} = await viewBook()
        setBooks(books)
    }
    console.log("hiii",  books)
    console.log(books.bookname)


  return (
    <Layout>
        <SideNavBar/>
        <Table responsive="sm" striped bordered hover className='booktable'>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Book Name</th>
          <th>ISBN</th>
          <th>Author</th>
          <th>Publication Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((item, index) => (
            <tr key={item._id}>
            
            
            <td>{index + 1} </td>
            <td>{item.bookname}</td>
            <td>{item.isbn}</td>
            <td>{item.author}</td>
            <td>
            
            { new Date(item.pdate).toLocaleString()}
            </td>
            <td>
          
            <Button variant='success'>Edit</Button>
              <Button variant='danger' className="m-2">Delete</Button>
              <Button>View</Button>
          </td>
          </tr>

        ))}
       
       
        <tr>
        
          <td colSpan={4}>Total numbers of book</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

    </Layout>
  )
}

export default ViewBook