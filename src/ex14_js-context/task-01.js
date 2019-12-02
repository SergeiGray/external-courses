'use strict';

class Calculator {
	constructor() {
		this.result = 0;
	}
	add (num = 0) {
		this.result += num;
		return this;
	}
	subtract (num = 0) {
		this.result -= num;
		return this;
	}
	divide (num = 1) {
		if(this.result === 0) {
			return this;
		}	
		if(num === 0) {
			return this;
		}
		this.result /= num;
		return this;
	}
	multiply (num = 0) {
		if(this.result === 0) {
			this.result = 1;
		}
		this.result *= num;
		return this;
	}
	getResult () {
		return this.result;
	}
	reset () {
		this.result = 0;
		return this;
	}
	setState (num = 0) {
		this.result = num;
		return this;
	}
	fetchData (callback) {
		setTimeout(() => callback(500), 1000);
	}
};

let calc = new Calculator();

module.exports = calc;