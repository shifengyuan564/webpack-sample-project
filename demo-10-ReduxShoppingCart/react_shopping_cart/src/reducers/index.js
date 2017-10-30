import {combineReducers} from 'redux';
import itemReducer from './item';
import shoppingCartReducer from './shoppingCart';

const rootReducer = combineReducers({
    itemsRD:itemReducer,
    shoppingCartRD:shoppingCartReducer
});

export default rootReducer;