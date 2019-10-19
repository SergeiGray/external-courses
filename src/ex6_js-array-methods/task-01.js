'use strict';

let getSliceOfArray = (array, begin, end) => {
	let newArray = [];
	let newEnd = end;
	let i, j;
	switch (true) {
		case begin === undefined && newEnd === undefined :
			for(i = 0; i < array.length; i++) {
				newArray[i] = array[i];
			}
			break;
		case Number.isInteger(begin) && (Number.isInteger(newEnd) || newEnd === undefined) :
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
			for( i ; i < j; i++) {
				newArray.push(array[i]);
			}
			break;
		default:
			console.log('Введены некорректные данные');
			break;
	}
	return newArray;
};

module.exports = getSliceOfArray;