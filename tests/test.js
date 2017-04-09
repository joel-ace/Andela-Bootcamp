(function(){
  'use strict';

var jasmine = require('jasmine');
var getPrimes = require('../getprimes.js').getPrimes;


	describe("Get prime numbers: ", function() {
	  describe("Case for negative integers", function(){
	  	it("should return 'Negative Integers cannot be prime' for -3", function(){
	  		expect(getPrimes(-3)).toEqual("Negative Integers cannot be prime");
	  	})
	  	it("should return 'Negative Integers cannot be prime' for -11", function(){
	  		expect(getPrimes(-11)).toEqual("Negative Integers cannot be prime");
	  	})
	  });

	  describe("Case for Prime Numbers", function(){
	  	it("should return '[2,3,5,7]' for 8", function(){
	  		expect(getPrimes(8)).toEqual([2,3,5,7]);
	  	})
	  	it("should return '[2,3,5,7]' for 9", function(){
	  		expect(getPrimes(9)).toEqual([2,3,5,7]);
	  	})
	  	it("should return '1 is not a Prime Number' for 1", function(){
	  		expect(getPrimes(1)).toEqual("1 is not a Prime Number");
	  	})
	  	it("should return '0 is not a Prime Number' for 0", function(){
	  		expect(getPrimes(0)).toEqual("0 is not a Prime Number");
	  	})
	  });

	  describe("Case for Data type", function(){
	  	it("should return 'Argument passed is not an integer' for []", function(){
	  		expect(getPrimes([])).toEqual("Argument passed is not an integer");
	  	})
	  });

	});
})();

