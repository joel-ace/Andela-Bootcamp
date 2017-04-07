'use strict'

module.exports = {
	fizzBuzz: function(number){
		if(typeof number != "number"){
			return "Only Numbers are allowed";
		} else {
			if(number % 15 == 0){
				return "FizzBuzz";
			}
			else if(number % 5 == 0){
				return "Buzz";
			} 
			else if(number % 3 == 0){
				return "Fizz";
			} else {
				return number;
			}
		}
	}
}
