/*jshint esversion: 6*/
import {DISPLAY_DATA} from '../Actions';
const initialState = {
  locationData: []
};

const D3 = (state = initialState, action) => {
  switch(action.type){
    case DISPLAY_DATA:
      return Object.assign({}, state, {
        locationData: action.info
      });

    default:
      return state;
  }
};

export default D3;