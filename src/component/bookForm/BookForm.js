import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert }  from 'react-bootstrap';
import { CustomInput } from '../custom-input/CustomInput';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const initialState ={
    email:"",
    name:"",
    pin: "",
    type: "" 
  }
const BookForm = () => {
    const inputFields =[

        {
          label:'Book',
          placeholder: "joy of living",
          required: true,
          name:'bookname',
          type:'string'
        },
        {
          label:'ISBN',
          placeholder: "isbn",
          required: true,
          name:'isbn',
          type:'text'
        },
        {
          label:'Abstract',
          placeholder: "",
          required: true,
          name:'abstract',
          type:'string'
        },
        {
            label:'Author',
            placeholder: "",
            required: true,
            name:'author',
            type:'string'
          },
          {
            label:'Publication Date',
            placeholder: "",
            required: true,
            name:'date',
            type:'date'
          }
         



       
      ]
 const [form, setForm] = useState(initialState);

  const [response, setResponse] = useState({});

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setForm( {...form,
     [name]: value,
    });
    console.log(form)
  };
  return (
    <Form className='login-page'  >
    <h2> Book search Form </h2>
    <hr></hr>
    
    {/* {response.message && 
    (<Alert variant={response.status === "success"? "success": "danger"}>
    {response.message}
    </Alert>
    )} */}

    {inputFields.map((item) =>(
      <CustomInput {...item} onChange={handleOnchange} />
    ) )} 

  
 

  
  <Button variant="primary" type="submit" >
  Add
  </Button>
  
</Form>

    
  )
}

export default BookForm