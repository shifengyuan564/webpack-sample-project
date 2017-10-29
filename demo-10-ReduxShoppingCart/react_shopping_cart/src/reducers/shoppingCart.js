const INIT_STATE = [];

//import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

export default ( state = INIT_STATE, action ) => {

    switch(action.type) {
        case 'ADD_TO_CART':
            return [ ...state, action.payload ];
        default:
            return state;
    }

}
