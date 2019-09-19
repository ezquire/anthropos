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

const mapStateToProps = state => {
  const { currentUser = '5d746f6e8843a6305f774dbf', accountsByUser } = state;
  const {
    isFetching,
    lastUpdated,
    items: accounts
  } = accountsByUser[currentUser] || {
    isFetching: true,
    items: []
  }

  return {
    currentUser,
    accounts,
    isFetching,
    lastUpdated
  }
}

export default withRouter(connect(mapStateToProps)(AccountsOverview));