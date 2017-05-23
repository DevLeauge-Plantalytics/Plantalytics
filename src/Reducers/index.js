/*jshint esversion: 6*/
import {LOAD_USERS, GET_USER, ADD_USER, UPDATE_USER, DELETE_USER} from '../Actions';
const initialState = {
  plants: [],
  users: []
};
const plants = (action, state = initialState) => {
  switch(action.type){
    case LOAD_USERS: {
      return Object.assign({}, state, {users: action.users});
    }
    case GET_USER: {
      return Object.assign({}, state, {users: action.user});
    }
    case ADD_USER: {
      return Object.assign({}, state, {users: [action.user].concat(state.users)});
    }
    case UPDATE_USER: {
      return Object.assign({}, state, {users: action.users});
    }
    case DELETE_USER: {
      return Object.assign({}, state, {users: action.users});
    }
    default: {
      return state;
    }
  }
};

export default plants;