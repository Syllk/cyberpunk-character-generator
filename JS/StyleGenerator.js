class StyleGenerator{
	genClothing(){
	//var lengthClothing = clothing.length;
	//console.log(lengthClothing);
	return clothing[numberGenerator.throwDice(1, clothing.length)-1];
	}
	genHair(){
	return hair[numberGenerator.throwDice(1, hair.length)-1];
	}
	genSymbol(){
	return symbol[numberGenerator.throwDice(1, symbol.length)-1];	
	}
	genEthnicalBacground(){
	return ethnicBackground[numberGenerator.throwDice(1, ethnicBackground.length)-1];
	}
	genParentsSocialStatus(){
	return parentsSocialStatus[numberGenerator.throwDice(1, parentsSocialStatus.length)-1];
	}
	genParentsStatus(){
	return parentsStatus[numberGenerator.throwDice(1, parentsStatus.length)-1];
	}
	genWhatHappenedToParents(){
	return whatHappenedToParents[numberGenerator.throwDice(1, whatHappenedToParents.length)-1];
	}
}
window.styleGenerator = new StyleGenerator();
//console.log(genClothing());