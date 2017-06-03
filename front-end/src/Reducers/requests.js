/*jshint esversion: 6*/
import {LOAD_REQUESTS, LOAD_REQUESTS_FOR_QUOTATIONS, UPDATE_QUANT_QUOTATIONS} from '../Actions';
const initialState = {
  requests: [],
  requests_for_quotations : [],
  RFQ_prod_offered : [],
  RFQ_prod_requested : [],
};

const requests = (state = initialState, action) => {
  switch(action.type){
    case LOAD_REQUESTS:
      return Object.assign({}, state, {
        requests: action.requests
      });
    case LOAD_REQUESTS_FOR_QUOTATIONS:
      return Object.assign({}, state, {
        requests_for_quotations: action.requests
      });
    case UPDATE_QUANT_QUOTATIONS:
      console.log(action.requestid);
      console.log(action.productid);
      console.log(action.quantity);
      console.log(state.requests_for_quotations.filter(x => { return x.id === action.requestid;})[0]);

      return Object.assign({}, state, {
        RFQ_prod_offered: state.requests_for_quotations.filter(x => { return x.id === action.requestid;})[0].interTableOff.map( y => { if(Number(y.id) === Number(action.productid)){
                                                              y.quantity = action.quantity;}
                                                              return y;}),
        RFQ_prod_requested: state.requests_for_quotations.filter(x => { return x.id === action.requestid;})[0].interTableReq.map( y => { if(Number(y.id) === Number(action.productid)){
                                                              y.quantity = action.quantity;}
                                                              return y;}),
      });

    default:
      return state;
  }
};

export default requests;