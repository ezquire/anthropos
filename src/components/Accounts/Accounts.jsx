// React + Redux
import React from 'react';
// Styling
import Table from 'react-bootstrap/Table';
import './Accounts.css';

const capitalize = (name) => {
  return name.toLowerCase()
    .split(' ')
    .map((s) => s[0].toUpperCase() + s.substring(1))
    .join(' ')
}

const formatBalance = (balance) => {
  let amount = ""
  if(balance.currency === 'USD') {
    amount += '$'
  }
  amount += balance.amount;
  return amount;
}

const Accounts = ({ accounts }) => (
  <div>
    {
      accounts.map((account, i) => (
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
            <tr key={i}>
              <td>{account.info.account_num}</td>
              <td>{account.info.nickname}</td>
              <td>
                {capitalize(account.info.bank_name)}&nbsp;
                <img src={account.info.bank_logo} alt="logo" className="logo"/>   
              </td>
              <td>{capitalize(account.info.class)}</td>
              <td>{formatBalance(account.info.balance)}</td>
            </tr>
          </tbody>
        </Table>
      ))
    }
  </div>
);

export default Accounts;