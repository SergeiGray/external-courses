'use strict';

function displaysArrayElements(array) {
	console.log('Общее число элементов массива: ' + array.length);
	array.forEach(function(elem) {
		console.log(elem);
	});
};

module.exports = displaysArrayElements;