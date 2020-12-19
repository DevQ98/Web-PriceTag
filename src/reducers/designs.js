import * as types from './../constants/ActionTypes' 
const initialState  = {
    changeSize: ''
}
    
function myReducer (state = initialState , action ){
    switch (action.type) {
        case types.ADDSIZE: return Object.assign({}, state, { changeSize: action.changeSize });
    
        default: return state
    }
}
export default myReducer;