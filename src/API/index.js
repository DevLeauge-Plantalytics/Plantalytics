/*jshint esversion: 6*/
const makeRequest = (method, url, body) => {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    if (body) {
      xhr.setRequestHeader("Content-type", "application/json");
    }
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {

        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    (body) ? xhr.send(body) : xhr.send();
  });
};
export const getUsers = () => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/users/`)
    .then (users => {
      resolve(JSON.parse(users));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const getUserById = id => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/users/${id}`)
    .then (users => {
      resolve(JSON.parse(users));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const postUser = body => {
  return new Promise(function (resolve, reject) {
    makeRequest('POST', `/api/users/`, body)
    .then (users => {
      resolve(JSON.parse(users));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const putUser = (id, body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('PUT', `/api/users/${id}`, body)
    .then (users => {
      resolve(JSON.parse(users));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const deleteUser = id => {
  return new Promise(function (resolve, reject) {
    makeRequest('DELETE', `/api/users/${id}`)
    .then (users => {
      resolve(JSON.parse(users));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const signinPassport = user => {
  return new Promise(function (resolve, reject) {
    makeRequest('POST', `/login/`, user)
    .then (users => {
      resolve(JSON.parse(users));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const getConversation = (id) => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/messages/conversation?id1=${localStorage.id}&id2=${id}`)
    .then (messages => {
      resolve(JSON.parse(messages));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const postMessage = (body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('POST', `/api/messages/`, body)
    .then (message => {
      resolve(JSON.parse(message));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const getMessages = (id) => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/messages/inbox/${id}`)
    .then (messages => {
      resolve(JSON.parse(messages));
    })
    .catch (err => {
      reject(err);
    });
  });
};
