import { combineReducers } from 'redux';
import price from './Price';
import Name from './Name';

const myReducer = combineReducers({
    Price : price,
    Name : Name
});  

export default myReducer ;