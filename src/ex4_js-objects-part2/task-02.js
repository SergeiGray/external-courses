'use strict';

function createsObjectWithoutTrototype() {
	return Object.create(null) ;
};

module.exports = createsObjectWithoutTrototype;