import * as types from './../constants/ActionTypes' 
const initialState  =  {
//    ArrayPRice :  [{id : "11" , body : "BLALD" , fontSize :16 , color : "#333" }] ,
    ArrayPRice :[] , 
    isActive : "" 
 }


function Price(state = initialState , action){
     console.log('redux' , action);
    let arr = { id : action.id , body : action.body , fontWeight : action.fontWeight}
    switch (action.type) {
        
        case types.FillDATA :
            return action.data

        case types.ADDPRICE: 

        return   { ...state, ArrayPRice: [...state.ArrayPRice, arr]
        
        }
          
        case types.CHANGEBOLD :    
            return {...state ,
                       ArrayPRice :[  { id : action.id,  body : "aas", fontWeight : "bold"}]
            }
            // return { ...state ,
            //             ArrayPRice : [ 
            //                 ...state.ArrayPRice.slice(0,2),
            //                 {...state.ArrayPRice[2],fontWeight:"bold"},
            //                 ...state.ArrayPRice.slice(3),
            //             ]}
        case types.ISTARGET : 
        console.log(action , "action")
                return {
                    ... state ,
                    isActive : action.id                  
                }
        default : return state;  
        
        
    };

}
export default Price;