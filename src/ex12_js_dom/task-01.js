'use strict';

let mockData = ['http://sbweb.ru/epam/image/Labr/1.jpg', 'http://sbweb.ru/epam/image/Labr/2.jpg', 'http://sbweb.ru/epam/image/Labr/3.jpg', 'http://sbweb.ru/epam/image/Labr/4.jpg', 'http://sbweb.ru/epam/image/Labr/5.jpg', 'http://sbweb.ru/epam/image/Labr/6.jpg', 'http://sbweb.ru/epam/image/Labr/7.jpg'];
const slideWidth = 340;
const slideHeight = 255;

const createElements = function (arr) {
	let ulElement = document.createElement('ul');
	ulElement.setAttribute('class', 'slider_ul');
	arr.forEach(function(el) {
		let liElement = document.createElement('li');
		let imgElement = document.createElement('img');
		liElement.setAttribute('class', 'slider_li');
		imgElement.setAttribute('src', el);
		imgElement.setAttribute('width', 'auto');
		imgElement.setAttribute('height', '100%');
		imgElement.setAttribute('class', 'slider_img');
		liElement.append(imgElement);
		ulElement.append(liElement);
	});
	return ulElement;
};

const addsItemsToDOM = function (childrenElement, parentId) {
	let parentElement = document.getElementById(parentId);
	parentElement.append(childrenElement);
};

addsItemsToDOM(createElements(mockData), 'slider_container');

const animatesSlider = function (prevNav, nextNav, sliderUl) {
	let sliderElement = document.querySelector(sliderUl);
	let prevButton = document.getElementById(prevNav);
	let nextButton = document.getElementById(nextNav);
	let initialOffsetValue = parseInt(getComputedStyle(sliderElement).left, 10);
	let presentOffsetValue = initialOffsetValue;
	let maxOffsetValue = sliderElement.getElementsByTagName('li').length * slideWidth;

	prevButton.addEventListener('click', function(evt) {
		if (presentOffsetValue === 0) {
			sliderElement.style.left = -maxOffsetValue + slideWidth + 'px';
			presentOffsetValue = -maxOffsetValue + slideWidth;
		} else {
			sliderElement.style.left = presentOffsetValue + slideWidth + 'px';
			presentOffsetValue += slideWidth;
		}
	});
	nextButton.addEventListener('click', function(evt) {
		if (presentOffsetValue === (-maxOffsetValue + slideWidth)) {
			sliderElement.style.left = 0 + 'px';
			presentOffsetValue = 0;
		} else {
			sliderElement.style.left = presentOffsetValue - slideWidth + 'px';
			presentOffsetValue -= slideWidth ;
		}
	});
};
animatesSlider('slider_prev', 'slider_next', '.slider_ul');