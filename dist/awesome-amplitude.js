module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = function () {
	  'use strict';
	
	  let service = {};
	  let dataAttribute = '';
	
	  service.init = function (APIkey, dataAttr = 'data-analytics-event') {
	    amplitude.init(APIkey);
	    dataAttribute = dataAttr;
	  };
	
	  service.parse = function () {
	    let elemsToObserve = document.querySelectorAll(`[${ dataAttribute }]`);[].forEach.call(elemsToObserve, elem => {
	      elem.addEventListener('click', e => {
	        let event = e.srcElement.getAttribute(dataAttribute);
	        amplitude.logEvent(event);
	      });
	    });
	  };
	
	  service.log = function (event) {
	    amplitude.logEvent(event);
	  };
	
	  return service;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=awesome-amplitude.js.map