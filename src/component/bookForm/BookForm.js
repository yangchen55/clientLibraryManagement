import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert }  from 'react-bootstrap';
import { CustomInput } from '../custom-input/CustomInput';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { addBook } from '../../utils/axiosHelper';
import Layout from '../layout/Layout';
import SideNavBar from '../layout/SideNavBar';

const initialState ={
    bookname:"",
    isbn:"",
    author: "" ,
    pdate:"00-00-2022",
    abstract: "",

  }
const BookForm = () => {
    const [form, setForm] = useState(initialState);
    const [response, setResponse] = useState({});
    const inputFields =[

        {
          label:'Book',
          placeholder: "joy of living",
          required: true,
          name:'bookname',
          type:'string',
          value:form.bookname,
        },
        {
          label:'ISBN',
          placeholder: "isbn",
          required: true,
          name:'isbn',
          type:'text',
          value:form.isbn,
        },
       
        {
            label:'Author',
            placeholder: "",
            required: true,
            name:'author',
            type:'string',
            value:form.author,
          },
          {
            label:'Publication Date',
            placeholder: "",
            name:'pdate',
            type:'date',
            value:form.pdate
          },
          {
            label:'Abstract',
            placeholder: "",
            name:'abstract',
            type:"string",
            as:"textarea",
            value:form.abstract

          },
         



       
      ]


  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setForm( {...form,
     [name]: value,
    });
  };

  const handleOnSubmit = async(e) => {
    e.preventDefault();
    console.log(form)
    const {data} = await addBook(form);
  setResponse(data)
  console.log(data)


  }
  return (
    <Layout>
        <SideNavBar/>
    <Form className='login-page' onSubmit={handleOnSubmit} >
    <h2> Register new  book </h2>
    <hr></hr>
    
    {response.message && 
    (<Alert variant={response.status === "success"? "success": "danger"}>
    {response.message}
    </Alert>
    )}
   

    {inputFields.map((item) =>(
      <CustomInput {...item} onChange={handleOnchange} />
    ) )} 

  
 

  
  <Button variant="primary" type="submit" >
  Add
  </Button>
  
    </Form>
</Layout>

    
  )
}

export default BookForm