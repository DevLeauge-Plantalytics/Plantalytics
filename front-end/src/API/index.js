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
export const signoutPassport = () => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/logout/`)
    .then(res => {
      resolve(JSON.parse(res));
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
export const getLatLong = address => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/localisation/${address}`)
    .then (data => {
      resolve(JSON.parse(data));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const getClosestData = (location) => {
  return new Promise(function (resolve, reject) {
    makeRequest('POST', `/api/D3/closest`, JSON.stringify(location))
    .then (data => {
      resolve(JSON.parse(data));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const getProducts= (id) => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/products/requests?id1=${localStorage.id}&id2=${id}`)
    .then (products => {
      resolve(JSON.parse(products));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const postRequest= (body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('POST', `/api/requests/`, body)
    .then (request => {
      resolve(JSON.parse(request));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const getRequests= (id) => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/requests/buyer/${id}`)
    .then (requests => {
      resolve(JSON.parse(requests));
    })
    .catch (err => {
      reject(err);
    });
  });
};

export const getRequestsForQuotations= (id) => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/requests/supplier/${id}`)
    .then (requests => {
      resolve(JSON.parse(requests));
    })
    .catch (err => {
      reject(err);
    });
  });
};
export const postQuotation = body => {
  return new Promise(function (resolve, reject) {
    makeRequest('POST', `/api/quotations/`, body)
    .then (quotation => {
      resolve(JSON.parse(quotation));
    })
    .catch (err => {
      reject(err);
    });
  });
};
