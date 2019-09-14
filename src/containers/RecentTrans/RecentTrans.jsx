import React from 'react';
import Transactions from '../../components/Transactions/Transactions';
import Card from 'react-bootstrap/Card';

const RecentTrans = ({ transactions }) => (
  <Card style={{ width: '18rem', textAlign: 'left' }}>
    <Card.Body>
      <Card.Title>Hi Person!</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Here are your recent transactions</Card.Subtitle>
      <hr />
      <Transactions transactions={transactions} />
    </Card.Body>
  </Card>
);

export default RecentTrans;