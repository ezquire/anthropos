import React from 'react';

const Transactions = ({ transactions }) => (
  <ul>
    {transactions.map((transaction, i) =>
      <li key={i}>{transaction}</li>
    )}
  </ul>
);

export default Transactions;