import React from 'react';
import AllTransactions from '../../components/AllTransactions/AllTransactions';
import Card from 'react-bootstrap/Card';

const AllTrans = ({ allTransactions }) => (
  <Card style={{ width: '100%', textAlign: 'left' }}>
    <Card.Body>
      <Card.Title>Here are all your transactions</Card.Title>
      <hr />
      <AllTransactions allTransactions={allTransactions} />
    </Card.Body>
  </Card>
);

export default AllTrans;