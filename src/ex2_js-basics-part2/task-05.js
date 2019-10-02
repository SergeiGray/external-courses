'use strict';

function returnsMaxValue(array) {
	let max = 0;
	array.forEach(function(elem) {
		if(elem > max) {
			max = elem;
		}
	});
	return max;
};

module.exports = returnsMaxValue;