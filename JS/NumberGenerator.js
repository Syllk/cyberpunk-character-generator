class NumberGenerator {

	throwDice(n,sides) {
		var results = []
		for (var i = 0; i < n; i++) {
			var throwResult = Math.ceil(Math.random()*sides);
			results.push(throwResult);
		}
		return results;
	}

	throwDiceWithSum(n,sides,modifier=0){
		var sum = 0;
		var throws = this.throwDice(n,sides);
		for (var i = 0; i < throws.lenght; i++) {
			sum += throws[i];
		}
		return sum + modifier;
	}

	throwDiceWithLimit(n,sides,minValue){
		var results = []
		for (var i = 0; i < n; i++) {
			//var throwResult = Math.ceil(Math.random()*(sides-minValue+1)+minValue-1);
			var throwResult = Math.floor(Math.random()*(sides-minValue+1)+minValue);
			results.push(throwResult);

		}
		return results;

	}
	trueFalse (){
		
		/*var results =this.throwDice(2,10);
		var element = results[0];
		console.log(results);
		if (element %2==0) {
			return true
		} else {
			return false
		}*/
		return Math.round(Math.random()) === 0;
	}
}

window.numberGenerator = new NumberGenerator();
//console.log(numberGenerator.throwDice());
//console.log(numberGenerator.throwDiceWithSum(5,4));
//console.log(numberGenerator.throwDiceWithLimit(5,8,2));
/*console.log(numberGenerator.trueFalse());
var sum = 0;
for (var i = 0; i < 1000000; i++) {
	if(numberGenerator.trueFalse()){
		++sum;
	}
}
console.log(sum/1000000+"%");*/