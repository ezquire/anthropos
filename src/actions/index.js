import client from '../client.js';
import { 
    REQUEST_TRANSACTIONS, RECEIVE_TRANSACTIONS, INVALIDATE_USER 
} from '../constants';

export const invalidateUser = currentUser => ({
    type: INVALIDATE_USER,
    currentUser
});

export const requestTransactions = currentUser => ({
    type: REQUEST_TRANSACTIONS,
    currentUser
});

export const receiveTransactions = (currentUser, transactions) => ({
    type: RECEIVE_TRANSACTIONS,
    currentUser,
    transactions: transactions,
    receivedAt: Date.now()
});

const fetchTransactions = currentUser => async dispatch => {
    dispatch(requestTransactions(currentUser));
    try {
        const user = await client.getUser(currentUser);
        const { data } = user.getUserTransactions();
        dispatch(receiveTransactions(currentUser, data.trans));
    }
    catch (error) {
        console.log(error);
    }
}

const shouldFetchTransactions = (state, currentUser) => {
    const transactions = state.transactionsByUser[ currentUser];
    if(!transactions) {
        return true;
    }
    if (transactions.isFetching) {
        return false;
    }
    return transactions.didInvalidate;
}

export const fetchTransactionsIfNeeded = currentUser => (dispatch, getState) => {
    if(shouldFetchTransactions(getState(), currentUser)) {
        return dispatch(fetchTransactions(currentUser));
    }
}