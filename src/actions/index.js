import {
  REQUEST_TRANSACTIONS, RECEIVE_TRANSACTIONS
} from '../constants';


export const requestTransactions = currentUser => ({
  type: REQUEST_TRANSACTIONS,
  currentUser
});

export const receiveTransactions = (currentUser, transactions) => ({
  type: RECEIVE_TRANSACTIONS,
  currentUser,
  transactions: transactions.map(),
  receivedAt: Date.now()
});

const fetchTransactions = currentUser => dispatch => {
  dispatch(requestTransactions(currentUser));
  return fetch('/api/test')
    .then(res => res.json())
    .then(res => {
      if(res.error) {
        throw(res.error);
      }
    })
    .catch(error => {
      console.log(error);
    })
}

const shouldFetchTransactions = (state, currentUser) => {
  const transactions = state.transactionsByUser[currentUser];
  if (!transactions) {
    return true;
  }
  if (transactions.isFetching) {
    return false;
  }
  return transactions.didInvalidate;
}

export const fetchTransactionsIfNeeded = currentUser => (dispatch, getState) => {
  if (shouldFetchTransactions(getState(), currentUser)) {
    return dispatch(fetchTransactions(currentUser));
  } else {
    return Promise.resolve();
  }
}