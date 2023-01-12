import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  addTransaction,
  viewBook,
  viewTransaction,
} from "../../utils/axiosHelper";
import Card from "react-bootstrap/Card";
import { createApi } from "unsplash-js";

const StudentForm = () => {
  const [searchbook, setSearchBook] = useState("");
  const [books, setBooks] = useState([]);
  const [borrowList, setBorrowList] = useState([]);
  const [user, setUser] = useState({});
  const [hasError, setError] = useState(true);
  const [pic, setPic] = useState([]);

  const unsplash = new createApi({
    accessKey: "umbHEj74zQQUH-zqOxQOn7r4eNBvGWVuHZXX-nXvH5I",
    secretKey: "OSfAmbTovjazu8ky-fKJ4Afh2cq-6LAHeB8O1SQMEsI",
  });

  useEffect(() => {
    searchPhotos();
    getAllBooks();
    getAllTrans();
  }, [searchbook]);

  const searchPhotos = async (e) => {
    unsplash.search
      .getPhotos({
        query: "bookCover",
      })
      .then((res) => {
        if (res.status == 200) {
          setError(false);
        }
        setPic(res["response"].results);
      });
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchBook(value.toLowerCase());
  };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  // };

  const getAllBooks = async (e) => {
    const { books } = await viewBook();
    setBooks(books);
  };

  const getAllTrans = async (e) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUser(user);
    const { trans } = await viewTransaction();
    setBorrowList(trans.filter((item, index) => item.userId === user._id));
  };

  const addToBorrow = async (e) => {
    const { value } = e.target;
    setBooks(books.filter((item) => item._id !== value));
    const temp = books.filter((item, index) => item._id === value);
    // merging two array is like ass jesus
    // setBorrowList([...borrowList, ...temp]);
    // console.log(temp);
    const [{ _id, bookname, isbn, author, pdate, abstract }] = temp;

    const { status, message } = await addTransaction(
      _id,
      bookname,
      isbn,
      author,
      pdate,
      abstract,
      user.name
    );
    console.log(status, message, user.name);
  };

  const returnBook = (e) => {
    const { value } = e.target;
    // setBorrowList(borrowList.filter((item, index) => item._id !== value));
    // const temp = borrowList.filter((item, index) => item._id === value);
    // setBooks([...books, ...temp]);
  };

  return (
    <Container className="background-test">
      <Form
      // onSubmit={handleOnSubmit}
      >
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="bookname"
                placeholder="Enter Book Name"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Button variant="success" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <hr></hr>
      <Container className="heading">
        <h1>Available book List</h1>
      </Container>
      <Row>
        {books.map((item, index) =>
          item.bookname.includes(searchbook) ? (
            <Card style={{ width: "15rem" }} className="m-2 md-5">
              <Card.Body>
                <Card.Title> {item.bookname}</Card.Title>
                {hasError ? (
                  <div style={{ color: "red" }}>😿</div>
                ) : (
                  <Card.Img
                    style={{ height: "200px" }}
                    className="m-2"
                    src={pic[index + 2].urls["small"]}
                  />
                )}

                <Card.Subtitle className="mb-2 text-muted">
                  Published On : {new Date(item.pdate).toLocaleDateString()}
                </Card.Subtitle>
                <Card.Text>{item.abstract}</Card.Text>
                <Card.Text>Author: {item.author}</Card.Text>
                <Button
                  variant="primary"
                  className="m-2"
                  value={item._id}
                  onClick={addToBorrow}
                >
                  Borrow
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <></>
          )
        )}
      </Row>

      <hr></hr>
      <Container className="heading">
        <h1>My book List</h1>
      </Container>
      <Row>
        {borrowList.map((item, index) => (
          <Col>
            <Card style={{ width: "15rem" }} className="m-2 md-5">
              <Card.Body>
                <Card.Title>{item.bookname}</Card.Title>

                <Card.Img
                  style={{ height: "200px" }}
                  className="m-2"
                  src={pic[index + 2].urls["small"]}
                />
                <Card.Subtitle className="mb-2 text-muted">
                  Published On : {new Date(item.pdate).toLocaleDateString()}
                </Card.Subtitle>
                <Card.Text>{item.abstract}</Card.Text>
                <Card.Text>Author: {item.author}</Card.Text>
                <Form.Label>Rating</Form.Label>
                <Form.Range />

                <Button
                  variant="success"
                  className="m-2"
                  value={item._id}
                  onClick={returnBook}
                >
                  Return
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default StudentForm;
