import { ADD_DONOR, DELETE_DONOR } from '../constants';

export const addDonor = (text) => {
    const action = {
        type: ADD_DONOR,
        text
    }
    return action;
}

export const deleteDonor = (id) => {
    const action = {
        type: DELETE_DONOR,
        id
    }
    console.log('deleting in actions', action);
    return action;
}