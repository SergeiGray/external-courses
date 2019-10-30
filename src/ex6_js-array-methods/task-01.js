'use strict';

let getSliceOfArray = (array, begin, end) => {
	let newArray = [];
	let newEnd = end;
	let i, j;
	if(begin === undefined && newEnd === undefined) {
		for( let k = 0; k < array.length; k++) {
			newArray[k] = array[k];
		}
	}
	if (Number.isInteger(begin) && (Number.isInteger(newEnd) || newEnd === undefined)) {
			if(newEnd === undefined) {
				newEnd = array.length;
			} else {}
			if(begin < 0) { 
				i = array.length - Math.abs(begin);
			} else {
				i = begin;
			}
			if(newEnd < 0) {
			 j = array.length - Math.abs(newEnd); 
			} else {
				j = newEnd;
			}
			if(j < i) {
				j = array.length;
			}
			for( let k = i, l = j ; k < l; k++) {
				newArray.push(array[k]);
			}
	}
	return newArray;
};

module.exports = getSliceOfArray;