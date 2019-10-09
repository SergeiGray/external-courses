'use strict';

function looksStringInString(stringFirst, stringSecond) {
	return stringFirst.indexOf(stringSecond) > -1 ;
};

module.exports = looksStringInString;