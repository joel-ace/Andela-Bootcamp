'use strict'

module.exports = {
	aritGeo: function(numberArray){
		// Function to Check if all elements of array are numbers
		function allNumbers(element, index, array) { 
			return (typeof element == "number") ? true : false;
		} 

		// check if numberArray is empty and return 0
		if (numberArray == undefined || numberArray.length == 0) {
			return 0;
		}

		// Check if all elements of array are numbers
		if(numberArray.every(allNumbers)){
			var commonRatio = numberArray[1]/numberArray[0];
			var commonDifference = numberArray[1] - numberArray[0];
			var arithmetic = true;
			var geometric = true;

			if(numberArray.length >= 3){
				for(var i = 0; i < numberArray.length; i++){
					// Using the formula nthTerm = firstTerm + (n - 1)d
					// since js is zero indexed, i = n-1.  
					if(numberArray[i] != numberArray[0] + (i * commonDifference)){
						arithmetic = false;
					}
					// Using the formula of nth term of GP Xn = ar**(n - 1)
					if(numberArray[i] != numberArray[0] * (Math.pow(commonRatio, i)) ){
						geometric = false;
					}
				}

				if(arithmetic == true){
					return 'Arithmetic';
				}
				else if(geometric == true){
					return 'Geometric';
				} else {
					return -1;
				}
			} else {
				return "Array should contain at least 3 numbers";
			}
		} else {
			return "All elements in Array should be numbers";
		}
	}	
}