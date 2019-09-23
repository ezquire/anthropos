import React from 'react';
import './AllTransactions.css';

const formatTransactionDate = ({ transaction }) => {
  var a = new Date(transaction.extra.created_on);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var day = a.getDate();
  var month = months[a.getMonth()];
  return month + ' ' + day;
}

const formatTransactionNickname = ({ transaction }) => {
  if(transaction.from.id !== null) {
    return transaction.to.id || "Unknown";
  } else {
    return transaction.from.nickname || "Unknown";
  }
}

const formatTransactionAmount = ({ transaction }) => {
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

const AllTransactions = ({ alltransactions }) => (
  <div>
    {
      alltransactions.map((transaction, i) => (
        <div key={i}>
          <div className="transaction">
            <span className="date">{formatTransactionDate({ transaction })}</span>
            <span className="nickname">{formatTransactionNickname({ transaction })}</span>
            <div className="amount">{formatTransactionAmount({ transaction })}</div>
          </div>
          <hr />
        </div>))
    }
  </div>
);

export default AllTransactions;