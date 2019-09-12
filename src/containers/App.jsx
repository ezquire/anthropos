import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Nav';
import RecentTrans from './RecentTrans';
import '../App.css';
import { fetchTransactionsIfNeeded } from '../actions';

class App extends Component {

  componentDidMount() {
    const { dispatch, currentUser } = this.props;
    dispatch(fetchTransactionsIfNeeded(currentUser));
  }

  componentDidUpdate(prevProps) {
    if(prevProps.currentUser !== this.props.currentUser) {
      const { dispatch, currentUser } = this.props;
      dispatch(fetchTransactionsIfNeeded(currentUser));
    }
  }

  render() {
    const { transactions, isFetching } = this.props;
    const isEmpty = transactions.length === 0;
    return (
      <div className="App">
        <Navigation />
        { isEmpty ? (isFetching ? <h2>Loading...</h2> : <h2>No Recent Transactions</h2>) : 
          <div style={{ opacity: isFetching ? 0.5 : 1}}>
            <RecentTrans trasactions={transactions}/>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser = '5d746f6e8843a6305f774dbf', transactionsByUser } = state;
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

export default connect(mapStateToProps)(App);