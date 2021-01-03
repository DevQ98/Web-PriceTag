import * as types from './../constants/ActionTypes' 
const initialState  =  {
//    ArrayPRice :  [{id : "11" , body : "BLALD" , fontSize :16 , color : "#333" }] ,
    ArrayName :[] , 
    isActive : "" 
 }


function Name(state = initialState , action){
     console.log('redux' , action);
    let arr = { id : action.id , body : action.body , fontWeight : action.fontWeight}
    switch (action.type) {
        

        case types.ADDNAME: 

            return   { ...state, ArrayName: [...state.ArrayName, arr]
        
        }
          
       
        default : return state;  
        
        
    };

}
export default Name;