'use strict';

export function createDropdownMenu (arrayMenuItems) {
	let listElement = document.createElement('ul');
	listElement.setAttribute('class', 'dropdown_list');
	arrayMenuItems.forEach(function(el) {
		let itemElement = document.createElement('li');
		let linkElement = document.createElement('a');
		itemElement.setAttribute('class', 'dropdown_item');
		linkElement.setAttribute('class', 'dropdown_link');
		linkElement.innerText = el;
		itemElement.append(linkElement);
		listElement.append(itemElement);
	});
	return listElement;
}