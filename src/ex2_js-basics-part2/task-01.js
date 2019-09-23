'use strict';

let definesDataType = function(argument) {
	switch (typeof(argument)) {
		case 'number': 
			return 'number';
		case 'string':
			return 'string';
		default:
			return undefined;
	}
};

module.exports = definesDataType;