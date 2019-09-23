// React + Redux
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
// Styling
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './SideNav.css'

const SideNav = () => (
  <div className='SideNav'>
    <Navbar collapseOnSelect expand="md" fixed="left" className="navigation">
      <Nav fill variant="pills" className="flex-column links" >
        <Navbar.Brand href="/app">ANTHROPOS</Navbar.Brand>
        <LinkContainer exact to="/app" activeClassName="active">
          <Nav.Link>Overview</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/app/accounts" activeClassName="active">
          <Nav.Link>Accounts</Nav.Link>
        </LinkContainer>
        {/* <LinkContainer to="/app/all-transactions" activeClassName="active">
          <Nav.Link>Transactions</Nav.Link>
        </LinkContainer> */}
      </Nav>
    </Navbar>
  </div>
);

export default SideNav;