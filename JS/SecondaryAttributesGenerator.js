class SecondaryAttributesGenerator {
	generateRunJmpWgh(attributes){
		//var numberSet = numberGenerator.throwDiceWithLimit(n,sides,minValue);
		//console.log(numberSet);

		var speed = attributes.speed;
		var jmp = speed / 4;
		var wgh = attributes.bodyBuilt*10
		var secondaryAttributes = new SecondaryAttributes(speed*3, jmp, wgh);
		//return "RUN: " + speed * 3 + ", JMP: " + jmp + " WGH: " + wgh;
		return secondaryAttributes;

	}
	bodyBuiltModifier(attributes){
		//var numberSet = numberGenerator.throwDiceWithLimit(); - nie potrzebne bo czerpiemy dane z generatora atrybutów
		//console.log(numberSet);
		var bodyBuilt = attributes.bodyBuilt;
		//console.log(bb);
		var modfier;
		switch (bodyBuilt) {
			case 2:
			modfier = 0;
			break;
			case 3:
			case 4:
			modfier = -1;
			break;
			case 5:
			case 6:
			case 7:
			modfier = -2;
			break;
			case 8:
			case 9:
			modfier = -3;
			break;
			case 10:
			modfier = -4;
			
		} 
		return mod;
	}	
}
var attributes = attributesGenerator.generateAttributes();
window.secondaryAttributesGenerator = new SecondaryAttributesGenerator();

/*BC ranges based on bodybuilding for BBM/MBC =>
2p = Very Weak(0)
3-4p = Weak(-1)
5-7p = Average(-2)
8-9p = Strong(-3)
10p = Very Strong(-4)
Superhuman(-5) - only avaliable with Cybernetics - to skip for now*/

//secondaryAttributesGenerator.generateRunJmpWgh(attributesGenerator.generateAttributes())
//secondaryAttributesGenerator.generateRunJmpWgh(attributes)
//secondaryAttributesGenerator.bodyBuiltModifier(attributesGenerator.generateAttributes())
//secondaryAttributesGenerator.bodyBuiltModifier(attributes)