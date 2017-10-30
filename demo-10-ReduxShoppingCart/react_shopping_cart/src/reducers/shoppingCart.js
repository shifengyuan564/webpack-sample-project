import {ADD_TO_CART} from '../actions';

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        default:
            return state;
    }

}
