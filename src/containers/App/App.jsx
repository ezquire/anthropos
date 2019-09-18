// React + Redux
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// Components
import TopNav from '../../components/Nav/TopNav';
import SideNav from '../../components/Nav/SideNav';
// Containers
import Overview from '../Overview/Overview';
// Actions
// import { fetchTransactionsIfNeeded } from '../../actions';
// Styling
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';

class App extends Component {

  // componentDidMount() {
  //   const { dispatch, currentUser } = this.props;
  //   dispatch(fetchTransactionsIfNeeded(currentUser));
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.currentUser !== this.props.currentUser) {
  //     const { dispatch, currentUser } = this.props;
  //     dispatch(fetchTransactionsIfNeeded(currentUser));
  //   }
  // }

  render() {
    // const { transactions, isFetching } = this.props;
    // const isEmpty = transactions.length === 0;
    // console.log("transactions in App.jsx:", transactions);
    return (
      <div className="App">
        <Row style={{ height: "100%" }} noGutters="true">
          <Col sm='2' lg='2'>
            <SideNav />
          </Col>
          <Col>
            <Container>
              <TopNav />
              {/* {isEmpty ? (isFetching ? <h2>Loading...</h2> : <h2>No Recent Transactions</h2>) :
                <Container style={{ opacity: isFetching ? 0.5 : 1 }}>
                  <RecentTrans transactions={transactions} />
                </Container>
              } */}
              <Overview />
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   const { currentUser = '5d746f6e8843a6305f774dbf', transactionsByUser } = state;
//   const {
//     isFetching,
//     lastUpdated,
//     items: transactions
//   } = transactionsByUser[currentUser] || {
//     isFetching: true,
//     items: []
//   }

//   return {
//     currentUser,
//     transactions,
//     isFetching,
//     lastUpdated
//   }
// }

// export default connect(mapStateToProps)(App);
export default App;