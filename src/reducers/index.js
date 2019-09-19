import { combineReducers } from 'redux';
import {
  REQUEST_TRANSACTIONS, RECEIVE_TRANSACTIONS, REQUEST_ACCOUNTS, RECEIVE_ACCOUNTS, SIGNED_IN
} from '../constants';

const loggedUser = (state = { }, action) => {
  switch (action.type) {
    case SIGNED_IN:
      return action.email
    default:
      return state
  }
}

const transactions = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_TRANSACTIONS:
      return {
        ...state,
        isFetching: false,
        items: action.transactions,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}

const transactionsByUser = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
    case REQUEST_TRANSACTIONS:
      return {
        ...state,
        [action.currentUser]: transactions(state[action.currentUser], action)
      };
    default:
      return state;
  }
}

const accounts = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_ACCOUNTS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_ACCOUNTS:
      return {
        ...state,
        isFetching: false,
        items: action.accounts,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}

const accountsByUser = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_ACCOUNTS:
    case REQUEST_ACCOUNTS:
      return {
        ...state,
        [action.currentUser]: accounts(state[action.currentUser], action)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  loggedUser,
  accountsByUser,
  transactionsByUser
});

export default rootReducer;