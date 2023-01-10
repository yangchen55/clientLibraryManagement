import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTransaction, viewBook } from "../../utils/axiosHelper";
import Card from "react-bootstrap/Card";
import { createApi } from "unsplash-js";

const StudentForm = () => {
  const [searchbook, setSearchBook] = useState("");
  const [books, setBooks] = useState([]);
  const [borrowList, setBorrowList] = useState([]);
  const [user, setUser] = useState({});
  const [pic, setPic] = useState([]);
  const [pics, setPics] = useState([]);
  const randomPic = [Math.floor(Math.random() * 9)];
  const unsplash = new createApi({
    accessKey: "umbHEj74zQQUH-zqOxQOn7r4eNBvGWVuHZXX-nXvH5I",
    secretKey: "OSfAmbTovjazu8ky-fKJ4Afh2cq-6LAHeB8O1SQMEsI",
  });

  // useEffect(() => {
  //   const delay = pic ? 2000 : 0;
  //   setTimeout(async (e) => {
  //     try {
  //       searchPhotos();
  //     } catch (error) {
  //       console.log(error, "unable too fetch");
  //     }
  //   }, delay);
  // }, [pic]);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUser(user);
    searchPhotos();
    getAllBooks(searchbook);
  }, [searchbook]);

  const searchPhotos = async (e) => {
    const a = await unsplash.search
      .getPhotos({
        query: "flowers",
      })
      .then((res) => res);
    const { response } = a;
    const { results } = response;
    setPic(results);

    console.log(results);
    console.log(pic[randomPic].urls["small"]);
    // const ap = results.urls.small;
    // setPic(a);
    console.log(pic);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchBook(value.toLowerCase());
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(searchbook);
    // searchPhotos();
  };

  const getAllBooks = async (e) => {
    const { books } = await viewBook();
    setBooks(books);
  };
  const addToBorrow = async (e) => {
    const { value } = e.target;
    setBooks(books.filter((item) => item._id !== value));
    const temp = books.filter((item, index) => item._id === value);
    // merging two array is like ass jesus

    setBorrowList([...borrowList, ...temp]);
    console.log(temp);
    const [{ _id, bookname, isbn }] = temp;

    const { status, message } = await addTransaction(
      _id,
      bookname,
      isbn,
      user.name
    );
    console.log(status, message, user.name);
  };

  const returnBook = (e) => {
    const { value } = e.target;
    setBorrowList(borrowList.filter((item, index) => item._id !== value));
    const temp = borrowList.filter((item, index) => item._id === value);
    setBooks([...books, ...temp]);
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
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
              {/* for random pic  */}
              {/* {pic.map((item, index) => (
                <Card.Img
                  style={{ width: "14rem", height: "12rem" }}
                  variant="top"
                  src={item.urls.small}
                />
              ))} */}

              <Card.Img
                style={{ width: "14rem", height: "12rem" }}
                variant="top"
                src={pic[randomPic].urls["small"]}
              />

              <Card.Body>
                <Card.Title> Title: {item.bookname}</Card.Title>

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

        <hr></hr>
        <h1> My book collection</h1>

        {borrowList.map((item, index) => (
          <Col>
            <Card style={{ width: "13rem" }} className="mb-2">
              <Card.Body>
                <Card.Title>{item.bookname}</Card.Title>
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
      <hr></hr>
      <Row>
        <h1 style={{ color: "white" }}>image ass</h1>

        <Col>
          {/* <p> {pic[randomPic].urls.small}</p> */}
          <Card.Img
            style={{ width: "14rem" }}
            variant="top"
            // src={pic[randomPic].urls.small}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default StudentForm;
