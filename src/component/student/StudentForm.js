import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {addTransaction, viewBook } from '../../utils/axiosHelper';
import Card from 'react-bootstrap/Card';

// const initialState = {
//     bookname : "",

// }
 const StudentForm = () => {
    const [searchbook, setSearchBook] = useState('')
    const [books, setBooks] = useState([]);
    const [borrowList, setBorrowList] = useState([]);
    const handleOnChange = (e) => {
        const {value}= e.target;
        setSearchBook(value)
        console.log(searchbook)
       

    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(searchbook)
      
 
    }

    //  const [idsToDelete, setIdsToDelete] = useState([]);
    useEffect(() => {
        getAllBooks(searchbook);
     }, [searchbook])

     const getAllBooks = async(searchbook) => {
       const {books} = await viewBook()
       setBooks(books)
   
       
     }
     const addToBorrow = async(e) => {
        const {value}= e.target;
        setBooks( books.filter(item => item._id !== value) )
        const temp = books.filter((item, index ) => item._id === value)
        // merging two array is like ass jesus
      
        setBorrowList([...borrowList, ...temp])
        console.log(temp)
        const [{_id, bookname, isbn}] = temp
       
        
        const { status, message }  = await addTransaction(_id, bookname, isbn);
        console.log(status, message)
       
        
     }
     const returnBook = (e) => {
      const {value}= e.target;
      setBorrowList(borrowList.filter((item, index ) => item._id !== value))
      const temp = borrowList.filter((item, index ) => item._id === value)
      setBooks([...books, ...temp])




     }
    
   
     
  return (
    <Container>
    <Form onSubmit={handleOnSubmit}>
    <Row>
    <Col>
    <Form.Group className="mb-3">
    <Form.Control type="text" name ="bookname" placeholder="Enter Book Name" onChange={handleOnChange} />
    </Form.Group>
    </Col>

    <Col xs ={4}>
    <Button variant="success" type="submit">
     Search
    </Button>
    </Col>
  </Row>
  </Form>
  <hr></hr>
        <Row>
        <h1>Available book List</h1>
          {books.map((item, index)  => (
            (item.bookname.includes(searchbook))?(
            
               
        <Card style={{ width: '15rem' }} className="m-2 md-5">
           
        <Card.Body>
          <Card.Title> Title: {item.bookname}</Card.Title>
          
          <Card.Subtitle className="mb-2 text-muted">Published On : {new Date(item.pdate).toLocaleDateString()}</Card.Subtitle>
          <Card.Text>
            {item.abstract}
          </Card.Text>
          <Card.Text>
            Author: {item.author}
          </Card.Text>
          <Button variant="primary" className='m-2' value={item._id} onClick={addToBorrow}>Borrow</Button>
        
          </Card.Body>
          </Card>): (<></>)
          ))}

{/* 
setMovie(movie.filter(item => 
      item.imdbID !== newMov.imdbID));        */}
           
 <hr></hr>
 <h1> My book collection</h1>
    {/* {books.filter(a => a._id.includes(borrowList)).map(item=> ( */}
{/* { borrowList.filter(item => item._id !== books._id ( */}
{ borrowList.map((item, index)  =>  (
        <Col>
        <Card style={{ width: '13rem' }} className="mb-2">

        <Card.Body>
          <Card.Title>{item.bookname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Published On : {new Date(item.pdate).toLocaleDateString()}</Card.Subtitle>
          <Card.Text>
            {item.abstract}
          </Card.Text>
          <Card.Text>
            Author: {item.author}
          </Card.Text>
          <Form.Label>Rating</Form.Label>
      <Form.Range />


          
      <Button variant="success" className='m-2' value={item._id} onClick={returnBook}>Return</Button>

        </Card.Body>   
      </Card>
      </Col>

)
)}

  
   
    </Row>
    </Container>





  
  )
}
export default  StudentForm;