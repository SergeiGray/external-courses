'use strict';

  let DEBOUNCE_INTERVAL = 1000;
  let timeoutID;
  let searchSpace = document.querySelector('.city_search');
  let searchOptions = document.querySelectorAll('.city_item');

  const debounce = function (callBack, debounceInterval) {
    if (timeoutID) {
      window.clearTimeout(lastTimeout);
    }
    timeoutID = window.setTimeout(callBack, debounceInterval);
    console.log(timeoutID);
  };

  const search = function (searchSpace, searchOptions) {
  	searchSpace.addEventListener('keyup', function (evt) {

  		searchOptions.forEach(function (elem) {
  			elem.classList.remove('active');
  			if( elem.innerText.indexOf(searchSpace.value) > -1 ) {
		  		elem.classList.add('active');
  			}
  		});
  	});
  };

  debounce(search(searchSpace, searchOptions), DEBOUNCE_INTERVAL);