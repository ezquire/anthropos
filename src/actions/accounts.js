import {
    REQUEST_ACCOUNTS, RECEIVE_ACCOUNTS
  } from '../constants';
  
  export const requestAccounts = currentUser => ({
    type: REQUEST_ACCOUNTS,
    currentUser
  });
  
  export const receiveAccounts = (currentUser, transactions) => ({
    type: RECEIVE_ACCOUNTS,
    currentUser,
    transactions,
    receivedAt: Date.now()
  });
  
  const fetchAccounts = currentUser => dispatch => {
    dispatch(requestAccounts(currentUser));
    return fetch(`/api/${currentUser}/recent-transactions`)
      .then(response => response.json())
      .then(json => dispatch(receiveAccounts(currentUser, json.trans)))
  }
  
  const shouldFetchAccounts = (state, currentUser) => {
    const transactions = state.transactionsByUser[currentUser];
    if (!transactions) {
      return true;
    }
    if (transactions.isFetching) {
      return false;
    }
    return transactions.didInvalidate;
  }
  
  export const fetchAccountsIfNeeded = currentUser => (dispatch, getState) => {
    if (shouldFetchAccounts(getState(), currentUser)) {
      return dispatch(fetchAccounts(currentUser));
    }
  }