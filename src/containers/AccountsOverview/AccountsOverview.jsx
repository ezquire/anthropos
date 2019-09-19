// React + Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Containers
import AllAccounts from '../../containers/AllAccounts/AllAccounts';
// Actions
import { fetchAccountsIfNeeded } from '../../actions';
// Styling
import Container from 'react-bootstrap/Container';

class AccountsOverview extends Component {

  componentDidMount() {
    const { dispatch, currentUser } = this.props;
    dispatch(fetchAccountsIfNeeded(currentUser));
  }

  render() {
    const { accounts, isFetching } = this.props;
    const isEmpty = accounts.length === 0;
    return (
      <div className="Accounts">
        {isEmpty ? (isFetching ? <h2>Loading...</h2> : <h2>No Accounts</h2>) :
          <Container style={{ opacity: isFetching ? 0.5 : 1 }}>
            <AllAccounts accounts={accounts} />
          </Container>
        }
      </div>
    )
  }
}

export default AccountsOverview;