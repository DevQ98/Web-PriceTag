import { ADDNAME, ADDPRICE , CHANGEALIGNCENTER, CHANGEALIGNLEFT, CHANGEALIGNRIGHT, 
    CHANGEBOLD, CHANGEITALIC, CHANGELINEHEIGHT, CHANGEBULLET, ISTARGET, SAVETEM, SHOWTEM } from './../constants/ActionTypes';



export function addPrice (id ,body , fontWeight , textAlign , bullet , lineHeight) {
    return {
        type: ADDPRICE,
        id ,
        body,
        fontWeight,
        textAlign,
        bullet,
        lineHeight
    }
    
}
export function changeBold( id ) {
    return {
        type : CHANGEBOLD,
        id,
    }
    
}
export function changeAlignLeft( id ) {
    return {
        type : CHANGEALIGNLEFT,
        id,
    }
    
}
export function changeAlignCenter( id ) {
    return {
        type : CHANGEALIGNCENTER,
        id,
    }
    
}
export function changeAlignRight( id ) {
    return {
        type : CHANGEALIGNRIGHT,
        id,
    }
    
}
export function changeBullet( id ) {
    return {
        type : CHANGEBULLET,
        id,
    }
    
}
export function changeLineHeight( id ) {
    return {
        type : CHANGELINEHEIGHT,
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
export function  saveTem(  html) {
    return {
        type : SAVETEM,
        
        html
    }
    
}
export function  showTem( id , html) {
    return  {
        type : SHOWTEM,
        id , 
        html
    }
}