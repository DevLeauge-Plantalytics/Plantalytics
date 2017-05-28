/*jshint esversion: 6*/
import {getUsers, getUserById, postUser, putUser, deleteUser, signinPassport, getConversation, postMessage} from '../API';
export const LOAD_USERS = 'LOAD_USERS';
export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const LOGIN = 'LOGIN';
export const LOAD_CONVERSATION = 'LOAD_CONVERSATION';
export const SEND_MESSAGE = 'SEND_MESSAGE';



export const loadUsers = id => {
  return dispatch => {
    return getUsers()
    .then(users => {
      dispatch({type: LOAD_USERS, users});
    });
  };
};
export const getUser = id => {
  return dispatch => {
    return getUserById(id)
    .then(user => {
      dispatch({type: GET_USER, user});
    });
  };
};
export const addUser = user => {
  return dispatch => {
    return postUser(JSON.stringify(user))
    .then(user => {
      dispatch({type: ADD_USER, user});
    });
  };
};
export const updateUser = (id, body) => {
  return dispatch => {
    return putUser(id, body)
    .then(users => {
      dispatch({type: ADD_USER, users});
    });
  };
};
export const destroyUser = id => {
  return dispatch => {
    return deleteUser(id)
    .then(users => {
      dispatch({type: DELETE_USER, users});
    });
  };
};
export const signIn = user => {
  return dispatch => {
    return signinPassport(JSON.stringify(user))
    .then( (userInfo) => {

      localStorage.setItem('loggedIn', true);
      localStorage.setItem('username', user.username);
      localStorage.setItem('id', userInfo.id);
      dispatch({type: LOGIN });
    });
  };
};
export const loadConversation = (id) => {
  return dispatch => {
    return getConversation(id)
    .then( (messages) => {
      dispatch({type: LOAD_CONVERSATION, messages });
    });
  };
};
export const sendMessage = (message) => {
  console.log(message);
  return dispatch => {
    return postMessage(JSON.stringify(message))
    .then( (message) => {
      dispatch({type: SEND_MESSAGE, message });
    });
  };
};
