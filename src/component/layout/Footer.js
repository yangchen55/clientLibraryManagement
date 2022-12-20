import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    

<footer className='text-center bg-dark text-light p-5 mt-5'>
&copy; all right reserved 2022 copyright ©  yangchen 🤟 {currentYear} 
</footer>
  )
  
}

export default Footer