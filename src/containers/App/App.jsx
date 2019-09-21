// React + Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Route } from "react-router-dom";
// Actions
import {
  fetchTransactionsIfNeeded,
  fetchAccountsIfNeeded
} from '../../actions';
// Components
import TopNav from '../../components/Nav/TopNav';
import SideNav from '../../components/Nav/SideNav';
import RecentTrans from '../RecentTrans/RecentTrans';
import AllAccounts from '../AllAccounts/AllAccounts';
// Containers
// import Overview from '../Overview/Overview';
// import AllAccounts from '../AccountsOverview/AccountsOverview';
// Styling
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';

class App extends Component {

  componentDidMount() {
    const { dispatch, currentUser } = this.props;
    dispatch(fetchTransactionsIfNeeded(currentUser));
  }

  componentDidUpdate() {
    const { dispatch, currentUser } = this.props;
    dispatch(fetchAccountsIfNeeded(currentUser));
  }

  render() {
    const { accounts, transactions, isFetching } = this.props;
    console.log("in render: ", this.props);
    const isEmpty = false;
    //accounts.length === 0 && transactions.length === 0;
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
                    {/* <RecentTrans transactions={transactions} />
                    <AllAccounts accounts={accounts} /> */}
                  </Container>
                }
              </div>
              {/* <Route exact path="/app" component={Overview} />
              <Route path="/app/accounts" component={AllAccounts} /> */}
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state:", state);
  const { currentUser = '5d746f6e8843a6305f774dbf', transactionsByUser, accountsByUser } = state;
  const {
    isFetching,
    lastUpdated,
    transactions,
    accounts
  } = (transactionsByUser[currentUser] && accountsByUser[currentUser]) || {
    isFetching: true,
    transactions: [],
    accounts: []
  }

  return {
    currentUser,
    transactions,
    accounts,
    isFetching,
    lastUpdated
  }
}

export default withRouter(connect(mapStateToProps)(App));