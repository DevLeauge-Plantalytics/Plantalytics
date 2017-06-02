/*jshint esversion: 6*/
import {ADD_QUOTATION} from '../Actions';
const initialState = {
  quotation: [],
};

const quotations = (state = initialState, action) => {
  switch(action.type){
    case ADD_QUOTATION:
      return Object.assign({}, state, {
        quotation: action.quotation
      });

    default:
      return state;
  }
};

export default quotations;