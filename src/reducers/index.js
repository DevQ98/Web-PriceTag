import { combineReducers } from 'redux';
import price from './Price';
const myReducer = combineReducers({
    Price : price,
});  

export default myReducer ;