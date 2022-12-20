import React from 'react'
import Layout from '../layout/Layout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { Alert }  from 'react-bootstrap';
import { CustomInput } from '../custom-input/CustomInput';
import { postUser } from '../../utils/axiosHelper';

const initialState ={
  email:"",
  name:"",
  pin: "",
  type: "" 
}
const Register = () => {
  const inputFields =[

    {
      label:'email',
      placeholder: "tse@email.com",
      required: true,
      name:'email',
      type:'email'
    },
    {
      label:'name',
      placeholder: "name",
      required: true,
      name:'name',
      type:'text'
    },
    {
      label:'pin',
      placeholder: "1243",
      required: true,
      name:'pin',
      type:'number'
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


  const handleOnSubmit = async(e) => {
    e.preventDefault();
    
    const {data} = await postUser(form);
   
    setResponse(data)
  
     console.log("hi this is from register");

    
  
 
  };


  return (
   <Layout>
     <Form className='login-page'  onSubmit={handleOnSubmit}>
        <h2> Register</h2>
        <hr></hr>
        
        {response.message && 
        (<Alert variant={response.status === "success"? "success": "danger"}>
        {response.message}
        </Alert>
        )}

        {inputFields.map((item) =>(
          <CustomInput {...item} onChange={handleOnchange} />
        ) )} 

       <Form.Select onChange={handleOnchange} name='type' value={form.type}   required className='mb-3'>
          <option>chooose</option>
          <option value="teacher">teacher</option>
          <option value="student">student</option>
        </Form.Select> 
     

      
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      <div className='text-end'>
        New here? <Link to ='/'>Login </Link>
      </div>
    </Form>
    

   </Layout>
  )
}

export default Register