'use strict';

const Hangman = function (wordValue) {
	this.word = wordValue.split('');
	this.guessedLetters = new Array(this.word.length).fill('_');
	this.incorrectLetters = new Array();
	this.attemptCount = 6;
	this.guess = function (letter) {
		let guessedLettersCopy = this.guessedLetters;
		let isLetterContain = false;
		this.word.forEach( function (letterValue, letterIndex) {
			if(letterValue === letter) {
				guessedLettersCopy[letterIndex] = letterValue;
				isLetterContain = true;
			}	
		});
		if (isLetterContain) {
			this.guessedLetters = guessedLettersCopy;
			console.log(this.checkVictory(isLetterContain));
			return this;
		} 
		this.attemptCount--;
		this.incorrectLetters.push(letter);
		console.log(this.checkVictory(isLetterContain));
		return this;
	};
	this.getGuessedString = function () {
		return this.guessedLetters.join('');
	};
	this.getErrorsLeft = function () {
		return this.attemptCount;
	};
	this.getWrongSymbols = function () {
		return this.incorrectLetters;
	};
	this.getStatus = function () {
		return `${this.getGuessedString()} | errors left ${this.getErrorsLeft()}`
	};
	this.startAgain = function (newWord) {
		this.word = newWord.split('');
		this.guessedLetters = new Array(this.word.length).fill('_');
		this.incorrectLetters = new Array();
		this.attemptCount = 6;
		return this;
	};
	this.checkVictory = function (isLetterContain) {
		let isWinner = !(this.guessedLetters.some( function (letter) {
			return letter === '_';
		}));
		if(this.attemptCount < 0) {
			return `You Lose!`;
		} else if(isWinner) {
			return `${this.getGuessedString()} | You Win!`;
		} else if(isLetterContain) {
			return this.getGuessedString();
		} 
		return `wrong letter, errors left ${this.getErrorsLeft()} | ${this.getWrongSymbols().join(',')}`;
	};
};

var hangman = new Hangman('webpurple');

module.exports = hangman;