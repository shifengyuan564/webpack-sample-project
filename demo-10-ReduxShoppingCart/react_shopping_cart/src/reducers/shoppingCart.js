import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions';

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART: {
            const keepItem = (param) => {
                return param.id !== action.payload
            };
            return state.filter(keepItem);
        }

        default:
            return state;
    }

}
