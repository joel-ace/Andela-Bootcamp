(function(){
  'use strict';

  var jasmine = require('jasmine');
  var getPrimes = require('../getprimes.js').getPrimes;

  describe("Case for negative integers", function(){
  	it("should return 'Negative Integers cannot be prime' for [-3]", function(){
  		expect(getPrimes([-3]).toEqual(["Negative Integers cannot be prime"]));
  	})
  	it("should return 'Negative Integers cannot be prime' for [-3, -5, -7, -11]", function(){
  		expect(getPrimes([-3, -5, -7, -11]).toEqual(["Negative Integers cannot be prime"]));
  	})
  });

  describe("Case for array input", function(){
  	it("should return '[]' for [2,4,6,8]", function(){
  		expect(getPrimes([2,4,6,8]).toEqual([]));
  	})
  	it("should return '[2,3,5,7]' for [1,2,3,4,5,6,7,8]", function(){
  		expect(getPrimes([1,2,3,4,5,6,7,8]).toEqual([2,3,5,7]));
  	})
  	it("should return '1 is not a Prime Number' for [1]", function(){
  		expect(getPrimes([1]).toEqual(["1 is not a Prime Number"]));
  	})
  	it("should return '0 is not a Prime Number' for [0]", function(){
  		expect(getPrimes([0]).toEqual(["0 is not a Prime Number"]));
  	})
  	it("should return 'Input array is empty' for []", function(){
  		expect(getPrimes([]).toEqual(["Input array is empty"]));
  	})
  });


})();