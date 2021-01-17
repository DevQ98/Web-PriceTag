import * as types from './../constants/ActionTypes';

const data = JSON.parse(localStorage.getItem('tem'));
const initialState = data ? data : '';
//  const initialState = "";
function Tem(state = initialState, action) {
  switch (action.type) {
    case types.SAVETEM:
      localStorage.setItem('tem_', JSON.stringify(state));
      return { ...state, state: action.html };

    default:
      return state;
  }
}
export default Tem;
