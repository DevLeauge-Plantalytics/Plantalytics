/*jshint esversion: 6*/
import {GET_D3_RAIN, GET_D3_TEMP, DISPLAY_DATA} from '../Actions';
const initialState = {
  rain: [],
  temp: [],
  locationData: []
};

const D3 = (state = initialState, action) => {
  switch(action.type){
    case GET_D3_RAIN:
      return Object.assign({}, state, {
        rain: action.data
      });
    case GET_D3_TEMP:
      return Object.assign({}, state, {
        temp: action.data
      });
    case DISPLAY_DATA:
      return Object.assign({}, state, {
        locationData: action.info
      });

    default:
      return state;
  }
};

export default D3;