/*jshint esversion: 6*/
import {GET_D3_RAIN, GET_D3_TEMP} from '../Actions';
const initialState = {
  rain: [],
  temp: [],
};

const D3 = (state = initialState, action) => {
  switch(action.type){
    case GET_D3_RAIN:
      console.log(action.data);
      return Object.assign({}, state, {
        rain: action.data
      });
    case GET_D3_TEMP:
      return Object.assign({}, state, {
        temp: action.data
      });

    default:
      return state;
  }
};

export default D3;