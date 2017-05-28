/*jshint esversion: 6*/
import {LOAD_CONVERSATION, SEND_MESSAGE} from '../Actions';
const initialState = {
  messages: [],
};

const messages = (state = initialState, action) => {
  switch(action.type){
    case LOAD_CONVERSATION:
      return Object.assign({}, state, {
        messages: action.messages
      });
    case SEND_MESSAGE:
      return Object.assign({}, state, {
        messages: state.messages.concat(action.message)
      });

    default:
      return state;
  }
};

export default messages;