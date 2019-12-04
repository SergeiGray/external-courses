'use strict';

import { mockData } from '/src/script.js';
import { mountItems } from '/src/script.js';
import { buttonReadyAdd } from '/src/script.js';
import { buttonProgressAdd } from '/src/script.js';
import { buttonFinishedAdd } from '/src/script.js';
import { kanbanElements } from "/src/board_unit/script-kanbanElements.js";

export const renderData = function (obj) {
	document.querySelectorAll('.kanban_item').forEach(function(el) {
		el.remove();
	});
	for( let key in obj) {
		if(true) {
			obj[key].forEach(function(el) {
				let item = kanbanElements.createTask();
				item.textContent = el;
				mountItems(item, key + '_list');
			});
			if (key === 'ready') {
				if(mockData.backlog.length === 0) {
					buttonReadyAdd.classList.add('disable');
				} else {
					buttonReadyAdd.classList.remove('disable');
				}
			}
			if (key === 'progress') {
				if(mockData.ready.length === 0) {
					buttonProgressAdd.classList.add('disable');
				} else {
					buttonProgressAdd.classList.remove('disable');
				}
			}
			if (key === 'finished') {
				if(mockData.progress.length === 0) {
					buttonFinishedAdd.classList.add('disable');
				} else {
					buttonFinishedAdd.classList.remove('disable');
				}
			}
		}		
	}
};