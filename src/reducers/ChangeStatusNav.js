import * as types from './../constants/ActionTypes' 
const initialState  = {
    Status: false
}
    
function ChangeStatusNav (state = initialState , action ){
    switch (action.type) {
        case types.CHANGESTATUSNAV: return Object.assign({}, state, { Status: action.Status });
    
        default: return state
    }
}
export default ChangeStatusNav;