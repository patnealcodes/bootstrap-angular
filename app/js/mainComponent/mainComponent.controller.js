(function () {
	'use strict';

	angular
		.module('mainApp')
		.controller('MainComponentController', MainComponentController);

	function MainComponentController() {

		function makeSureItWorks() {
			console.log('MainComponentController Works!');
		}

		makeSureItWorks();
	}

})();

