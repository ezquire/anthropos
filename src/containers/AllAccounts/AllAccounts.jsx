import React from 'react';
import Accounts from '../../components/Accounts/Accounts';
import Card from 'react-bootstrap/Card';

const AllAccounts = ({ accounts }) => (
  <Card style={{ width: '100%', textAlign: 'left' }}>
    <Card.Body>
      <Card.Title>All Accounts</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Look how much money you have to do good!</Card.Subtitle>
      <hr />
      <Accounts accounts={accounts} />
    </Card.Body>
  </Card>
);

export default AllAccounts;