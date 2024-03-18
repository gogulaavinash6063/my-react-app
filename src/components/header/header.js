import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarB = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Kafene</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/orders" style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "8px"
              }}>Orders</Link>
              <Link to="/items" style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "20px"
              }}>Products</Link>
              <Link to="/users" style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "20px"
              }}>Users</Link>
              <Link to="/" style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "20px"
              }}>Logout</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarB;
