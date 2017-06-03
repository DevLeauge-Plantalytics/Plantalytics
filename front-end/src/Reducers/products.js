/*jshint esversion: 6*/
import {LOAD_PRODUCTS_R, UPDATE_ARR_REQ, UPDATE_ARR_QUANT, ADD_PRODUCT, GET_PRODUCTS} from '../Actions';
const initialState = {
  productsR : [],
  productsS : [],
  products : []
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

    case ADD_PRODUCT:
      return Object.assign({}, state, {
        products: [action.product].concat(state.products),
        productsS: [action.product].concat(state.productsS)
      });

    case GET_PRODUCTS:
    console.log('hi');
      return Object.assign({}, state, {
        products: action.products,
        productsS: action.products
      });

    default:
      return state;
  }
};

export default products;