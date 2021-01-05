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
    let arr = { id : action.id , body : action.body , fontWeight : action.fontWeight , 
        fontStyle : action.fontStyle  , bullet : action.bullet , lineHeight : action.lineHeight}
    let id = action.id
    let index = findIndex(state.ArrayPRice , id)
    switch (action.type) {
        
        case types.FillDATA :
            return action.data

        case types.ADDPRICE: 
        
        return  { ...state , 
                 ArrayPRice: [...state.ArrayPRice , arr] }
        
        case types.CHANGEBOLD :    
                if( index < 0)
                    return state
                else {
                    state.ArrayPRice[index] =  { ...state.ArrayPRice[index] , fontWeight : state.ArrayPRice[index].fontWeight == 'bold' ? "normal" : "bold"}
                    return { ...state ,
                        ArrayPRice : [...state.ArrayPRice]}
                }
               
        case types.CHANGEITALIC :  
                if(index <0)
                {
                    return state
                }
                else
                {
                    state.ArrayPRice[index] =  { ...state.ArrayPRice[index] , fontStyle : state.ArrayPRice[index].fontStyle == 'italic' ? "normal" : "italic"}
                    return { ...state ,
                            ArrayPRice : [...state.ArrayPRice]}     
                }
        case types.CHANGEALIGNLEFT :  
                if(index <0)
                {
                    return state
                }
                else
                {
                    state.ArrayPRice[index] =  { ...state.ArrayPRice[index] , textAlign : state.ArrayPRice[index].textAlign == 'left' ? "" : "left"}
                    return { ...state ,
                            ArrayPRice : [...state.ArrayPRice]}     
                }
        case types.CHANGEALIGNCENTER :  
                if(index <0)
                {
                    return state
                }
                else
                {
                    console.log(state.ArrayPRice[index].textAlign , "center")
                    state.ArrayPRice[index] =  { ...state.ArrayPRice[index] , textAlign : state.ArrayPRice[index].textAlign == 'center' ? "" : "center"}
                    return { ...state ,
                            ArrayPRice : [...state.ArrayPRice]}     
                }
        case types.CHANGEALIGNRIGHT :  
                if(index <0)
                {
                    return state
                }
                else
                {
                    console.log(state.ArrayPRice[index].textAlign , "right")
                    state.ArrayPRice[index] =  { ...state.ArrayPRice[index] , textAlign : state.ArrayPRice[index].textAlign == 'right' ? "" : "right"}
                    return { ...state ,
                            ArrayPRice : [...state.ArrayPRice]}     
                }
                                    
        case types.CHANGEITALIC :  
                if(index <0)
                {
                    return state
                }
                else
                {
                    console.log(state.ArrayPRice[index].Italic , "Italic")
                    state.ArrayPRice[index] =  { ...state.ArrayPRice[index] , fontStyle : state.ArrayPRice[index].fontStyle == 'italic' ? "normal" : "italic"}
                    return { ...state ,
                            ArrayPRice : [...state.ArrayPRice]}     
                }
        case types.CHANGEBULLET :  
                if(index <0)
                {
                    return state
                }
                else
                {
                    console.log(state.ArrayPRice[index].bullet , "circle")
                    state.ArrayPRice[index] =  { ...state.ArrayPRice[index] , bullet : state.ArrayPRice[index].bullet == 'circle' ? "none" : "circle"}
                    return { ...state ,
                            ArrayPRice : [...state.ArrayPRice]}     
                }
        case types.CHANGELINEHEIGHT :  
                if(index <0)
                {
                    return state
                }
                else
                {
                    console.log(state.ArrayPRice[index].lineHeight , "1.6")
                    state.ArrayPRice[index] =  { ...state.ArrayPRice[index] , lineHeight : state.ArrayPRice[index].lineHeight == '1.6' ? "normal" : "1.6"}
                    return { ...state ,
                            ArrayPRice : [...state.ArrayPRice]}     
                }
                                                 
        case types.ISTARGET : 
                return {
                    ... state ,
                    isActive : action.id                  
                }
        default : return state;  
        
        
    };

}
export default Price;