import { ADDSIZE, CHANGESTATUSNAV } from './../constants/ActionTypes';

export function addSize (sizes) {
   
    return {
        type: ADDSIZE,
        changeSize: sizes
    }
};

export function ChangeStatusNav (status) {
    return {
        type: CHANGESTATUSNAV,
        Status: status
    }
};