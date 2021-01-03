import { ADDNAME, ADDPRICE , CHANGEBOLD, CHANGEITALIC, ISTARGET } from './../constants/ActionTypes';



export function addPrice (id ,body , fontWeight ) {
    return {
        type: ADDPRICE,
        id ,
        body,
        fontWeight
    }
    
}
export function changeBold( id ) {
    return {
        type : CHANGEBOLD,
        id,
    }
    
}
export function  changeItalic(id) {
    return {
        type : CHANGEITALIC,
        id,
    }
}
export function  isTarget (id) {
    return{
        type : ISTARGET,
        id
    }
}
export function  addName( id , body , fontWeight , fontStyle) {
    return {
        type : ADDNAME,
        id,
        body,
        fontWeight ,
        fontStyle
    }
    
}