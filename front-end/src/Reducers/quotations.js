/*jshint esversion: 6*/
import {ADD_QUOTATION, LOAD_TRADES_DONE} from '../Actions';
const initialState = {
  quotation: [],
  completed: [],
};

const quotations = (state = initialState, action) => {
  switch(action.type){
    case ADD_QUOTATION:
      return Object.assign({}, state, {
        quotation: action.quotation
      });

    case LOAD_TRADES_DONE:
      return Object.assign({}, state, {
        completed: action.trades
      });

    default:
      return state;
  }
};

export default quotations;