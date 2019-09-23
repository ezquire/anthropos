import React from 'react';
import AllTransactions from '../../components/AllTransactions/AllTransactions';
import Card from 'react-bootstrap/Card';

const AllTrans = ({ allTransactions }) => (
  <Card style={{ width: '20rem', textAlign: 'left' }}>
    <Card.Body>
      <Card.Title>Here are all your transactions</Card.Title>
      <hr />
      <AllTransactions alltransactions={allTransactions} />
    </Card.Body>
  </Card>
);

export default AllTrans;