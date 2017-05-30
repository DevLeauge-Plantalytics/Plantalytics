/*jshint esversion: 6*/
import {GET_LATLONG} from '../Actions';
const initialState = {

};

const locations = (state = initialState, action) => {
  switch(action.type){

    case GET_LATLONG:
      return Object.assign({}, state, {

      });

    default:
      return state;
  }
};

export default locations;