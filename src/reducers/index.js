import { combineReducers } from 'redux';
import {
  REQUEST_TRANSACTIONS, REQUEST_ALL_TRANSACTIONS, RECEIVE_ALL_TRANSACTIONS, RECEIVE_TRANSACTIONS, REQUEST_ACCOUNTS, RECEIVE_ACCOUNTS, LOGIN_REQUEST, 
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT
} from '../constants';

const authentication = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true,
        currentUser: action.currentUser
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        currentUser: action.currentUser
      };
    case LOGIN_FAILURE:
      return {};
    case LOGOUT:
      return {};
    default:
      return state
  }
}

const info = (state = {
  isFetchingTransactions: false,
  isFetchingAllTransactions: false,
  isFetchingAccounts: false,
  transactions: [],
  allTransactions: [],
  accounts: []
}, action) => {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
      return {
        ...state,
        isFetchingTransactions: true,
      };
    case REQUEST_ALL_TRANSACTIONS:
      return {
        ...state,
        isFetchingAllTransactions: true,
      };
    case REQUEST_ACCOUNTS:
      return {
        ...state,
        isFetchingAccounts: true
      }
    case RECEIVE_TRANSACTIONS:
      return {
        ...state,
        isFetchingTransactions: false,
        transactions: action.transactions,
        lastUpdated: action.receivedAt
      };
    case RECEIVE_ALL_TRANSACTIONS:
      return {
        ...state,
        isFetchingAllTransactions: false,
        allTransactions: action.allTransactions,
        lastUpdated: action.receivedAt
      };
    case RECEIVE_ACCOUNTS:
      return {
        ...state,
        isFetchingAccounts: false,
        accounts: action.accounts,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}

const transactionsByUser = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
    case REQUEST_TRANSACTIONS:
      return {
        ...state,
        [action.currentUser]: info(state[action.currentUser], action)
      };
    default:
      return state;
  }
}

const allTransactionsByUser = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_TRANSACTIONS:
    case REQUEST_ALL_TRANSACTIONS:
      return {
        ...state,
        [action.currentUser]: info(state[action.currentUser], action)
      };
    default:
      return state;
  }
}

const accountsByUser = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ACCOUNTS:
    case REQUEST_ACCOUNTS:
      return {
        ...state,
        [action.currentUser]: info(state[action.currentUser], action)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  authentication,
  accountsByUser,
  transactionsByUser,
  allTransactionsByUser
});

export default rootReducer;