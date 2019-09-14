import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const TopNav = () => (
  <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top">
    <Navbar.Brand href="#home">Anthropos</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#sign-out">Sign Out</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default TopNav;