/*jshint esversion: 6*/
import {DISPLAY_DATA} from '../Actions';
const initialState = {
  rain: [],
  temp: [],
  soil: [],
};

const D3 = (state = initialState, action) => {
  switch(action.type){
    case DISPLAY_DATA:
      return Object.assign({}, state, {
        rain: action.info.rain,
        temp: action.info.temp,
        soil: action.info.soil,
      });

    default:
      return state;
  }
};

export default D3;