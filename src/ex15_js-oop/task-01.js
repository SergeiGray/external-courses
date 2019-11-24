"use strict";

const Gift = function (amountCandy, candyList) {
	this.candyListInGift = candyList;
	this.getWeightGift = function () {
		let massСounter = 0;
		this.candyListInGift.forEach( function (candy) {
			massСounter += candy.weight * amountCandy;
		});
		return massСounter;
	};
	this.getSortTasteCandy = function () {
		return this.candyListInGift.sort( function (a, b) {
		  if (a.taste < b.taste) {
		    return 1;
		  }
		  if (a.taste > b.taste) {
		    return -1;
		  }
		  return 0;
		});
	};
	this.findCandy = function (nameCandy) {
		let candyFlag = false;
		this.candyListInGift.forEach( function (candy) {
			if(candy.name === nameCandy) {
				candyFlag = true;
			}
		});
		return candyFlag ? `:-) Конфета ${nameCandy} есть в наборе` : `:-( Конфеты ${nameCandy} нет в наборе`;
	};
};
const Candy = function (nameValue, weightValue, tasteValue) {
	this.name = nameValue;
	this.weight = weightValue;
	this.taste = tasteValue;
};
const AMOUNT_CANDY_IN_GIFT_FOR_GOOD_CHILD = 30;
const AMOUNT_CANDY_IN_GIFT_FOR_VERY_GOOD_CHILD = 50;

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