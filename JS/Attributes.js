class Attributes {
  constructor(inteligence, reflex, technology, composure, attractivness, luck, speed, empathy, bodyBuilt) {
    this.inteligence = inteligence;
    this.reflex = reflex;
    this.technology = technology;
    this.composure = composure;
    this.attractivness = attractivness;
    this.luck = luck;
    this.speed = speed;
    this.empathy = empathy;
    this.bodyBuilt = bodyBuilt;
}
throwDiceWithLimit(n, sides, minValue) {
    var results = []
    for (var i = 0; i < n; i++) {
        var throwResult = Math.floor(Math.random() * (sides - minValue + 1) + minValue);
        results.push(throwResult);

    }
    return results;
}


wyswietl() {
    var throwResult = this.throwDiceWithLimit(9, 10, 2)
    // console.log(throwResult);
    console.log(this.inteligence + " " + throwResult[0]);
    console.log(this.reflex + " " + throwResult[1]);
    console.log(this.technology + " " + throwResult[2]);
    console.log(this.composure + " " + throwResult[3]);
    console.log(this.attractivness + " " + throwResult[4]);
    console.log(this.luck + " " + throwResult[5]);
    console.log(this.speed + " " + throwResult[6]);
    console.log(this.empathy + " " + throwResult[7]);
    console.log(this.bodyBuilt + " " + throwResult[8]);
}
throwSet() {
    var throwSet = this.throwDiceWithLimit(9, 10, 2);
    console.log(throwSet);
}
}

var firstChara = new Attributes("Int", "Ref", "Tech", "Com", "Atr", "Lc", "Sp", "Emp", "BB");

firstChara.wyswietl();
firstChara.throwSet();

