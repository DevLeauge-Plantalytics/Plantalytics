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
      return Object.assign({}, state, {
        RFQ_prod_offered: state.requests_for_quotations.interTableOff
                            .map(x => { if(x.Req_Prod_Offered.id == action.id){
                                          x.Req_Prod_Offered.quantity = action.quantity;
                                        }
                                        return x;
                                      }),

        RFQ_prod_requested: state.requests_for_quotations.interTableReq
                            .map(x => { if(x.Req_Prod_Requested.id == action.id){
                                          x.Req_Prod_Requested.quantity = action.quantity;
                                        }
                                        return x;
                                      }),
                                  });
    default:
      return state;
  }
};

export default requests;