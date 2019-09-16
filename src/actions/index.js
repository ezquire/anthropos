import {
  REQUEST_TRANSACTIONS, RECEIVE_TRANSACTIONS, SIGNED_IN
} from '../constants'; 

export const requestTransactions = currentUser => ({
  type: REQUEST_TRANSACTIONS,
  currentUser
});

export const receiveTransactions = (currentUser, transactions) => ({
  type: RECEIVE_TRANSACTIONS,
  currentUser,
  transactions,
  receivedAt: Date.now()
});

export const logUser = email => ({
  type: SIGNED_IN,
  email
});

const fetchTransactions = currentUser => dispatch => {
  dispatch(requestTransactions(currentUser));
  return fetch(`/api/${currentUser}/recent-transactions`)
    .then(response => response.json())
    .then(json => dispatch(receiveTransactions(currentUser, json.trans)))
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
  }
}