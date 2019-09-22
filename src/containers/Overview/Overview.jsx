// React + Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// Containers
import RecentTrans from '../RecentTrans/RecentTrans';
// Actions
import { fetchTransactionsIfNeeded } from '../../actions';

// Styling
import Container from 'react-bootstrap/Container';

class Overview extends Component {

  componentDidMount() {
    const { dispatch, currentUser } = this.props;
    dispatch(fetchTransactionsIfNeeded(currentUser));
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.currentUser !== this.props.currentUser) {
  //     const { dispatch, currentUser } = this.props;
  //     dispatch(fetchTransactionsIfNeeded(currentUser));
  //   }
  // }

  render() {
    const { transactions, isFetching } = this.props;
    const isEmpty = transactions.length === 0;
    return (
      <div className="Overview">
        {isEmpty ? (isFetching ? <h2>Loading...</h2> : <h2>No Recent Transactions</h2>) :
          <Container style={{ opacity: isFetching ? 0.5 : 1 }}>
            <RecentTrans transactions={transactions} />
            <AllAccounts accounts={accounts} />
          </Container>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser = '5d746f6e8843a6305f774dbf', transactionsByUser, accountsByUser } = state;
  const {
    isFetching,
    lastUpdated,
    items: transactions
  } = transactionsByUser[currentUser] || {
    isFetching: true,
    items: []
  }

  return {
    currentUser,
    transactions,
    isFetching,
    lastUpdated
  }
}

export default Overview;
// export default withRouter(connect(mapStateToProps)(Overview));