class SecondaryAttributesGenerator {
	generateRunJmpWgh(){
		var numberSet = numberGenerator.throwDiceWithLimit(9,10,2);
		//console.log(numberSet);
		var speed = numberSet[6];
		var jmp = speed / 4;
		var wgh = numberSet[8]*10
		return "RUN: " + speed * 3 + ", JMP: " + jmp + " WGH: " + wgh;

	}
	bodyBuiltModifier(){
		var numberSet = numberGenerator.throwDiceWithLimit(9,10,2);
		//console.log(numberSet);
		var bb = numberSet[8];
		//console.log(bb);
		var mod;
		switch (bb) {
			case 2:
			mod = "Very weak (0)";
			break;
			case 3:
			case 4:
			mod = "Weak (-1)";
			break;
			case 5:
			case 6:
			case 7:
			mod = "Avarage (-2)";
			break;
			case 8:
			case 9:
			mod = "Strong (-3)";
			break;
			case 10:
			mod = "Very strong (-4)";
			
		} 
		return mod;
	}	
}

window.secondaryAttributesGenerator = new SecondaryAttributesGenerator();

/*BC ranges based on bodybuilding for BBM/MBC =>
2p = Very Weak(0)
3-4p = Weak(-1)
5-7p = Average(-2)
8-9p = Strong(-3)
10p = Very Strong(-4)
Superhuman(-5) - only avaliable with Cybernetics - to skip for now*/
