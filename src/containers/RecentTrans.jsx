import React from 'react';
import Transactions from '../components/Transactions';
import Card from 'react-bootstrap/Card';

const RecentTrans = ({ transactions }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Hi Person!</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Company</Card.Subtitle>
      <Card.Text>
        <Transactions transactions={transactions}/>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default RecentTrans;