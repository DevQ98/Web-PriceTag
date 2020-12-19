import { combineReducers } from 'redux';
import designs  from './designs';
import ChangeStatusNav  from './ChangeStatusNav';

const myReducer = combineReducers({
    Designs: designs,
    ChangeStatusNav: ChangeStatusNav
});  

export default myReducer ;