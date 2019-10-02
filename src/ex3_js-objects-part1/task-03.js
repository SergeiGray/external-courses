'use strict';

function checksСontains(str, obj) {
	let flag = false;
	for(let key in obj) {
		if(obj.hasOwnProperty(key)) {
			if(key === str) {
				flag = true;
			} else {
				flag = false;
			}
		}
	}
	return flag;
};

module.exports = checksСontains;