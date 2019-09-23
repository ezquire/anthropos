// React + Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'
// Actions
import {
  fetchTransactionsIfNeeded, fetchAccountsIfNeeded
} from '../../actions';
// Components
import TopNav from '../../components/Nav/TopNav';
import SideNav from '../../components/Nav/SideNav';
import RecentTrans from '../RecentTrans/RecentTrans';
import AllAccounts from '../AllAccounts/AllAccounts';
// Styling
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log(this.props);
    const { dispatch, authentication} = this.props;
    dispatch(fetchTransactionsIfNeeded(authentication.currentUser));
    dispatch(fetchAccountsIfNeeded(authentication.currentUser));
  }

  render() {
    const { accounts, transactions, isFetchingAccounts, isFetchingTransactions } = this.props;
    const isEmpty = accounts.length === 0 || transactions.length === 0;
    const isFetching = isFetchingAccounts || isFetchingTransactions;

    return (
      <div className="App">
        <Row style={{ height: "100%" }} noGutters="true">
          <Col sm='2' lg='2'>
            <SideNav />
          </Col>
          <Col>
            <Container>
              <TopNav />
              <div className="Container">
                {isEmpty ? (isFetching ? <h2>Loading...</h2> : <h2>No Recent Transactions</h2>) :
                  <Container style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Route
                      exact path="/app"
                      render={(props) => <RecentTrans {...props} transactions={transactions} />}
                    />
                    <Route
                      path="/app/accounts"
                      render={(props) => <AllAccounts {...props} accounts={accounts} />}
                    />
                  </Container>
                }
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { authentication, transactionsByUser, accountsByUser } = state;

  const {
    isFetchingTransactions,
    lastUpdatedTransactions,
    transactions,
  } = transactionsByUser[authentication.currentUser] || {
    isFetchingTransactions: true,
    transactions: []
  }

  const {
    isFetchingAccounts,
    lastUpdatedAccounts,
    accounts
  } = accountsByUser[authentication.currentUser] || {
    isFetchingAccounts: true,
    accounts: []
  }

  return {
    authentication,
    transactions,
    accounts,
    isFetchingTransactions,
    isFetchingAccounts,
    lastUpdatedTransactions,
    lastUpdatedAccounts
  }
}

export default withRouter(connect(mapStateToProps)(App));