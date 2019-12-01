'use strict';

const fulfillAJAXRequest = function (url, methodRequest = 'GET', bodyRequest = null) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(methodRequest, url, true);
    xhr.onload = function() {
      if (this.status >= 200 && this.status <= 299) {
        resolve(this.response);
      } else {
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(new Error("Произошла ошибка соединения"));
    };
    xhr.send(bodyRequest);
  });
};