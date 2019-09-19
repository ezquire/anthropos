// React + Redux
import React, { Component } from 'react';
import { Route } from "react-router-dom";
// Components
import TopNav from '../../components/Nav/TopNav';
import SideNav from '../../components/Nav/SideNav';
// Containers
import Overview from '../Overview/Overview';
import Accounts from '../Accounts/Accounts';
// Styling
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Row style={{ height: "100%" }} noGutters="true">
          <Col sm='2' lg='2'>
            <SideNav />
          </Col>
          <Col>
            <Container>
              <TopNav />
              <Route exact path="/app" component={Overview} />
              <Route path="/app/accounts" component={Accounts} />
              {/* <Route path="/app/transactions" component={Transactions} /> */}
              {/* <Route path="/app/payments" component={Payments} /> */}
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