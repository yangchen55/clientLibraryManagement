import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../custom-input/CustomInput";
// import {Link} from 'react-router-dom';
import { useState } from "react";
import { addBook } from "../../utils/axiosHelper";
import Layout from "../layout/Layout";
import SideNavBar from "../layout/SideNavBar";
import { toast } from "react-toastify";
import LayoutTeacher from "../layout/LayoutTeacher";

const initialState = {
  bookname: "",
  isbn: "",
  author: "",
  pdate: "dd/mm/yyyy",
  abstract: "",
};
const BookForm = () => {
  const [form, setForm] = useState(initialState);
  const inputFields = [
    {
      label: "Book",
      placeholder: "joy of living",
      required: true,
      name: "bookname",
      type: "string",
      value: form.bookname,
    },
    {
      label: "ISBN",
      placeholder: "isbn",
      required: true,
      name: "isbn",
      type: "text",
      value: form.isbn,
    },

    {
      label: "Author",
      placeholder: "",
      required: true,
      name: "author",
      type: "string",
      value: form.author,
    },
    {
      label: "Publication Date",
      placeholder: "",
      name: "pdate",
      type: "date",
      value: form.pdate,
    },
    {
      label: "Abstract",
      placeholder: "",
      name: "abstract",
      type: "string",
      as: "textarea",
      value: form.abstract,
    },
  ];

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const { status, message } = await addBook(form);
    toast[status](message);
    console.log(status, message);
    setForm(initialState);
  };
  return (
    <LayoutTeacher>
      {/* <SideNavBar /> */}
      <Form className="addbook-page" onSubmit={handleOnSubmit}>
        <h2> Register new book </h2>
        <hr></hr>

        {inputFields.map((item) => (
          <CustomInput {...item} onChange={handleOnchange} />
        ))}

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </LayoutTeacher>
  );
};

export default BookForm;
