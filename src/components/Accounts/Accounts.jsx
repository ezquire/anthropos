// React + Redux
import React from 'react';
// Styling
import Table from 'react-bootstrap/Table';
import './Accounts.css';

const capitalize = (name) => {
  return name.toLowerCase()
    .split(' ')
    .map((s) => s[0].toUpperCase() + s.substring(1))
    .join(' ');
}

const formatBalance = (balance) => {
  let amount = ""
  if (balance.currency === 'USD') {
    amount += '$'
  }
  amount += balance.amount;
  return amount;
}

const Accounts = ({ accounts }) => (
  <div>
    {console.log()}
    <Table responsive className="accountTable">
      <thead>
        <tr className="head">
          <th>Number</th>
          <th>Name</th>
          <th>Bank</th>
          <th>Type</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {
          accounts.map((account, i) => (
            <tr key={i}>
              <td key={i + 1}>{account.info.account_num}</td>
              <td key={i + 2}>{account.info.nickname}</td>
              <td key={i + 3}>
                {capitalize(account.info.bank_name)}&nbsp;
                <img src={account.info.bank_logo} alt="logo" className="logo" />
              </td>
              <td key={i + 4}>{capitalize(account.info.class)}</td>
              <td key={i + 5}>{formatBalance(account.info.balance)}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  </div>
);

export default Accounts;