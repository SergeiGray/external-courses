'use strict';
const dropdownMenuItems = ['My account', 'My tasks', 'My world', 'My dog', 'Log out'];
const mockData = {
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
let buttonReadyAdd = document.getElementById('ready_add');
let buttonProgressAdd = document.getElementById('progress_add');
let buttonFinishedAdd = document.getElementById('finished_add');

const kanbanElements = {
	createHeaderDropdown: function (arrayMenuItems) {
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
	},
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

const handlerList = {
	openHeaderMenu: function () {
		document.querySelector('.header_login_button').classList.toggle('dropdown_active');
		if (document.querySelector('.dropdown_list') === null) {
			mountItems(kanbanElements.createHeaderDropdown(dropdownMenuItems), 'header_login');
		} else {
			document.querySelector('.dropdown_list').remove();
		}
	},
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
		if (select === null) {
			alert('Пришел НУЛЬ');
		}
		let enteredText = select.value;
		mockData[select.dataset.unit].push(enteredText);
		mockData[select.dataset.previousunit].splice(select.selectedIndex - 1, 1);
		renderData(mockData);
		select.remove();
	}
};

const mountItems = function (childrenElement, parentId, before = false) {
	let parentElement = document.getElementById(parentId);
	if (before === true) {
		parentElement.insertBefore(childrenElement, parentElement.firstElementChild);
	} else {
		parentElement.append(childrenElement);
	}
};

const renderData = function (obj) {
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

document.getElementById('header_login').addEventListener('click', handlerList.openHeaderMenu);
document.getElementById('backlog_add').addEventListener('click', handlerList.addBacklogInput);
buttonReadyAdd.addEventListener('click', handlerList.addSelect.bind(null, 'ready', 'backlog'));
buttonProgressAdd.addEventListener('click', handlerList.addSelect.bind(null, 'progress', 'ready'));
buttonFinishedAdd.addEventListener('click', handlerList.addSelect.bind(null, 'finished', 'progress'));

window.addEventListener("unload", uploadFromLocalStorage);