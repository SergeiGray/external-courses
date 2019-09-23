'use strict';

let returnsMaxValue = function(array) {
	let max = 0;
	array.forEach(function(elem) {
		if(elem > max) {
			max = elem;
		}
	});
	return max;
};

module.exports = returnsMaxValue;