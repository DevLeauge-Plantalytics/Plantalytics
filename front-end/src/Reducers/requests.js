/*jshint esversion: 6*/
import {LOAD_PRODUCTS_R} from '../Actions';
const initialState = {
  request: []
};

const products = (state = initialState, action) => {
  switch(action.type){
    case LOAD_PRODUCTS_R:
      return Object.assign({}, state, {
        request: action.request
      });

    default:
      return state;
  }
};

export default products;