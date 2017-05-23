/*jshint esversion: 6*/
import {ADD_USER} from '../Actions';
const initialState = {
  plants: [],
  users: []
};
const plants = (state = initialState, action) => {
  switch(action.type){
    case ADD_USER: {
      return Object.assign({}, state, {users: [action.user].concat(state.users)});
    }
    default: {
      return state;
    }
  }
};

export default plants;