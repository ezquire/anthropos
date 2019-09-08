import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import synapse from '../api.js';

class RecentTrans extends Component {

  renderTransactions() {
    const { transactions } = synapse.getUserTransactions();
    console.log(transactions);
    return ( 
      <ul>
        {
          transactions.map(transaction => {
            return (
              <li>This is rendering</li>
            )
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Hi Person!</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Company</Card.Subtitle>
          <Card.Text>
            { this.renderTransactions() }
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}


export default RecentTrans;