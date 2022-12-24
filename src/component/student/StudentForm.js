import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {viewBook } from '../../utils/axiosHelper';
import Card from 'react-bootstrap/Card';

const initialState = {
    bookname : "",

}
 const StudentForm = () => {
    const [searchbook, setSearchBook] = useState(initialState)
    const [books, setBooks] = useState([]);
    const handleOnChange = (e) => {
        const {name, value}= e.target;
        setSearchBook({...searchbook, 
            [name]:value })
       

    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(searchbook)
 
    }

    //  const [idsToDelete, setIdsToDelete] = useState([]);
    useEffect(() => {
        getAllBooks();
     }, [])
    
    
     const getAllBooks = async() => {
       const {books} = await viewBook()
       setBooks(books)
       
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
    
    {books.map((item, index) => (
        <Col>
        <Card style={{ width: '18rem' }} className="mb-2">

        <Card.Body>
          <Card.Title>{item.bookname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{item.pdate}</Card.Subtitle>
          <Card.Text>
            {item.abstract}
          </Card.Text>
          <Card.Text>
            {item.author}
          </Card.Text>
          <Form.Label>Rating</Form.Label>
      <Form.Range />


          <Button variant="primary" className='m-2'>Borrow</Button>
          <Button variant="success">Return</Button>

        </Card.Body>

        
      </Card>
      </Col>

    ))}

  
   
    </Row>
    </Container>





  
  )
}
export default  StudentForm;