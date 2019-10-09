'use strict';

function croppingLine(str, num) {
	let strNew = str;
	if(str.length > num) {
		strNew = str.substr(0, num - 1) + '…';
	}
		return strNew; 
};

module.exports = croppingLine;