'use strict';

function checksСontainsAndAppend(str, obj) {
	const newObj = obj;
	for(let key in newObj) {
		if(newObj.hasOwnProperty(key) && key !== str) {
				newObj[str] = 'new';
		}
	}
	return newObj;
};

module.exports = checksСontainsAndAppend;