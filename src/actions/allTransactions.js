import {
  REQUEST_ALL_TRANSACTIONS, RECEIVE_ALL_TRANSACTIONS
} from '../constants';

export const requestAllTransactions = currentUser => ({
  type: REQUEST_ALL_TRANSACTIONS,
  currentUser
});

export const receiveAllTransactions = (currentUser, transactions) => ({
  type: RECEIVE_ALL_TRANSACTIONS,
  currentUser,
  transactions,
  receivedAt: Date.now()
});

const fetchAllTransactions = currentUser => dispatch => {
  dispatch(requestAllTransactions(currentUser));
  return fetch(`/api/${currentUser}/all-transactions`)
    .then(response => response.json())
    .then(json => dispatch(receiveAllTransactions(currentUser, json.trans)))
}

const shouldFetchAllTransactions = (state, currentUser) => {
  const transactions = state.fetchAllTransactions[currentUser];
  if (!transactions) {
    return true;
  }
  if (transactions.isFetching) {
    return false;
  }
  return transactions.didInvalidate;
}

export const fetchAllTransactionsIfNeeded = currentUser => (dispatch, getState) => {
  if (shouldFetchAllTransactions(getState(), currentUser)) {
    return dispatch(fetchAllTransactions(currentUser));
  }
}