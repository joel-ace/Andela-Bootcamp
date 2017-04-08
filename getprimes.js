'use strict'

module.exports = {
	getPrimes: function(number){
		function isPrimeNumber(num){
			for(var i = 2; i < num; i++){
				if(num % i === 0){ 
					return false; 
				}
			}
			return true;
		}

		var i = 2;
		var primeNumbers = [];

		if(typeof number == "number"){
			if(number == 0){
				return "0 is not a Prime Number";
			} else if(number == 1){
				return "1 is not a Prime Number";
			} else if(number <  0) {
				return "Negative Integers cannot be prime";
			} else {
				while(i < number){
					var prime = isPrimeNumber(i);
					if(prime){
						primeNumbers.push(i);
					}
					i++;
				}
				return primeNumbers;


				// while(i < number){
				// 	var prime = isPrimeNumber(i);
				// 	if(prime){
				// 		primeNumbers.push(i);
				// 	}
				// 	i++;
				// }
				// return primeNumbers;
			}
		} else {
			return "Argument passed is not an integer";
		}

	}
}

