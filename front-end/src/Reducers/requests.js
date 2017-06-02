/*jshint esversion: 6*/
import {LOAD_REQUESTS, LOAD_REQUESTS_FOR_QUOTATIONS} from '../Actions';
const initialState = {
  requests: [],
  requests_for_quotations : []
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

    default:
      return state;
  }
};

export default requests;