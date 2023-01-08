import React from "react";
import { Container, Table } from "react-bootstrap";
import LayoutTeacher from "../layout/LayoutTeacher";

const ViewDetails = () => {
  return (
    <LayoutTeacher>
      <Container className="mt-5">
        <Table responsive="sm" striped bordered hover className="booktable">
          <thead>
            <tr>
              <th>lem</th>
              <th>lem</th>
              <th>lem</th>
              <th>lem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>lem</td>
              <td>lem</td>
              <td>lem</td>
              <td>lem</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </LayoutTeacher>
  );
};

export default ViewDetails;
