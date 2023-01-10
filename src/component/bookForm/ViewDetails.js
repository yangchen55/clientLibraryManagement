import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { viewTransaction } from "../../utils/axiosHelper";
import LayoutTeacher from "../layout/LayoutTeacher";

const ViewDetails = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getAllDetails();
  }, []);

  const getAllDetails = async () => {
    const { trans } = await viewTransaction();
    setDetails(trans);
  };
  console.log("details", details);
  return (
    <LayoutTeacher>
      <Container className="mt-5">
        <Table responsive striped bordered hover className=" booktable">
          <thead>
            <tr>
              <th>S. no</th>
              <th>book ID</th>
              <th>Book Name</th>
              <th> Borrow Date</th>
              <th>User ID</th>
              <th>borrower name</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {details.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.bookId}</td>
                <td>{item.bookname}</td>
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                <td>{item.userId}</td>
                <td>{item.studentName}</td>
                <td>
                  <Button>Borrowed</Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={6}>total books borrowed</td>
              <td> {details.length}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </LayoutTeacher>
  );
};

export default ViewDetails;
