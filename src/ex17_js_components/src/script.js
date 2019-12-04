'use strict';

import { openDropdownMenu } from "/src/button_dropdown_menu/script-openDropdownMenu.js";
import { kanbanElements } from "/src/board_unit/script-kanbanElements.js";
import { handlerList } from "/src/board_unit/script-handlerList.js";
import { renderData } from "/src/board_unit/script-renderData.js";

export const mockData = {
	backlog: [
		'Login page – performance issues', 
		'Sprint bugfix'
	],
	ready: [
		'Shop page – performance issues',
		'Checkout bugfix',
		'Shop bug1',
		'Shop bug2',
		'Shop bug3',
		'Shop bug4',
		'Shop bug5',
		'Shop bug6',
		'Shop page – performance issues',
		'Checkout bugfix'
	],
	progress: [
		'User page – performance issues',
		'Auth bugfix'
	],
	finished: [
		'Main page – performance issues',
		'Main page bugfix'
	]			
};
export let buttonReadyAdd = document.getElementById('ready_add');
export let buttonProgressAdd = document.getElementById('progress_add');
export let buttonFinishedAdd = document.getElementById('finished_add');

export const mountItems = function (childrenElement, parentId, before = false) {
	let parentElement = document.getElementById(parentId);
	if (before === true) {
		parentElement.insertBefore(childrenElement, parentElement.firstElementChild);
	} else {
		parentElement.append(childrenElement);
	}
};

const downloadFromLocalStorage = function () {
	let obj = JSON.parse(localStorage.getItem("kanbanBoard"));
	if (obj) {
		renderData(obj);
		for( let key in obj) {
			if(true) {
			 this[key] = obj[key];
			}
		}
	}
	renderData(this);
};

const uploadFromLocalStorage = function () {
	localStorage.setItem("kanbanBoard", JSON.stringify(mockData));
};

window.addEventListener("load", downloadFromLocalStorage.bind(mockData));

document.getElementById('header_login').addEventListener('click', openDropdownMenu);
document.getElementById('backlog_add').addEventListener('click', handlerList.addBacklogInput);
buttonReadyAdd.addEventListener('click', handlerList.addSelect.bind(null, 'ready', 'backlog'));
buttonProgressAdd.addEventListener('click', handlerList.addSelect.bind(null, 'progress', 'ready'));
buttonFinishedAdd.addEventListener('click', handlerList.addSelect.bind(null, 'finished', 'progress'));

window.addEventListener("unload", uploadFromLocalStorage);