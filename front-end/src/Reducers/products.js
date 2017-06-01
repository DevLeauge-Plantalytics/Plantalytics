/*jshint esversion: 6*/
import {LOAD_PRODUCTS_R, UPDATE_ARR_REQ, UPDATE_ARR_QUANT} from '../Actions';
const initialState = {
  productsR : [],
  productsS : []
};

const products = (state = initialState, action) => {
  switch(action.type){
    case LOAD_PRODUCTS_R:
      return Object.assign({}, state, {
        productsR: action.products.filter( x => { return Number(x.Owner_Id) === Number(localStorage.id);}),
        productsS: action.products.filter( x => { return Number(x.Owner_Id) !== Number(localStorage.id);})
      });

    case UPDATE_ARR_REQ:
      return Object.assign({}, state, {
        productsR: state.productsR.map( x => { if(x.id == action.id){ x.selected = action.bool; }return x;}),
        productsS: state.productsS.map( x => { if(x.id == action.id){ x.selected = action.bool; } return x;})
      });

    case UPDATE_ARR_QUANT:
      return Object.assign({}, state, {
        productsR: state.productsR.map( x => { if(x.id == action.id){ x.quantity = action.quantity; }return x;}),
        productsS: state.productsS.map( x => { if(x.id == action.id){ x.quantity = action.quantity; } return x;})
      });

    default:
      return state;
  }
};

export default products;