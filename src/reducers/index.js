import { combineReducers } from 'redux';
import price from './Price';
import Tem from './Tem'
const myReducer = combineReducers({
    Price : price,
    Tem : Tem
});  

export default myReducer ;