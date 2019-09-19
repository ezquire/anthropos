import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './SideNav.css'
import { LinkContainer } from 'react-router-bootstrap'

const SideNav = () => (
  <div className='SideNav'>
    <Navbar collapseOnSelect expand="md" fixed="left" className="navigation">
      <Nav fill variant="pills" defaultActiveKey="/app" className="flex-column links" >
        <Navbar.Brand href="/app">ANTHROPOS</Navbar.Brand>
        <LinkContainer exact to="/app" activeClassName="selected">
          <Nav.Link>Overview</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/app/accounts" activeClassName="selected">
          <Nav.Link>Accounts</Nav.Link>
        </LinkContainer>
        <Nav.Link href="#transactions" eventKey="transactions">Transactions</Nav.Link>
        <Nav.Link href="#payments" eventKey="payments">Payments</Nav.Link>
      </Nav>
    </Navbar>
  </div>
);

export default SideNav;

