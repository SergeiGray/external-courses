'use strict';

function deepCopiesAnObject(obj) {
	let newObj = {};
	if (Array.isArray(obj)) {
		newObj = [];
		for (var i = 0; i < obj.length; i++) {
			if (typeof obj[i] === 'object') {
				newObj[i] = deepCopiesAnObject(obj[i]);
			} else {
				newObj[i] = obj[i];
			}
		}
	} 
	for(let key in obj) {
		if (typeof obj[key] === 'object') {
			if (Array.isArray(obj[key])) {
				console.log(key + ' ' + typeof key + ' ' + Array.isArray(newObj[key]));
				newObj[key] = deepCopiesAnObject(obj[key]);
			} else {
				newObj[key] = deepCopiesAnObject(obj[key]);
			}
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
};

module.exports = deepCopiesAnObject;