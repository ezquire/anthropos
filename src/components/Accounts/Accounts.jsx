import React from 'react';
import './Accounts.css';

const formatAccountNickname = ({ account }) => {
    return "Donations";
}


const Accounts = ({ accounts }) => (
    <div>
      {
        accounts.map((account, i) => (
          <div key={i}>
            <div className="account">
              <span className="nickname">{formatAccountNickname({ account })}</span>
              {/* <div className="amount">{formatAccountAmount({ account })}</div> */}
            </div>
            <hr />
          </div>))
      }
    </div>
  );
  
  export default Accounts;