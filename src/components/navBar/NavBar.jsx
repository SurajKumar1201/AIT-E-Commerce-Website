import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/AchiversIt-Logo.png';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { Navbar, Nav, Container } from 'react-bootstrap';  // Importing components from react-bootstrap

const image = {
  height: "50px"
};

const cartNumberStyle = {
  position: "absolute",
  top:"-1px",
  right:"-6px",
  fontSize:"12px",
  backgroundColor:"grey",
  // border:"1px solid black",
  borderRadius:"50%",
  height:"20px",
  width:"20px",
  textAlign:"center",
  fontWeight:"400",
  color:"white",
  lineHeight:"20px"
};

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="light" className='py-3 px-5 container-fluid shadow-lg p-3 mb-2 bg-body rounded'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className='img-fluid' style={image} src={logo} alt="Achievers IT Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex flex-row gap-4 align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/profile"><IoPerson/></Nav.Link>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FaCartShopping />
              <span style={cartNumberStyle}>0</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
