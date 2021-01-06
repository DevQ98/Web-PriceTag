import * as types from './../constants/ActionTypes' 

 const data = JSON.parse(localStorage.getItem('tem'));
 const initialState  = data ? data :  ""
//  const initialState = "";
console.log(data , "data")
 function Tem( state = initialState , action) {
    console.log(state ,"tessssssssssssm");
    console.log(action ," action tem");
    switch (action.type) {
        
      case types.SAVETEM :
             localStorage.setItem('tem_' , JSON.stringify(state))
          return {...state , state : action.html}

      
      default : return state;  
      
      
  };
 };
 export default Tem ;
 