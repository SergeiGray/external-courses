'use strict';

function checksPrime(elem) {
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
			return 'Число ' + elem + ' - составное число';
		} 
		console.log('Число ' + elem + ' - простое число');
		return 'Число ' + elem + ' - простое число';

	}
	console.log('Данные неверны');
	return 'Данные неверны';
};

module.exports = checksPrime;