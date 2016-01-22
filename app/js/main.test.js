describe('jQuery test', function() {
	it('should let you use jquery', function() {
		expect($('body').length).toBe(1);
	});
});

describe('testFunction test', function() {
	it('should work with numbers', function() {
		expect(testFunction(1, 2)).toBe(3);
	});
	it('should work with strings', function() {
		expect(testFunction('it ', 'works')).toBe('it works');
	});
});