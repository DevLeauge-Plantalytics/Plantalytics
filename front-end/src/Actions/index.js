/*jshint esversion: 6*/
import * as API from '../API';
export const LOAD_USERS = 'LOAD_USERS';
export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOAD_CONVERSATION = 'LOAD_CONVERSATION';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_MESSAGES = 'GET_MESSAGES';
export const FILTER_USERNAME = 'FILTER_USERNAME';
export const DISPLAY_DATA = 'DISPLAY_DATA';
export const LOAD_PRODUCTS_R = 'LOAD_PRODUCTS_R';
export const MAKE_REQ = 'MAKE_REQ';
export const UPDATE_ARR_REQ = 'UPDATE_ARR_REQ';
export const UPDATE_ARR_QUANT = 'UPDATE_ARR_QUANT';
export const SET_USER_LATLONG = 'SET_USER_LATLONG';
export const LOAD_REQUESTS = 'LOAD_REQUESTS';
export const LOAD_REQUESTS_FOR_QUOTATIONS = 'LOAD_REQUESTS_FOR_QUOTATIONS';
export const ADD_QUOTATION = 'ADD_QUOTATION';
export const UPDATE_QUANT_QUOTATIONS = 'UPDATE_QUANT_QUOTATIONS';

export const loadUsers = () => {
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
export const signIn = user => {
  return dispatch => {
    return API.signinPassport(JSON.stringify(user))
    .then( (userInfo) => {
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('username', user.username);
      localStorage.setItem('id', userInfo.id);
      localStorage.setItem('address', userInfo.address);
      return dispatch({type: LOGIN, userInfo });
    });
  };
};
export const signOut = () => {
  return dispatch => {
    return API.signoutPassport()
    .then( res => {
      if (res.success) {
        localStorage.clear();
        return dispatch({type: LOGOUT });
      }
    });
  };
};
export const getUserInfo = address => {
  return dispatch => {
    return API.getLatLong(address)
    .then(location => {
      dispatch({type: SET_USER_LATLONG, location});
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

export const loadProducts = (id) => {
  return dispatch => {
    return API.getProducts(id)
      .then( (products) => {
        return dispatch({type: LOAD_PRODUCTS_R, products});
      });
    };
  };
export const makeRequest = (body) => {
  return dispatch => {
    return API.postRequest(JSON.stringify(body))
    .then( (request) => {
      return API.postMessage(JSON.stringify({
                                subject: `New request from ${localStorage.username}`,
                                body:`Hi, You have a new request from ${localStorage.username}. Check "Your quotations" to accept or reject the request`,
                                Sender:Number(localStorage.id),
                                Receiver:2,
                                Request_Id: request[0][0].RequestId
                              }))
      .then( () => {
        return dispatch({type: MAKE_REQ, request });
      });
    });
  };
};
export const updateArrayRequest = (id, bool) => {
  return dispatch => {
    return dispatch({type: UPDATE_ARR_REQ, id, bool });
  };
};
export const updateQuantRequest = (id, quantity) => {
  return dispatch => {
    return dispatch({type: UPDATE_ARR_QUANT, id, quantity });
  };
};
export const loadRequests = (id) => {
  return dispatch => {
    return API.getRequests(id)
      .then( (requests) => {
        return dispatch({type: LOAD_REQUESTS, requests});
      });
    };
  };
export const loadRequestsForQuotations = (id) => {
  return dispatch => {
    return API.getRequestsForQuotations(id)
      .then( (requests) => {
        return dispatch({type: LOAD_REQUESTS_FOR_QUOTATIONS, requests});
      });
    };
  };
export const addQuotation = body => {
  return dispatch => {
    return API.postQuotation(body)
    .then(quotation => {
      return dispatch({type: ADD_QUOTATION, quotation});
    });
  };
};
export const updateQuantQuotation = (requestid, productid, quantity) => {
  return dispatch => {
    return dispatch({type: UPDATE_QUANT_QUOTATIONS, requestid, productid, quantity});
  };
};