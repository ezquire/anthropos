import {
  REQUEST_ACCOUNTS, RECEIVE_ACCOUNTS
} from '../constants';

export const requestAccounts = currentUser => ({
  type: REQUEST_ACCOUNTS,
  currentUser
});

export const receiveAccounts = (currentUser, accounts) => ({
  type: RECEIVE_ACCOUNTS,
  currentUser,
  accounts,
  receivedAt: Date.now()
});

const fetchAccounts = currentUser => dispatch => {
  dispatch(requestAccounts(currentUser));
  return fetch(`/api/${currentUser}/accounts`)
    .then(response => response.json())
    .then(json => dispatch(receiveAccounts(currentUser, json.nodes)))
}

const shouldFetchAccounts = (state, currentUser) => {
  const accounts = state.accountsByUser[currentUser];
  if (!accounts) {
    return true;
  }
  if (accounts.isFetching) {
    return false;
  }
  return accounts.didInvalidate;
}

export const fetchAccountsIfNeeded = currentUser => (dispatch, getState) => {
  if (shouldFetchAccounts(getState(), currentUser)) {
    return dispatch(fetchAccounts(currentUser));
  }
}