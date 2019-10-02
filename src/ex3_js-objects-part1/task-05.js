'use strict';

function copiesAnObject(obj) {
	const newObj = {};
	for(let key in obj) {
		if(obj.hasOwnProperty(key)) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
};

module.exports = copiesAnObject;