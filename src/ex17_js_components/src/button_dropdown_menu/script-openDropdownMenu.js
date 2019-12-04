'use strict';

const dropdownMenuItems = ['My account', 'My tasks', 'My world', 'My dog', 'Log out'];

import { mountItems } from '/src/script.js';
import { createDropdownMenu } from "/src/button_dropdown_menu/script-createDropdownMenu.js";

export function openDropdownMenu () {
	document.querySelector('.button_dropdown_menu_login').classList.toggle('dropdown_active');
	if (document.querySelector('.dropdown_list') === null) {
		mountItems(createDropdownMenu(dropdownMenuItems), 'header_login');
	} else {
		document.querySelector('.dropdown_list').remove();
	}
}