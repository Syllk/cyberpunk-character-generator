class NumberGenerator {

	throwDice(n,sides) {
		var results = []
		for (var i = 0; i < n; i++) {
			var throwResult = Math.ceil(Math.random()*sides);
			results.push(throwResult);
		}
		return results;
	}
}
window.numberGenerator = new NumberGenerator();
console.log(numberGenerator.throwDice(5,10));
