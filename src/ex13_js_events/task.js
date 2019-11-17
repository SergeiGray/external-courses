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

const createElements = {
	headerDropdown: function (arr) {
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
	},
	input: function () {
		let inputElement = document.createElement('input');
		inputElement.setAttribute('class', 'kanban_input');
		inputElement.addEventListener('blur', handlerList.blurOnInputBacklog);
		return inputElement;
	},
	select: function (unit) {
		let selectElement = document.createElement('select');
		let optionElementHidden = new Option();
		optionElementHidden.classList.add('kanban_option_hidden');
		selectElement.setAttribute('class', 'kanban_select');
		selectElement.append(optionElementHidden);
		if (unit === 'ready') {
			selectElement.setAttribute('id', 'ready_select');
			mockData.backlog.forEach(function(el) {
				let optionElement = new Option(el, el);
				optionElement.setAttribute('class', 'kanban_option');
				selectElement.addEventListener('change', handlerList.clickOnSelectReady);
				selectElement.append(optionElement);
			});
		}
		if (unit === 'progress') {
			selectElement.setAttribute('id', 'progress_select');
			mockData.ready.forEach(function(el) {
				let optionElement = new Option(el, el);
				optionElement.setAttribute('class', 'kanban_option');
				selectElement.addEventListener('change', handlerList.clickOnSelectProgress);
				selectElement.append(optionElement);
			});
		}
		if (unit === 'finished') {
			selectElement.setAttribute('id', 'finished_select');
			mockData.progress.forEach(function(el) {
				let optionElement = new Option(el, el);
				optionElement.setAttribute('class', 'kanban_option');
				selectElement.addEventListener('change', handlerList.clickOnSelectFinished);
				selectElement.append(optionElement);
			});
		}
		return selectElement;
	},
	task: function () {
		let itemElement = document.createElement('li');
		itemElement.setAttribute('class', 'kanban_item');
		return itemElement;
	}
};

const handlerList = {
	clickOnLogin: function () {
		document.querySelector('.header_login_button').classList.toggle('dropdown_active');
		if (document.querySelector('.dropdown_list') === null) {
			addsItemsToDOM(createElements.headerDropdown(dropdownMenuItems), 'header_login');
		} else {
			document.querySelector('.dropdown_list').remove();
		}
	},
	clickBacklogAdd: function () {
		if(document.querySelector('.kanban_input') === null) {
			addsItemsToDOM(createElements.input(), 'backlog_footer', true);
			document.getElementById('backlog_add').classList.add('disable');
			document.querySelector('.kanban_input').focus();
		}
	},
	blurOnInputBacklog: function () {
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
	clickReadyAdd: function () {
		if (document.getElementById('ready_select') === null && mockData.backlog.length > 0) {
			addsItemsToDOM(createElements.select('ready'), 'ready_footer', true);
			buttonReadyAdd.classList.add('disable');
		}
	},
	clickOnSelectReady: function () {
		let select = document.getElementById('ready_select');
		let enteredText = select.value;
		mockData.ready.push(enteredText);
		mockData.backlog.splice(select.selectedIndex - 1, 1);
		renderData(mockData);
		select.remove();
	},	
	clickProgressAdd: function () {
		if (document.getElementById('progress_select') === null && mockData.ready.length > 0) {
			addsItemsToDOM(createElements.select('progress'), 'progress_footer', true);
			buttonProgressAdd.classList.add('disable');
		}
	},
	clickOnSelectProgress: function () {
		let select = document.getElementById('progress_select');
		let enteredText = select.value;
		mockData.progress.push(enteredText);
		mockData.ready.splice(select.selectedIndex - 1, 1);
		renderData(mockData);
		select.remove();
	},
	clickFinishedAdd: function () {
		if (document.getElementById('finished_select') === null && mockData.progress.length > 0) {
			addsItemsToDOM(createElements.select('finished'), 'finished_footer', true);
			buttonProgressAdd.classList.add('disable');
		}
	},
	clickOnSelectFinished: function () {
		let select = document.getElementById('finished_select');
		let enteredText = select.value;
		mockData.finished.push(enteredText);
		mockData.progress.splice(select.selectedIndex - 1, 1);
		renderData(mockData);
		select.remove();
	}
};

const addsItemsToDOM = function (childrenElement, parentId, before = false) {
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
				let item = createElements.task();
				item.textContent = el;
				addsItemsToDOM(item, key + '_list');
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

document.getElementById('header_login').addEventListener('click', handlerList.clickOnLogin);
document.getElementById('backlog_add').addEventListener('click', handlerList.clickBacklogAdd);
buttonReadyAdd.addEventListener('click', handlerList.clickReadyAdd);
buttonProgressAdd.addEventListener('click', handlerList.clickProgressAdd);
buttonFinishedAdd.addEventListener('click', handlerList.clickFinishedAdd);

window.addEventListener("unload", uploadFromLocalStorage);