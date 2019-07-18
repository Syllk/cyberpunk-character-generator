class AttributesGenerator {
	generateAttributes(){
		var numberSet = numberGenerator.throwDiceWithLimit(9,10,2);
		var attributes = new Attributes (numberSet[0], numberSet[1], numberSet[2], numberSet[3], numberSet[4], numberSet[5], numberSet[6], numberSet[7], numberSet[8]);
		return attributes;
	}
	generateListOfAttributesValues() {
		return numberGenerator.throwDiceWithLimit(9,10,2);
		
	}
}

window.attributesGenerator = new AttributesGenerator();

