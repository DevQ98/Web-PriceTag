import * as types from './../constants/ActionTypes'
import * as store from './store'

const PriceData = JSON.parse(localStorage.getItem('Price'));
const initialState = PriceData ? PriceData : store.PriceTag;

const findIndex = (state, id) => {
    let result = -1;
    state.map((state, index) => {
        if (state.id == id) {
            result = index;
        }

    });
    return result;
}
function Price(state = initialState, action) {
    console.log(store.PriceTag, " data redux")
    console.log('redux Price', action);
    console.log(initialState, "Init add price")

    console.log(state, "State add price")
    let arr = {
        id: action.id, body: action.body, fontWeight: action.fontWeight, transform: action.transform,
        fontStyle: action.fontStyle, bullet: action.bullet, lineHeight: action.lineHeight, size: action.size, color: action.color
    }
    let id = action.id
    let index = findIndex(state.ArrayPRice, id)
    console.log(state, "state data")

    switch (action.type) {

        case types.FillDATA:
            return action.data

        case types.ADDPRICE:
            let arrrIndex = [];
            arrrIndex.push(arr);
            let obj = {
                ...state,
                ArrayPRice: [...state.ArrayPRice, arr]

            }
            localStorage.setItem('Price', JSON.stringify(obj))
            return {
                ...state,
                ArrayPRice: [...state.ArrayPRice, arr]
            }

        case types.CHANGEBOLD:
            if (index < 0)
                return state
            else {
                console.log(state, "bold")
                state.ArrayPRice[index] = { ...state.ArrayPRice[index], fontWeight: state.ArrayPRice[index].fontWeight == 'bold' ? "normal" : "bold" }
                localStorage.setItem('Price', JSON.stringify(state))

                return {
                    ...state,
                    ArrayPRice: [...state.ArrayPRice]
                }
            }

        case types.CHANGEITALIC:
            if (index < 0) {
                return state
            }
            else {
                state.ArrayPRice[index] = { ...state.ArrayPRice[index], fontStyle: state.ArrayPRice[index].fontStyle == 'italic' ? "normal" : "italic" }
                localStorage.setItem('Price', JSON.stringify(state))

                return {
                    ...state,
                    ArrayPRice: [...state.ArrayPRice]
                }
            }
        case types.CHANGEALIGNLEFT:
            if (index < 0) {
                return state
            }
            else {
                state.ArrayPRice[index] = { ...state.ArrayPRice[index], textAlign: state.ArrayPRice[index].textAlign == 'left' ? "" : "left" }
                localStorage.setItem('Price', JSON.stringify(state))

                return {
                    ...state,
                    ArrayPRice: [...state.ArrayPRice]
                }
            }
        case types.CHANGEALIGNCENTER:
            if (index < 0) {
                return state
            }
            else {
                console.log(state.ArrayPRice[index].textAlign, "center")
                state.ArrayPRice[index] = { ...state.ArrayPRice[index], textAlign: state.ArrayPRice[index].textAlign == 'center' ? "" : "center" }
                localStorage.setItem('Price', JSON.stringify(state))

                return {
                    ...state,
                    ArrayPRice: [...state.ArrayPRice]
                }
            }
        case types.CHANGEALIGNRIGHT:
            if (index < 0) {
                return state
            }
            else {
                console.log(state.ArrayPRice[index].textAlign, "right")
                state.ArrayPRice[index] = { ...state.ArrayPRice[index], textAlign: state.ArrayPRice[index].textAlign == 'right' ? "" : "right" }
                localStorage.setItem('Price', JSON.stringify(state))

                return {
                    ...state,
                    ArrayPRice: [...state.ArrayPRice]
                }
            }

        case types.CHANGEITALIC:
            if (index < 0) {
                return state
            }
            else {
                console.log(state.ArrayPRice[index].Italic, "Italic")

                state.ArrayPRice[index] = { ...state.ArrayPRice[index], fontStyle: state.ArrayPRice[index].fontStyle == 'italic' ? "normal" : "italic" }
                localStorage.setItem('Price', JSON.stringify(state))

                return {
                    ...state,
                    ArrayPRice: [...state.ArrayPRice]
                }
            }
        case types.CHANGEBULLET:
            if (index < 0) {
                return state
            }
            else {
                console.log(state.ArrayPRice[index].bullet, "circle")
                state.ArrayPRice[index] = { ...state.ArrayPRice[index], bullet: state.ArrayPRice[index].bullet == 'circle' ? "none" : "circle" }
                localStorage.setItem('Price', JSON.stringify(state))

                return {
                    ...state,
                    ArrayPRice: [...state.ArrayPRice]
                }
            }
        case types.CHANGELINEHEIGHT:
            if (index < 0) {
                return state
            }
            else {
                console.log(state.ArrayPRice[index].lineHeight, "1.6")
                state.ArrayPRice[index] = { ...state.ArrayPRice[index], lineHeight: state.ArrayPRice[index].lineHeight == '5' ? "normal" : "5" }
                localStorage.setItem('Price', JSON.stringify(state))

                return {
                    ...state,
                    ArrayPRice: [...state.ArrayPRice]
                }
            }
        case types.CHANGESIZE:
            if (index < 0) {
                return state
            }
            else {
                console.log(state.ArrayPRice[index].size, "changesize s")
                state.ArrayPRice[index] = { ...state.ArrayPRice[index], size: action.size }
                localStorage.setItem('Price', JSON.stringify(state))

                return {
                    ...state,
                    ArrayPRice: [...state.ArrayPRice]
                }
            }
        case types.CHANGECOLOR:
            if (index < 0) {
                return state
            }
            else {
                console.log(state.ArrayPRice[index].color, "changesize s")
                state.ArrayPRice[index] = { ...state.ArrayPRice[index], color: action.color }
                localStorage.setItem('Price', JSON.stringify(state))

                return {
                    ...state,
                    ArrayPRice: [...state.ArrayPRice]
                }
            }
        case types.ISTARGET:
            return {
                ...state,
                isActive: action.id
            }
        case types.ADDTEMPLATE:
            {
                let obj = {
                    ...state,
                    height: action.height,
                    width: action.width
                }

                localStorage.setItem('Price', JSON.stringify(obj))
                return {
                    ...state,
                    height: action.height,
                    width: action.width
                }

            }




        case types.SAVEELEMENT:
            if (index < 0) {
                return state
            }
            else {
                console.log(state.ArrayPRice[index].transform, action, "transform in Price")
                state.ArrayPRice[index] = { ...state.ArrayPRice[index], transform: action.transform }
                localStorage.setItem('Price', JSON.stringify(state))

                return {
                    ...state,
                    ArrayPRice: [...state.ArrayPRice]
                }
            }
        case types.CLEARELEMENT:
            localStorage.clear()
            console.log(state, "state .ss  ")
            return state
        default: return state;


    };

}
export default Price;