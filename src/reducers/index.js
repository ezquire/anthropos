import { ADD_DONOR, DELETE_DONOR } from '../constants';

const donor = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

const removeById = (state = [], id) => {
    const donors = state.filter(donor => donor.id !== id);
    return donors;
}

const donors = (state = [], action) => {
    let donors = null;
    switch(action.type) {
        case ADD_DONOR: 
            donors = [...state, donor(action)]
            console.log('donors as state', donors);
            return donors;
        case DELETE_DONOR:
            donors = removeById(state, action.id);
            return donors;
        default:
            return state;
    }
}

export default donors;