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
}
window.numberGenerator = new NumberGenerator();
console.log(numberGenerator.throwDice(5,10));
console.log(numberGenerator.throwDiceWithSum(5,4));
console.log(numberGenerator.throwDiceWithLimit(5,8,2));

