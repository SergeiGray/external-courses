'use strict';

let checksPrime = function(elem) {
	let number;
	if(Math.abs(elem) < 1000 & Math.abs(elem) !== 1 & Math.abs(elem) !== 0) {
		number = Math.abs(elem);
		let flag = false;
		for (let i = 2; i < number; i++) {
			if(number % i === 0) {
				flag = true;
			}
		}
		if(flag) {
			console.log('Число ' + elem + ' - составное число');
		} else {
			console.log('Число ' + elem + ' - простое число');		
		}
	} else {
		console.log('Данные неверны');
	}
};

module.exports = checksPrime;