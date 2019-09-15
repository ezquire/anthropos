import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './SideNav.css'

const SideNav = () => (
  <div className='SideNav'>
    <Navbar collapseOnSelect expand="md" fixed="left" className="navigation">
      <Nav fill variant="pills" defaultActiveKey="#overview" className="flex-column links" >
        <Navbar.Brand href="/">ANTHROPOS</Navbar.Brand>
        <Nav.Link href="#overview">Overview</Nav.Link>
        <Nav.Link href="#transactions" eventKey="transactions">Transactions</Nav.Link>
        <Nav.Link href="#payments" eventKey="payments">Payments</Nav.Link>
        <Nav.Link href="#accounts" eventKey="accounts">Accounts</Nav.Link>
      </Nav>
    </Navbar>
  </div>
);

export default SideNav;

