'use strict';

const Hangman = function (wordValue) {
	this.word = wordValue.split('');
	this.arrayGuessedLetters = new Array(this.word.length).fill('_');
	this.arrayIncorrectLetters = new Array();
	this.numberAttempts = 6;
	this.guess = function (letter) {
		let arrayGuessedLettersNew = this.arrayGuessedLetters;
		let flagPresenceLetters = false;
		this.word.forEach( function (letterValue, letterIndex) {
			if(letterValue === letter) {
				arrayGuessedLettersNew[letterIndex] = letterValue;
				flagPresenceLetters = true;
			}	
		});
		if (flagPresenceLetters) {
			this.arrayGuessedLetters = arrayGuessedLettersNew;
			console.log(this.checksVictory(flagPresenceLetters));
			return this;
		} 
		this.numberAttempts--;
		this.arrayIncorrectLetters.push(letter);
		console.log(this.checksVictory(flagPresenceLetters));
		return this;
	};
	this.getGuessedString = function () {
		return this.arrayGuessedLetters.join('');
	};
	this.getErrorsLeft = function () {
		return this.numberAttempts;
	};
	this.getWrongSymbols = function () {
		return this.arrayIncorrectLetters;
	};
	this.getStatus = function () {
		return `${this.getGuessedString()} | errors left ${this.getErrorsLeft()}`
	};
	this.startAgain = function (newWord) {
		this.word = newWord.split('');
		this.arrayGuessedLetters = new Array(this.word.length).fill('_');
		this.arrayIncorrectLetters = new Array();
		this.numberAttempts = 6;
		return this;
	};
	this.checksVictory = function (flagPresenceLetters) {
		let flagVictory = !(this.arrayGuessedLetters.some( function (letter) {
			return letter === '_';
		}));
		if(this.numberAttempts < 0) {
			return `You Lose!`;
		} else if(flagVictory) {
			return `${this.getGuessedString()} | You Win!`;
		} else if(flagPresenceLetters) {
			return this.getGuessedString();
		} 
		return `wrong letter, errors left ${this.getErrorsLeft()} | ${this.getWrongSymbols().join(',')}`;
	};
};

var hangman = new Hangman('webpurple');

module.exports = hangman;