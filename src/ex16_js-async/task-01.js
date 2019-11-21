'use strict';

const fulfillAJAXRequest = function (url, methodRequest = 'GET', bodyRequest = null) {
	let xhr = new XMLHttpRequest();
	xhr.open(methodRequest, url);
  xhr.send(bodyRequest);
	return new Promise((resolve) => {
    xhr.onreadystatechange = function () {
    	if (xhr.readyState === 4) {
	    	if (xhr.status >= 200 && xhr.status <= 299) {
	    		resolve(xhr.response);
	    	}
	    }
    };
  });
};
