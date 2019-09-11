import { combineReducers } from 'redux';
import {
  REQUEST_TRANSACTIONS, RECEIVE_TRANSACTIONS
} from '../constants';

const transactions = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_TRANSACTIONS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
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

const rootReducer = combineReducers({
  transactionsByUser
});

export default rootReducer;