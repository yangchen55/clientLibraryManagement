import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from 'react-router-dom';

import { useEffect , useState   } from 'react';

function Header() {
  // const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUser(user);
  }, [])

  const handleOnLogOut = () => {
    // remove key from session storage as there is key and value 
    sessionStorage.removeItem("user");
    // navigate("/");

    
  }


  return (
    <Navbar bg="primary" variant="dark" expand="md" className='text-center bg-dark text-light p-2'>
      <Container>
        <Navbar.Brand href="#home">Libary Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id?(
              <>
               <div className='nav-link fw-bolder text-warning'> {""} welcome back {user?.name}</div>


            
            <Link to="/" className='nav-link' onClick={handleOnLogOut}>Logout</Link>
            </>
            ):(
           <>
            <Link to="/" className='nav-link'>Login</Link>
            <Link to="/register" className='nav-link'>Register</Link>
            </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

<Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>

export default Header;