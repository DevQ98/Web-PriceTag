import * as types from './../constants/ActionTypes' 
const initialState  =  {
//    ArrayPRice :  [{id : "11" , body : "BLALD" , fontSize :16 , color : "#333" }] ,
    ArrayPRice :[] , 
    isActive : "" 
 }

const findIndex = (state , id) => {
    let result = -1 ;
    state.map((state, index) => {
        if(state.id == id)
        {
            result = index ;
        }
       
    });
    return result ;
}
function Price(state = initialState , action){
     console.log('redux Price' , action);
     console.log(state , "State add price")
    let arr = { id : action.id , body : action.body , fontWeight : action.fontWeight , fontStyle : action.fontStyle}
    let id = action.id
    let index = findIndex(state.ArrayPRice , id)
    switch (action.type) {
        
        case types.FillDATA :
            return action.data

        case types.ADDPRICE: 
        
        return  { ...state , 
                 ArrayPRice: [...state.ArrayPRice , arr] }
        
        case types.CHANGEBOLD :    
                console.log(state.ArrayPRice[index].fontWeight , "fontweight")
                state.ArrayPRice[index] =  { ...state.ArrayPRice[index] , fontWeight : state.ArrayPRice[index].fontWeight == 'bold' ? "normal" : "bold"}
                return { ...state ,
                    ArrayPRice : [...state.ArrayPRice]}
        case types.CHANGEITALIC :    
                console.log(state.ArrayPRice[index].Italic , "Italic")
                state.ArrayPRice[index] =  { ...state.ArrayPRice[index] , fontStyle : state.ArrayPRice[index].fontStyle == 'italic' ? "normal" : "italic"}
                return { ...state ,
                        ArrayPRice : [...state.ArrayPRice]}                   
        case types.ISTARGET : 
                return {
                    ... state ,
                    isActive : action.id                  
                }
        default : return state;  
        
        
    };

}
export default Price;