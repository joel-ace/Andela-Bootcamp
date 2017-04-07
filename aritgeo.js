'use strict'

module.exports = {
	aritGeo: function(numberArray){
		// check if numberArray is empty and return 0
		if (numberArray == undefined || numberArray.length == 0) {
			return 0;
		}

		var commonRatio = numberArray[1]/numberArray[0];
		var commonDifference = numberArray[1] - numberArray[0];
		var arithmetic = true;
		var geometric = true;


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


	}	
}