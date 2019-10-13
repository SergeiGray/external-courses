'use strict';

(function Calculator() {
	let result = 0;
	function add(num = 0) {
		result += num;
		return add;
	}
	function subtract(num = 0) {
		result -= num;
		return subtract;
	}
	function divide(num = 1) {
		if(result === 0) {
			return divide;
		}	
		if(num === 0) {
			return divide;
		}
		result /= num;
		return divide;
	}
	function multiply(num = 0) {
		if(result === 0) {
			result = 1;
		}
		result *= num;
		return multiply;
	}
	function getResult() {
		return result
	}
	function reset() {
		result = 0;
		return result;
	}	
	return {add, subtract, divide, multiply, getResult, reset}
}());

module.exports = Calculator;