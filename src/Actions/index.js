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
export const DISPLAY_DATA = 'DISPLAY_DATA';

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
    return API.getLatLong(user.address)
    .then(location => {
      user.location = location;
      return API.postUser(JSON.stringify(user))
      .then(user => {
        return dispatch({type: ADD_USER, user});
      });
    });
  };
};
export const updateUser = (id, body) => {
  return dispatch => {
    return API.putUser(id, body)
    .then(users => {
      return dispatch({type: ADD_USER, users});
    });
  };
};
export const destroyUser = id => {
  return dispatch => {
    return API.deleteUser(id)
    .then(users => {
      return dispatch({type: DELETE_USER, users});
    });
  };
};
export const signIn = (user) => {
  return dispatch => {
    return API.signinPassport(JSON.stringify(user))
    .then( (userInfo) => {
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('username', user.username);
      localStorage.setItem('id', userInfo.id);
      return dispatch({type: LOGIN });
    });
  };
};
export const loadConversation = (id) => {
  return dispatch => {
    return API.getConversation(id)
    .then( (messages) => {
      return dispatch({type: LOAD_CONVERSATION, messages });
    });
  };
};
export const sendMessage = (message) => {
  return dispatch => {
    return API.postMessage(JSON.stringify(message))
    .then( (message) => {
      return dispatch({type: SEND_MESSAGE, message });
    });
  };
};
export const getMessages = (id) => {
  return dispatch => {
    return API.getMessages(id)
      .then((messages) => {
        return dispatch({type: GET_MESSAGES, messages});
      });
    };
  };
export const filterByUsername = (username) => {
  return dispatch => {
    return dispatch({type: FILTER_USERNAME, username});
  };
};
export const getDataByAddress = (address) =>
  dispatch => API.getLatLong(address)
  .then(API.getClosestData)
  .then(info =>
    dispatch({type: DISPLAY_DATA, info})
  );