/*jshint esversion: 6*/
import {getUsers, getUserById, postUser, putUser, deleteUser, signinPassport} from '../API';
export const LOAD_USERS = 'LOAD_USERS';
export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const LOGIN = 'LOGIN';


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
    .then( () => {
      dispatch({type: LOGIN });
    });
  };
};