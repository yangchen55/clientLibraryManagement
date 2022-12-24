import React from 'react'
import Header from './Header'
import Container from "react-bootstrap/esm/Container"
import Footer from './Footer'

const LayoutTeacher = ({children}) => {
  return (
    <div className='layoutTeacher'>
        <Header/>
        <Container className='mt-5' style={{minHeight:"73vh"}}> 
        {children}
        </Container>


        <Footer/>
         </div>
  )
}

export default LayoutTeacher

