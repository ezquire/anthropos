import React from 'react';
import './Transactions.css';

const getTransactionDate = ({ transaction }) => {

}

const getTransactionNickname = ({ transaction }) => {

}

const getTransactionAmount = ({ transaction }) => {
  let amount = ""
  switch (transaction.amount.currency) {
    case 'USD':
      amount += '$'
      break;
    default:
      amount += '$'
      break;
  }
  if(transaction.from.id === null) {
    amount += transaction.amount.amount;
  } else {
    amount = '-' + amount + transaction.amount.amount;
  }
  return amount;
}

const Transactions = ({ transactions }) => (
  <div>
    {
      transactions.map((transaction, i) => (
        <div key={i}>
          <div>
            <span className="date">{getTransactionDate({ transaction })}</span>
            <span className="nickname">{getTransactionNickname({ transaction })}</span>
            <span className="amount">{getTransactionAmount({ transaction })}</span>
          </div>
          <hr />
        </div>))
    }
  </div>
);

export default Transactions;