(function() {
	'use strict';

	angular
		.module('mainApp', [
			'ui.router'
		])
		.config(function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('main');

			$stateProvider
				.state('main', {
					controller: 'MainComponentController',
					controllerAs: 'mainComponent',
					url: '/main',
					templateUrl: 'js/mainComponent/mainComponent.html'
				})
			;
		})
		.run(function($rootScope, $state) {
			$state.go('main');
		})
	;

})();