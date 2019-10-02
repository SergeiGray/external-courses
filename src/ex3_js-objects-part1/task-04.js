'use strict';

function checksСontainsAndAppend(str, obj) {
	let flag = false;
	const newObj = obj;
	for(let key in newObj) {
		if(newObj.hasOwnProperty(key)) {
			if(key === str) {
				flag = true;
			} else {
				flag = false;
			}
		}
	}
	if(!flag) {
		newObj[str] = 'new';
	}
	return newObj;
};

module.exports = checksСontainsAndAppend;