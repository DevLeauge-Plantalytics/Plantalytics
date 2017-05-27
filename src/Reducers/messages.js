/*jshint esversion: 6*/
import {LOAD_MESSAGES, SEND_MESSAGE} from '../Actions';
const initialState = {
  messages: [],
};

const messages = (state = initialState, action) => {
  console.log(action);
  switch(action.type){
    case LOAD_MESSAGES:
      return Object.assign({}, state, {
        messages: action.messages
      });
    case SEND_MESSAGE:
      return Object.assign({}, state, {
        messages: [action.message].concat(state.messages)
      });

    default:
      return state;
  }
};

export default messages;