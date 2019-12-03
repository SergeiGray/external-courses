'use strict';
const dropdownMenuItems = ['My account', 'My tasks', 'My world', 'My dog', 'Log out'];

const createElements = function (arr) {
	let listElement = document.createElement('ul');
	listElement.setAttribute('class', 'dropdown_list');
	arr.forEach(function(el) {
		let itemElement = document.createElement('li');
		let linkElement = document.createElement('a');
		itemElement.setAttribute('class', 'dropdown_item');
		linkElement.setAttribute('class', 'dropdown_link');
		linkElement.innerText = el;
		itemElement.append(linkElement);
		listElement.append(itemElement);
	});
	return listElement;
};

const addsItemsToDOM = function (childrenElement, parentId) {
	let parentElement = document.getElementById(parentId);
	parentElement.append(childrenElement);
};

const handlerClickOnLogin = function (evt) {
	document.querySelector('.header_login_button').classList.toggle('dropdown_active');
	if (document.querySelector('.dropdown_list') === null) {
		addsItemsToDOM(createElements(dropdownMenuItems), 'header_login');
	} else {
		document.querySelector('.dropdown_list').remove();
	}
};

document.getElementById('header_login').addEventListener('click', handlerClickOnLogin);