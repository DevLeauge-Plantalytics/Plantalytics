/*jshint esversion: 6*/
import {LOAD_CONVERSATION, SEND_MESSAGE, GET_MESSAGES, FILTER_USERNAME} from '../Actions';
const initialState = {
  messages: [],
  inboxMessages: [],
  displayMessages: []
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
    case GET_MESSAGES:
      return Object.assign({}, state, {
        inboxMessages: action.messages,
        displayMessages: action.messages
      });
    case FILTER_USERNAME:
      return Object.assign({}, state, {
        displayMessages: state.inboxMessages.filter(message => message.Receiver == action.username)
      });

    default:
      return state;
  }
};

export default messages;