describe('MainComponentController', function () {
	beforeEach(module('mainApp'));

	var $controller;

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));

	describe('makeSureItWorks', function () {
		it('logs the correct statement', function () {
			var controller = $controller('MainComponentController');

			controller.makeSureItWorks();

			expect(controller.triggered).toBe(true);
		});
	});
});