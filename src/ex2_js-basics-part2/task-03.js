'use strict';

let displaysEvenOdd = function(array) {

	let results = [0,0,0];

	array.forEach(function(elem) {
		if(typeof(elem) === 'number') {
			switch (elem % 2 === 0) {
				case true:
					if(elem === 0) {
						results[2]++;
					} else {
						results[0]++;
					}
					break;
				case false:
					results[1]++;				
					break;
				default: 
					break; 
			}
		}
	});
	console.log('Четных элементов: ' + results[0] + ',  ' + 'Нечетных элементов: ' + results[1] + ',  ' + 'Нулей: ' + results[2]);
	console.log(results);
	return results;
};

module.exports = displaysEvenOdd;