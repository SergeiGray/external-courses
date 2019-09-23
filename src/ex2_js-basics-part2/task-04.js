'use strict';

let checksForSimilarity = function(array) {
	let results = array.every(function(elem, index, arrayB) {
		let resultsB = arrayB.every(function(elemB) {
			if(elem === elemB) {
				return true;
			} 
			return false;
		});
		if(resultsB) {
			return true;
		} 
		return false;
	});
	console.log(results);
	return results;
};

module.exports = checksForSimilarity;