import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import SideNavBar from "../layout/SideNavBar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Container, ButtonGroup } from "react-bootstrap";
import { deleteBook, viewBook } from "../../utils/axiosHelper";
import LayoutTeacher from "../layout/LayoutTeacher";

const ViewBook = () => {
  const [books, setBooks] = useState([]);
  const [idsToDelete, setIdsToDelete] = useState("");
  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const { books } = await viewBook();
    setBooks(books);
  };

  // to delete single row
  const handleOnDelete = async (bookitem) => {
    if (window.confirm(`are you sure you want to delete item(s)`)) {
      const temparg = books.filter((item) => item._id !== bookitem);
      // console.log(temparg)
      // setIdsToDelete()

      // console.log("ids to deelte tetsig", bookitem)
      console.log("ids to deelte state tetsig", idsToDelete);
      // console.log("ids to deelte state tetsig", bookitem)

      setBooks(temparg);

      const { status, message } = await deleteBook(bookitem);
      console.log(status);
      if (status === "success") {
        // setIdsToDelete([]);
        getAllBooks();
      }
    }
  };

  return (
    <LayoutTeacher>
      {/* <SideNavBar/> */}
      <Table responsive="sm" striped bordered hover className="booktable">
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
              <td>{new Date(item.pdate).toLocaleDateString()}</td>
              <td>
                <Button variant="success">Edit</Button>
                <Button
                  variant="danger"
                  className="m-2"
                  onClick={(e) => handleOnDelete(item._id)}
                >
                  Delete
                </Button>
                <Button>View</Button>
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan={4}>Total numbers of book</td>
            <td>{books.length}</td>
          </tr>
        </tbody>
      </Table>
    </LayoutTeacher>
  );
};

export default ViewBook;
