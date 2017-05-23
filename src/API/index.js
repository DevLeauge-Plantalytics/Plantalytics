/*jshint esversion: 6*/
const makeRequest = (method, url, body) => {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    if (body) xhr.setRequestHeader("content-type", "application/json");
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
export const postUser = (body) => {
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