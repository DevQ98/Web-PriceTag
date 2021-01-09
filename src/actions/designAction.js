import { ADDNAME, ADDPRICE , CHANGEALIGNCENTER, CHANGEALIGNLEFT, CHANGEALIGNRIGHT, ADDTEMPLATE, CHANGECOLOR,
    CHANGEBOLD, CHANGEITALIC, CHANGELINEHEIGHT, CHANGEBULLET, ISTARGET, SAVETEM, SHOWTEM, SAVEELEMENT ,CHANGESIZE, CLEARELEMENT } from './../constants/ActionTypes';



export function addPrice (id ,body , fontWeight , textAlign , bullet , lineHeight , transform  , size ) {
    return {
        type: ADDPRICE,
        id ,
        body,
        fontWeight,
        textAlign,
        bullet,
        lineHeight,
        transform,
        size
    }
    
}
export function clearElement ( ) {
    return {
        type : CLEARELEMENT,
    }
}
export function  changeSize(id , size) {
    return {
        type : CHANGESIZE,
        id ,
        size
    }
}
export function  changeColor(id , color) {
    return {
        type : CHANGECOLOR,
        id ,
        color
    }
}
export function  saveElement( id , transform ) {
    return {
        type : SAVEELEMENT,
        id,
        transform
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
export function  addTemplate ( height , width) {
    return{
        type : ADDTEMPLATE,
        height,
        width
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