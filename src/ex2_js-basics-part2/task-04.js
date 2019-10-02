'use strict';

function checksForSimilarity(array) {
	let flag = false;
	for(let i = 0; i < array.length; i++) {
		if(array[0] !== array[i]) {
			flag = false;
			break;
		}
		flag = true;
	}
	console.log(flag);
	return flag;
};

module.exports = checksForSimilarity;