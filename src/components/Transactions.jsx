import React from 'react';

const Transactions = ({ transactions }) => (
  <ul>
    {transactions.map((transaction, i) =>
      <li key={i}>This is rendering</li>
    )}
  </ul>
);

export default Transactions;