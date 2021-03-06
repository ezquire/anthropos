import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './TopNav.css'

const TopNav = () => (
  <Navbar collapseOnSelect expand="md" className="topnav">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Sign Out</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default TopNav;