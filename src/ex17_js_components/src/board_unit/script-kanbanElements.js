'use strict';

import { mockData } from '/src/script.js';
import { handlerList } from "/src/board_unit/script-handlerList.js";

export const kanbanElements = {
	createInput: function () {
		let inputElement = document.createElement('input');
		inputElement.setAttribute('class', 'kanban_input');
		inputElement.addEventListener('blur', handlerList.saveTaskInBacklog);
		return inputElement;
	},
	createSelect: function (unit) {
		let selectElement = document.createElement('select');
		let optionElementHidden = new Option('Выберите задачу');
		let previousUnit;
		switch (unit) {
			case 'ready':
				previousUnit = 'backlog';
				break;
			case 'progress':
				previousUnit = 'ready';
				break;
			case 'finished':
				previousUnit = 'progress';
				break;
			default:
			break;	
		}
		optionElementHidden.classList.add('kanban_option_hidden');
		selectElement.setAttribute('class', 'kanban_select');
		selectElement.append(optionElementHidden);
		selectElement.setAttribute('id', `${unit}_select`);
		selectElement.setAttribute('data-unit', unit);
		selectElement.setAttribute('data-previousunit', previousUnit);
		mockData[previousUnit].forEach(function(el) {
			let optionElement = new Option(el, el);
			optionElement.setAttribute('class', 'kanban_option');
			selectElement.addEventListener('change', handlerList.saveTask);
			selectElement.append(optionElement);
		});
		return selectElement;
	},
	createTask: function () {
		let itemElement = document.createElement('li');
		itemElement.setAttribute('class', 'kanban_item');
		return itemElement;
	}
};