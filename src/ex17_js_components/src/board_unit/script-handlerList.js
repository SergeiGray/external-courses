'use strict';

import { mockData } from '/src/script.js';
import { mountItems } from '/src/script.js';
import { buttonReadyAdd } from '/src/script.js';
import { buttonProgressAdd } from '/src/script.js';
import { buttonFinishedAdd } from '/src/script.js';
import { kanbanElements } from "/src/board_unit/script-kanbanElements.js";
import { renderData } from "/src/board_unit/script-renderData.js";

export const handlerList = {
	addBacklogInput: function () {
		if(document.querySelector('.kanban_input') === null) {
			mountItems(kanbanElements.createInput(), 'backlog_footer', true);
			document.getElementById('backlog_add').classList.add('disable');
			document.querySelector('.kanban_input').focus();
		}
	},
	saveTaskInBacklog: function () {
		let input = document.querySelector('.kanban_input');
		let button = document.getElementById('backlog_add');
		let enteredText = input.value;
		if (enteredText === '') {
			input.remove();
			button.classList.remove('disable');
		} else {
			mockData.backlog.push(enteredText);
			renderData(mockData);
			input.remove();
			button.classList.remove('disable');
		}
	},
	addSelect: function (kanbanUnit, previousKanbanUnit) {
		if (document.getElementById(`${kanbanUnit}_select`) === null && mockData[previousKanbanUnit].length > 0) {
			mountItems(kanbanElements.createSelect(kanbanUnit), `${kanbanUnit}_footer`, true);
			switch(kanbanUnit) {
				case 'ready':
					buttonReadyAdd.classList.add('disable');
					break;
				case 'progress':
					buttonProgressAdd.classList.add('disable');
					break;
				case 'finished':
					buttonProgressAdd.classList.add('disable');
					break;
				default:
				break;
			}
		}
	},
	saveTask: function (eventKanbanUnit) {
		let previousKanbanUnit = 'ready';
		let select = eventKanbanUnit.target;
		let enteredText = select.value;
		mockData[select.dataset.unit].push(enteredText);
		mockData[select.dataset.previousunit].splice(select.selectedIndex - 1, 1);
		renderData(mockData);
		select.remove();
	}
};