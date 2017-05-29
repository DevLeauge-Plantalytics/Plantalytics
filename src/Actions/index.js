/*jshint esversion: 6*/
import * as API from '../API';
export const LOAD_USERS = 'LOAD_USERS';
export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const LOGIN = 'LOGIN';
export const LOAD_CONVERSATION = 'LOAD_CONVERSATION';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_MESSAGES = 'GET_MESSAGES';
export const FILTER_USERNAME = 'FILTER_USERNAME';


export const loadUsers = id => {
  return dispatch => {
    return API.getUsers()
    .then(users => {
      dispatch({type: LOAD_USERS, users});
    });
  };
};
export const getUser = id => {
  return dispatch => {
    return API.getUserById(id)
    .then(user => {
      dispatch({type: GET_USER, user});
    });
  };
};
export const addUser = user => {
  return dispatch => {
    return API.postUser(JSON.stringify(user))
    .then(user => {
      dispatch({type: ADD_USER, user});
    });
  };
};
export const updateUser = (id, body) => {
  return dispatch => {
    return API.putUser(id, body)
    .then(users => {
      dispatch({type: ADD_USER, users});
    });
  };
};
export const destroyUser = id => {
  return dispatch => {
    return API.deleteUser(id)
    .then(users => {
      dispatch({type: DELETE_USER, users});
    });
  };
};
export const signIn = user => {
  return dispatch => {
    return API.signinPassport(JSON.stringify(user))
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
    return API.getConversation(id)
    .then( (messages) => {
      dispatch({type: LOAD_CONVERSATION, messages });
    });
  };
};
export const sendMessage = (message) => {
  return dispatch => {
    return API.postMessage(JSON.stringify(message))
    .then( (message) => {
      dispatch({type: SEND_MESSAGE, message });
    });
  };
};
export const getMessages = (id) => {
  return dispatch => {
    return API.getMessages(id)
      .then((messages) => {
        dispatch({type: GET_MESSAGES, messages});
      });
    };
  };
export const filterByUsername = (username) => {
  return dispatch => {
    dispatch({type: FILTER_USERNAME, username});
  };
};