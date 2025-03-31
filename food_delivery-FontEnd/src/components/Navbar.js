import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../photos/delivery-route.png"
import { Link } from 'react-router-dom';
function Navv() {
  return (
    <div>
    <Navbar expand="lg" className=" navbarr bg-body-tertiary bg-danger-subtle" >
    <Container>
    <Navbar.Brand to="/">
    <img
      src={logo}
      width="60"
      height="55"
      className="d-inline-block align-top"
      alt="logo"
    />
  </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto gap-3">
        <div>
        <Link to="/" className=' text-decoration-none text-success me-3'>Home </Link>
        </div>
         <div className=''>
         <Link to="/signup" className=' text-decoration-none text-success me-3'>SignUp </Link>
        <Link to="/login" className=' text-decoration-none text-success'> LogIn</Link>
         </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navv