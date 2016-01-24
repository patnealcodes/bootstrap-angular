(function () {
	'use strict';

	function MainComponentController() {

		var mainComponent = this;

		mainComponent.triggered = false;

		mainComponent.makeSureItWorks = function() {
			mainComponent.triggered = true;
			return 'MainComponentController Works!';
		};

		console.log(mainComponent.makeSureItWorks());
	}

	angular
		.module('mainApp')
		.controller('MainComponentController', MainComponentController)
	;

})();

