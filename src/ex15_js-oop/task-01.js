"use strict";

const AMOUNT_CANDY_IN_GIFT_FOR_GOOD_CHILD = 30;
const AMOUNT_CANDY_IN_GIFT_FOR_VERY_GOOD_CHILD = 50;

function Gift (amount, candyList) {
	this.candyListInGift = candyList;
	this.amountCandy = amount;
};
Gift.prototype.getWeightGift = function () {
	let massСounter = 0;
	let amountCandy = this.amountCandy;
	this.candyListInGift.forEach( function (candy) {
		massСounter += candy.weight * amountCandy;
	});
	return massСounter;
};
Gift.prototype.getSortTasteCandy = function () {
	return this.candyListInGift.sort( function (a, b) {
	  return a.taste < b.taste ? 1 : -1;
	});
};
Gift.prototype.findCandy = function (nameCandy) {
	let hasCandy = false;
	this.candyListInGift.forEach( function (candy) {
		if(candy.name === nameCandy) {
			hasCandy = true;
		}
	});
	return hasCandy ? `:-) Конфета ${nameCandy} есть в наборе` : `:-( Конфеты ${nameCandy} нет в наборе`;
};

function Candy (nameValue, weightValue, tasteValue) {
	this.name = nameValue;
	this.weight = weightValue;
	this.taste = tasteValue;
};

let candyMaska = new Candy('Маска', 11, true);
let candyLimonka = new Candy('Лимонка', 6, false);	
let candyBotonchik = new Candy('Батончик', 9, true);	
let candyJeleyka = new Candy('Желейка', 4, true);

let giftForGoodChild = new Gift(AMOUNT_CANDY_IN_GIFT_FOR_GOOD_CHILD, [candyMaska, candyLimonka, candyBotonchik, candyJeleyka]);
let giftForVeryGoodChild = new Gift(AMOUNT_CANDY_IN_GIFT_FOR_VERY_GOOD_CHILD, [candyMaska, candyLimonka, candyBotonchik, candyJeleyka]);

console.log(`Набор для хороших детей весит ${giftForGoodChild.getWeightGift()} грамм`);
console.log(`Набор для очень хороших детей весит ${giftForVeryGoodChild.getWeightGift()} грамм`);
console.log(giftForGoodChild.getSortTasteCandy());
console.log(giftForGoodChild.findCandy('Батончик'));